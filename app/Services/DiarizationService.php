<?php

namespace App\Services;

use Illuminate\Support\Facades\Http;

class DiarizationService
{
    private string $diarizeUrl;
    private string $enrollUrl;
    private string $identifyUrl;

    public function __construct()
    {
        $this->diarizeUrl = config('services.diarization.diarize_url');
        $this->enrollUrl = config('services.diarization.enroll_url');
        $this->identifyUrl = config('services.diarization.identify_url');
    }

    /**
     * Diarize audio file to identify speakers
     *
     * @param string $audioPath Path to audio file
     * @return array Array of segments with speaker labels
     */
    public function diarize(string $audioPath): array
    {
        // Validate input
        if (!file_exists($audioPath)) {
            throw new \Exception("Audio file not found: {$audioPath}");
        }

        if (!is_readable($audioPath)) {
            throw new \Exception("Audio file not readable: {$audioPath}");
        }

        $fileSize = filesize($audioPath);
        if ($fileSize === 0) {
            throw new \Exception("Audio file is empty");
        }

        try {
            \Log::info("Starting diarization", [
                'path' => $audioPath,
                'size' => $fileSize,
                'url' => $this->diarizeUrl
            ]);

            $response = Http::timeout(300) // 5 minutes for diarization
                ->attach('file', file_get_contents($audioPath), basename($audioPath))
                ->post($this->diarizeUrl);

            if (!$response->successful()) {
                throw new \Exception("Diarization API error (HTTP {$response->status()}): " . $response->body());
            }

            $data = $response->json();

            if (!$data) {
                throw new \Exception("Invalid diarization response: empty or non-JSON data");
            }

            // Expected format: [{"start": 0.0, "end": 5.2, "speaker": "SPK00"}, ...]
            $segments = $data['segments'] ?? $data;

            if (!is_array($segments)) {
                throw new \Exception("Invalid diarization response format: expected array of segments");
            }

            \Log::info("Diarization successful", [
                'segment_count' => count($segments)
            ]);

            return $segments;

        } catch (\Exception $e) {
            \Log::error("Diarization failed", [
                'error' => $e->getMessage(),
                'audio_path' => $audioPath
            ]);
            throw new \Exception("Diarization failed: " . $e->getMessage());
        }
    }

    /**
     * Enroll a speaker voice sample (v2 feature)
     *
     * @param string $audioPath Path to voice sample
     * @param int $personId Participant ID
     * @return array Enrollment data with embedding
     */
    public function enroll(string $audioPath, int $personId): array
    {
        if (!file_exists($audioPath)) {
            throw new \Exception("Voice sample not found: {$audioPath}");
        }

        if (!is_readable($audioPath)) {
            throw new \Exception("Voice sample not readable: {$audioPath}");
        }

        try {
            \Log::info("Enrolling speaker", [
                'person_id' => $personId,
                'audio_path' => $audioPath
            ]);

            $response = Http::timeout(60)
                ->attach('file', file_get_contents($audioPath), basename($audioPath))
                ->post($this->enrollUrl, [
                    'person_id' => $personId,
                ]);

            if (!$response->successful()) {
                throw new \Exception("Enrollment API error (HTTP {$response->status()}): " . $response->body());
            }

            $data = $response->json();

            if (!$data) {
                throw new \Exception("Invalid enrollment response: empty or non-JSON data");
            }

            \Log::info("Speaker enrollment successful", [
                'person_id' => $personId
            ]);

            return $data;

        } catch (\Exception $e) {
            \Log::error("Speaker enrollment failed", [
                'error' => $e->getMessage(),
                'person_id' => $personId
            ]);
            throw new \Exception("Speaker enrollment failed: " . $e->getMessage());
        }
    }

