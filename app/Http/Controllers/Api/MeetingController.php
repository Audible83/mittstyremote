<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Meeting;
use App\Models\Participant;
use App\Models\AuditLog;
use App\Jobs\ProcessMeetingJob;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class MeetingController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'company_name' => 'required|string|max:255|regex:/^[\pL\s\-0-9\.]+$/u',
            'company_orgnr' => 'nullable|string|size:9|regex:/^[0-9]{9}$/',
            'company_address' => 'nullable|string|max:500',
            'meeting_datetime' => 'required|date|after:2020-01-01|before:2030-12-31',
            'meeting_location' => 'required|string|max:255',
            'chair_name' => 'required|string|max:255|regex:/^[\pL\s\-\.]+$/u',
            'quorum_ok' => 'required|boolean',
            'agenda_text' => 'nullable|string|max:10000',
        ]);

        $meeting = Meeting::create(array_merge($validated, [
            'user_id' => auth()->id(),
            'state' => 'created',
            'retention_until' => auth()->guest()
                ? now()->addHours(config('app.demo_retention_hours', 48))
                : null,
        ]));

        // Track session for demo mode
        if (!auth()->check()) {
            session(["meeting_{$meeting->id}_session" => session()->getId()]);
        }

        AuditLog::log('meeting.created', $meeting->id);

        return response()->json($meeting, 201);
    }

    public function addParticipants(Request $request, Meeting $meeting)
    {
        $validated = $request->validate([
            'participants' => 'required|array|min:1|max:50',
            'participants.*.name' => 'required|string|max:255|regex:/^[\pL\s\-\.]+$/u',
            'participants.*.role' => 'required|string|in:styreleder,styremedlem,varamedlem,daglig_leder,observator',
            'participants.*.email' => 'nullable|email:rfc,dns|max:255',
            'participants.*.is_present' => 'boolean',
        ]);

        foreach ($validated['participants'] as $participantData) {
            Participant::create(array_merge($participantData, [
                'meeting_id' => $meeting->id,
                'is_board_member' => in_array($participantData['role'], ['styreleder', 'styremedlem', 'varamedlem']),
            ]));
        }

        AuditLog::log('participants.added', $meeting->id);

        return response()->json(['message' => 'Participants added successfully']);
    }

    public function consent(Request $request, Meeting $meeting)
    {
        $request->validate([
            'consent_confirmed' => 'required|boolean|accepted',
        ]);

        $meeting->update([
            'consent_confirmed' => true,
            'consent_at' => now(),
            'consent_ip' => $request->ip(),
            'consent_user_agent' => $request->userAgent(),
        ]);

        AuditLog::log('consent.accepted', $meeting->id);

        return response()->json(['message' => 'Consent recorded']);
    }

    public function uploadChunk(Request $request, Meeting $meeting)
    {
        $request->validate([
            'chunk' => 'required|file|max:10240|mimes:webm,ogg,mp4,wav,mp3',
            'seq' => 'required|integer|min:0|max:10000',
            'is_last' => 'required|boolean',
        ]);

        // Verify meeting state
        if (!in_array($meeting->state, ['created', 'uploading'])) {
            return response()->json([
                'error' => 'Meeting is not in uploadable state',
                'current_state' => $meeting->state
            ], 400);
        }

        if (!$meeting->consent_confirmed) {
            return response()->json(['error' => 'Consent not confirmed'], 403);
        }

        $meeting->update(['state' => 'uploading']);

        $chunkPath = "audio/chunks/{$meeting->id}";
        $chunkFile = $request->file('chunk')->storeAs(
            $chunkPath,
            "chunk_{$request->seq}.webm"
        );

        if ($request->boolean('is_last')) {
            // Assemble all chunks
            $this->assembleChunks($meeting, $chunkPath);
        }

        return response()->json(['message' => 'Chunk uploaded', 'seq' => $request->seq]);
    }

    private function assembleChunks(Meeting $meeting, string $chunkPath): void
    {
        $chunks = Storage::files($chunkPath);

        if (empty($chunks)) {
            throw new \Exception("No audio chunks found for meeting {$meeting->id}");
        }

        // Numeric sort by chunk number
        usort($chunks, function($a, $b) {
            preg_match('/chunk_(\d+)\.webm$/', basename($a), $matchA);
            preg_match('/chunk_(\d+)\.webm$/', basename($b), $matchB);
            return (int)($matchA[1] ?? 0) <=> (int)($matchB[1] ?? 0);
        });

        \Log::info("Assembling " . count($chunks) . " chunks for meeting {$meeting->id}");

        $finalPath = "audio/meeting_{$meeting->id}_" . now()->format('Ymd_His') . ".webm";
        $finalFullPath = Storage::path($finalPath);

        // Ensure output directory exists
        $outputDir = dirname($finalFullPath);
        if (!is_dir($outputDir)) {
            mkdir($outputDir, 0775, true);
        }

        // Use FFmpeg for proper WebM concatenation
        $this->concatenateWithFFmpeg($chunks, $finalFullPath, $meeting->id);

        // Cleanup chunks
        Storage::deleteDirectory($chunkPath);

        $meeting->update(['audio_path' => $finalPath]);

        AuditLog::log('audio.uploaded', $meeting->id, null, [
            'chunk_count' => count($chunks),
            'file_size' => filesize($finalFullPath)
        ]);
    }

    private function concatenateWithFFmpeg(array $chunks, string $output, int $meetingId): void
    {
        // Create concat list file
        $concatListPath = storage_path("app/temp/concat_{$meetingId}.txt");

        // Ensure temp directory exists
        if (!is_dir(dirname($concatListPath))) {
            mkdir(dirname($concatListPath), 0775, true);
        }

        $concatContent = '';
        foreach ($chunks as $chunk) {
            $fullPath = Storage::path($chunk);
            if (!file_exists($fullPath)) {
                throw new \Exception("Chunk file not found: {$chunk}");
            }
            // FFmpeg concat format: file '/path/to/file'
            $concatContent .= "file '" . str_replace("'", "'\\''", $fullPath) . "'\n";
        }

        file_put_contents($concatListPath, $concatContent);

        // Run FFmpeg
        $ffmpegPath = env('FFMPEG_PATH', 'ffmpeg');
        $command = sprintf(
            '%s -f concat -safe 0 -i %s -c copy %s 2>&1',
            escapeshellarg($ffmpegPath),
            escapeshellarg($concatListPath),
            escapeshellarg($output)
        );

        exec($command, $outputLines, $returnCode);

        // Cleanup concat list
        @unlink($concatListPath);

        if ($returnCode !== 0) {
            \Log::error("FFmpeg concatenation failed", [
                'meeting_id' => $meetingId,
                'command' => $command,
                'output' => implode("\n", $outputLines),
                'return_code' => $returnCode
            ]);

            // Fallback to simple concatenation
            \Log::warning("Falling back to simple concatenation for meeting {$meetingId}");
            $this->simpleConcatenation($chunks, $output);
        }

        if (!file_exists($output) || filesize($output) === 0) {
            throw new \Exception("Audio assembly produced empty or missing file");
        }
    }

    private function simpleConcatenation(array $chunks, string $output): void
    {
        $outputHandle = fopen($output, 'wb');

        if (!$outputHandle) {
            throw new \Exception("Cannot create output file: {$output}");
        }

        try {
            foreach ($chunks as $chunk) {
                $chunkPath = Storage::path($chunk);
                $inputHandle = fopen($chunkPath, 'rb');

                if (!$inputHandle) {
                    \Log::error("Cannot read chunk: {$chunk}");
                    continue;
                }

                stream_copy_to_stream($inputHandle, $outputHandle);
                fclose($inputHandle);
            }
        } finally {
            fclose($outputHandle);
        }
    }

    public function finalize(Meeting $meeting)
    {
        if (!$meeting->audio_path) {
            return response()->json(['error' => 'No audio uploaded'], 400);
        }

        // Dispatch processing job
        ProcessMeetingJob::dispatch($meeting);

        AuditLog::log('processing.started', $meeting->id);

        return response()->json(['message' => 'Processing started']);
    }

    public function status(Meeting $meeting)
    {
        return response()->json([
            'id' => $meeting->id,
            'state' => $meeting->state,
            'is_ready' => $meeting->isReady(),
            'has_failed' => $meeting->hasFailed(),
            'is_processing' => $meeting->isProcessing(),
            'created_at' => $meeting->created_at,
            'updated_at' => $meeting->updated_at,
        ]);
    }

    public function download(Meeting $meeting, string $type)
    {
        if (!in_array($type, ['minutes', 'actions', 'decisions'])) {
            return response()->json(['error' => 'Invalid type'], 400);
        }

        $pathField = "pdf_{$type}_path";
        $path = $meeting->$pathField;

        if (!$path || !Storage::exists($path)) {
            return response()->json(['error' => 'PDF not found'], 404);
        }

        $filename = "{$type}_{$meeting->company_name}_{$meeting->meeting_datetime->format('Ymd')}.pdf";

        AuditLog::log("download.{$type}", $meeting->id);

        return Storage::download($path, $filename);
    }
}
