<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Meeting;
use App\Models\Participant;
use App\Models\AuditLog;
use App\Jobs\ProcessMeetingJob;
use App\Services\OpenAIService;
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
            'meeting_location' => 'nullable|string|max:255',
            'chair_name' => 'nullable|string|max:255|regex:/^[\pL\s\-0-9\.]+$/u',
            'quorum_ok' => 'nullable|boolean',
            'agenda_text' => 'nullable|string|max:10000',
            'participants' => 'nullable|array|min:1|max:50',
            'participants.*.name' => 'required_with:participants|string|max:255|regex:/^[\pL\s\-0-9\.]+$/u',
            'participants.*.role' => 'required_with:participants|string|in:styreleder,styremedlem,varamedlem,daglig_leder,observator',
        ]);

        // Extract participants if provided
        $participants = $validated['participants'] ?? [];
        unset($validated['participants']);

        // Set defaults for optional fields
        $validated['meeting_location'] = $validated['meeting_location'] ?? 'Digitalt møte';
        $validated['chair_name'] = $validated['chair_name'] ?? ($participants[0]['name'] ?? 'Ikke spesifisert');
        $validated['quorum_ok'] = $validated['quorum_ok'] ?? true;

        $meeting = Meeting::create(array_merge($validated, [
            'user_id' => auth()->id(),
            'state' => 'created',
            'retention_until' => auth()->guest()
                ? now()->addHours((int) config('app.demo_retention_hours', 48))
                : null,
        ]));

        // Create participants if provided
        if (!empty($participants)) {
            foreach ($participants as $participantData) {
                Participant::create(array_merge($participantData, [
                    'meeting_id' => $meeting->id,
                    'is_board_member' => in_array($participantData['role'], ['styreleder', 'styremedlem', 'varamedlem']),
                    'is_present' => true,
                ]));
            }
        }

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
            'participants.*.name' => 'required|string|max:255|regex:/^[\pL\s\-0-9\.]+$/u',
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

        // Security: Validate file content type
        $uploadedFile = $request->file('chunk');
        $mimeType = $uploadedFile->getMimeType();
        $allowedMimes = ['audio/webm', 'audio/ogg', 'audio/mp4', 'audio/wav', 'audio/mpeg', 'audio/x-wav', 'video/webm'];

        if (!in_array($mimeType, $allowedMimes)) {
            return response()->json([
                'error' => 'Invalid file type',
                'detected' => $mimeType
            ], 400);
        }

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

        // Security: Sanitize filename and use proper extension
        $extension = $uploadedFile->getClientOriginalExtension();
        if (!in_array($extension, ['webm', 'ogg', 'mp4', 'wav', 'mp3'])) {
            $extension = 'webm';
        }

        $chunkFile = $uploadedFile->storeAs(
            $chunkPath,
            sprintf("chunk_%05d.%s", $request->seq, $extension)
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

        // Numeric sort by chunk number (supports multiple extensions)
        usort($chunks, function($a, $b) {
            preg_match('/chunk_(\d+)\.\w+$/', basename($a), $matchA);
            preg_match('/chunk_(\d+)\.\w+$/', basename($b), $matchB);
            return (int)($matchA[1] ?? 0) <=> (int)($matchB[1] ?? 0);
        });

        \Log::info("Assembling " . count($chunks) . " chunks for meeting {$meeting->id}");

        // Determine final format based on first chunk
        $firstChunk = basename($chunks[0]);
        $isWav = str_ends_with(strtolower($firstChunk), '.wav');
        $finalExtension = $isWav ? 'wav' : 'webm';

        $finalPath = "audio/meeting_{$meeting->id}_" . now()->format('Ymd_His') . ".{$finalExtension}";
        $finalFullPath = Storage::path($finalPath);

        // Ensure output directory exists
        $outputDir = dirname($finalFullPath);
        if (!is_dir($outputDir)) {
            mkdir($outputDir, 0775, true);
        }

        // Use FFmpeg for proper audio concatenation (supports both WAV and WebM)
        $this->concatenateWithFFmpeg($chunks, $finalFullPath, $meeting->id, $isWav);

        // Cleanup chunks
        Storage::deleteDirectory($chunkPath);

        $meeting->update(['audio_path' => $finalPath]);

        AuditLog::log('audio.uploaded', $meeting->id, null, [
            'chunk_count' => count($chunks),
            'file_size' => filesize($finalFullPath)
        ]);
    }

    private function concatenateWithFFmpeg(array $chunks, string $output, int $meetingId, bool $isWav = false): void
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

        // Run FFmpeg - for WAV we need to re-encode to ensure compatibility
        $ffmpegPath = env('FFMPEG_PATH', 'ffmpeg');

        if ($isWav) {
            // For WAV files from VAD: ensure 16kHz, mono, 16-bit PCM (optimal for Whisper)
            $command = sprintf(
                '%s -f concat -safe 0 -i %s -ar 16000 -ac 1 -c:a pcm_s16le %s 2>&1',
                escapeshellarg($ffmpegPath),
                escapeshellarg($concatListPath),
                escapeshellarg($output)
            );
        } else {
            // For WebM: simple copy
            $command = sprintf(
                '%s -f concat -safe 0 -i %s -c copy %s 2>&1',
                escapeshellarg($ffmpegPath),
                escapeshellarg($concatListPath),
                escapeshellarg($output)
            );
        }

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
        if (!in_array($type, ['minutes', 'actions', 'decisions', 'pdf'])) {
            return response()->json(['error' => 'Invalid type'], 400);
        }

        // Handle 'pdf' type as alias for 'minutes'
        if ($type === 'pdf') {
            $type = 'minutes';
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

    /**
     * Transcribe audio chunk for live transcription
     */
    public function transcribeChunk(Request $request, Meeting $meeting)
    {
        $request->validate([
            'audio' => 'required|file|max:10240|mimes:webm,ogg,mp4,wav,mp3',
        ]);

        try {
            $audioFile = $request->file('audio');

            // Save chunk temporarily
            // Use .wav extension since VAD always sends WAV format
            $extension = $audioFile->getClientOriginalExtension() ?: 'wav';
            $tempPath = $audioFile->storeAs(
                "audio/temp/{$meeting->id}",
                'chunk_' . now()->timestamp . '.' . $extension
            );

            $fullPath = Storage::path($tempPath);

            // Transcribe using OpenAI Whisper
            $openAIService = app(OpenAIService::class);
            $result = $openAIService->transcribe($fullPath, 'no');

            // Cleanup temp file
            Storage::delete($tempPath);

            // Append to meeting transcript
            $currentTranscript = $meeting->transcript ?? '';
            $meeting->update([
                'transcript' => $currentTranscript . ' ' . $result['text']
            ]);

            AuditLog::log('transcription.chunk', $meeting->id);

            return response()->json([
                'text' => $result['text'],
                'language' => $result['language'] ?? 'no'
            ]);

        } catch (\Exception $e) {
            \Log::error("Chunk transcription failed for meeting {$meeting->id}: " . $e->getMessage());
            return response()->json([
                'error' => 'Transcription failed',
                'message' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Generate styrenotat from transcription
     */
    public function generateNotat(Request $request, Meeting $meeting)
    {
        $validated = $request->validate([
            'transcription' => 'required|string|min:10',
            'company' => 'required|array',
            'company.name' => 'required|string',
            'company.orgnr' => 'nullable|string',
            'company.meetingDate' => 'required|string',
            'participants' => 'required|array|min:1',
            'participants.*.name' => 'required|string',
            'participants.*.role' => 'required|string',
        ]);

        try {
            // Update meeting with final transcription
            $meeting->update([
                'transcript' => $validated['transcription'],
                'state' => 'summarizing'
            ]);

            // Prepare meeting data for generation
            $meetingData = [
                'company_name' => $validated['company']['name'],
                'company_orgnr' => $validated['company']['orgnr'] ?? '',
                'company_address' => '',
                'meeting_datetime' => $validated['company']['meetingDate'],
                'meeting_location' => 'Digitalt møte',
                'chair_name' => $validated['participants'][0]['name'] ?? 'Ikke spesifisert',
                'quorum_ok' => true,
                'agenda_text' => '',
                'participants' => array_map(function($p) {
                    return [
                        'name' => $p['name'],
                        'role' => $p['role'],
                        'is_present' => true
                    ];
                }, $validated['participants']),
            ];

            // Generate styrenotat using OpenAI
            $openAIService = app(OpenAIService::class);
            $minutes = $openAIService->generateMinutes(
                $meetingData,
                $validated['transcription'],
                []
            );

            // Convert markdown to HTML (simple conversion)
            $html = $this->markdownToHtml($minutes);

            // Update meeting with generated content
            $meeting->update([
                'minutes_content' => $minutes,
                'state' => 'ready'
            ]);

            AuditLog::log('notat.generated', $meeting->id);

            return response()->json([
                'html' => $html,
                'markdown' => $minutes
            ]);

        } catch (\Exception $e) {
            \Log::error("Notat generation failed for meeting {$meeting->id}: " . $e->getMessage());
            $meeting->update(['state' => 'failed']);

            return response()->json([
                'error' => 'Generation failed',
                'message' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Simple markdown to HTML converter
     */
    private function markdownToHtml(string $markdown): string
    {
        // Basic markdown conversion
        $html = $markdown;

        // Headers
        $html = preg_replace('/^# (.+)$/m', '<h1>$1</h1>', $html);
        $html = preg_replace('/^## (.+)$/m', '<h2>$1</h2>', $html);
        $html = preg_replace('/^### (.+)$/m', '<h3>$1</h3>', $html);

        // Bold
        $html = preg_replace('/\*\*(.+?)\*\*/', '<strong>$1</strong>', $html);

        // Italic
        $html = preg_replace('/\*(.+?)\*/', '<em>$1</em>', $html);

        // Lists
        $html = preg_replace('/^- (.+)$/m', '<li>$1</li>', $html);
        $html = preg_replace('/(<li>.*<\/li>)/s', '<ul>$1</ul>', $html);

        // Paragraphs
        $html = preg_replace('/\n\n/', '</p><p>', $html);
        $html = '<p>' . $html . '</p>';

        // Line breaks
        $html = preg_replace('/\n/', '<br>', $html);

        return $html;
    }
}