    /**
     * Identify speakers using enrolled voice samples (v2 feature)
     *
     * @param string $audioPath Path to audio file
     * @param array $enrollments Array of enrollment data
     * @return array Segments with person IDs instead of generic speaker labels
     */
    public function identify(string $audioPath, array $enrollments): array
    {
        if (!file_exists($audioPath)) {
            throw new \Exception("Audio file not found: {$audioPath}");
        }

        if (!is_readable($audioPath)) {
            throw new \Exception("Audio file not readable: {$audioPath}");
        }

        if (empty($enrollments)) {
            throw new \Exception("No enrollments provided for speaker identification");
        }

        try {
            \Log::info("Identifying speakers", [
                'audio_path' => $audioPath,
                'enrollment_count' => count($enrollments)
            ]);

            $response = Http::timeout(300)
                ->attach('file', file_get_contents($audioPath), basename($audioPath))
                ->post($this->identifyUrl, [
                    'enrollments' => $enrollments,
                ]);

            if (!$response->successful()) {
                throw new \Exception("Identification API error (HTTP {$response->status()}): " . $response->body());
            }

            $data = $response->json();

            if (!$data) {
                throw new \Exception("Invalid identification response: empty or non-JSON data");
            }

            $segments = $data['segments'] ?? $data;

            \Log::info("Speaker identification successful", [
                'segment_count' => count($segments)
            ]);

            return $segments;

        } catch (\Exception $e) {
            \Log::error("Speaker identification failed", [
                'error' => $e->getMessage(),
                'audio_path' => $audioPath
            ]);
            throw new \Exception("Speaker identification failed: " . $e->getMessage());
        }
    }

    /**
     * Map speaker labels to participant names (heuristic approach for MVP)
     *
     * @param array $diarization Diarization segments
     * @param array $participants List of participants
     * @return array Mapping of speaker labels to participant IDs
     */
    public function mapSpeakersToParticipants(array $diarization, array $participants): array
    {
        // Calculate speaking time per speaker
        $speakerDurations = [];

        foreach ($diarization as $segment) {
            $speaker = $segment['speaker'];
            $duration = $segment['end'] - $segment['start'];

            if (!isset($speakerDurations[$speaker])) {
                $speakerDurations[$speaker] = 0;
            }

            $speakerDurations[$speaker] += $duration;
        }

        // Sort speakers by total speaking time (descending)
        arsort($speakerDurations);

        // Sort participants with styreleder first, then by likely speaking order
        $sortedParticipants = collect($participants)->sortByDesc(function ($participant) {
            $roleWeight = match (strtolower($participant['role'])) {
                'styreleder' => 100,
                'daglig_leder', 'daglig leder' => 80,
                'styremedlem' => 50,
                default => 10,
            };
            return $roleWeight;
        })->values()->all();

        // Map speakers to participants
        $mapping = [];
        $participantIndex = 0;

        foreach (array_keys($speakerDurations) as $speaker) {
            if ($participantIndex < count($sortedParticipants)) {
                $mapping[$speaker] = $sortedParticipants[$participantIndex]['id'] ?? $sortedParticipants[$participantIndex]['name'];
                $participantIndex++;
            } else {
                $mapping[$speaker] = "Ukjent " . $speaker;
            }
        }

        return $mapping;
    }

    /**
     * Apply speaker mapping to transcript
     *
     * @param string $transcript Original transcript
     * @param array $diarization Diarization segments
     * @param array $speakerMapping Mapping of speaker labels to names
     * @return string Transcript with speaker names
     */
    public function applyMapping(string $transcript, array $diarization, array $speakerMapping): string
    {
        // This is a simple implementation - in production you'd want more sophisticated merging
        $lines = explode("\n", $transcript);
        $result = "";

        foreach ($diarization as $i => $segment) {
            $speaker = $segment['speaker'];
            $speakerName = $speakerMapping[$speaker] ?? $speaker;
            $start = gmdate("H:i:s", (int) $segment['start']);

            // Try to extract corresponding text from transcript
            // This is simplified - Whisper's word-level timestamps would be better
            $segmentText = $lines[$i] ?? '';

            $result .= "[{$start}] {$speakerName}: {$segmentText}\n";
        }

        return $result ?: $transcript;
    }
}
