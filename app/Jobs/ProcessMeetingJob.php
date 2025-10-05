<?php

namespace App\Jobs;

use App\Models\Meeting;
use App\Services\DiarizationService;
use App\Services\OpenAIService;
use App\Services\PdfService;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Log;

class ProcessMeetingJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    public $timeout = 900; // 15 minutes

    public function __construct(
        public Meeting $meeting
    ) {}

    public function handle(): void
    {
        try {
            Log::info("Starting processing for meeting {$this->meeting->id}");

            // Step 1: Diarize
            $this->meeting->update(['state' => 'diarizing']);
            $diarizationService = app(DiarizationService::class);
            $audioFullPath = Storage::path($this->meeting->audio_path);

            $diarization = $diarizationService->diarize($audioFullPath);
            $this->meeting->update(['diarization_json' => $diarization]);

            Log::info("Diarization complete for meeting {$this->meeting->id}");

            // Step 2: Transcribe
            $this->meeting->update(['state' => 'transcribing']);
            $openAIService = app(OpenAIService::class);

            $transcriptionResult = $openAIService->transcribe($audioFullPath, 'no');
            $this->meeting->update([
                'transcript' => $transcriptionResult['text'],
                'words_json' => $transcriptionResult['words'] ?? null,
            ]);

            Log::info("Transcription complete for meeting {$this->meeting->id}");

            // Step 3: Map speakers to participants
            $participants = $this->meeting->participants()->get()->toArray();

            if (count($participants) > 0 && count($diarization) > 0) {
                $speakerMapping = $diarizationService->mapSpeakersToParticipants(
                    $diarization,
                    $participants
                );

                // Update participants with speaker labels
                foreach ($speakerMapping as $speakerLabel => $participantId) {
                    if (is_numeric($participantId)) {
                        $this->meeting->participants()
                            ->where('id', $participantId)
                            ->update(['speaker_label' => $speakerLabel]);
                    }
                }

                Log::info("Speaker mapping complete for meeting {$this->meeting->id}");
            }

            // Step 4: Generate summaries
            $this->meeting->update(['state' => 'summarizing']);

            $meetingData = [
                'company_name' => $this->meeting->company_name,
                'company_orgnr' => $this->meeting->company_orgnr,
                'company_address' => $this->meeting->company_address,
                'meeting_datetime' => $this->meeting->meeting_datetime->format('d.m.Y H:i'),
                'meeting_location' => $this->meeting->meeting_location,
                'chair_name' => $this->meeting->chair_name,
                'quorum_ok' => $this->meeting->quorum_ok,
                'agenda_text' => $this->meeting->agenda_text,
                'participants' => $participants,
            ];

            $minutes = $openAIService->generateMinutes(
                $meetingData,
                $transcriptionResult['text'],
                $diarization
            );

            $actions = $openAIService->generateActions(
                $transcriptionResult['text'],
                $meetingData
            );

            $decisions = $openAIService->generateDecisions(
                $transcriptionResult['text'],
                $meetingData
            );

            $this->meeting->update([
                'minutes_content' => $minutes,
                'actions_content' => $actions,
                'decisions_content' => $decisions,
            ]);

            Log::info("Summarization complete for meeting {$this->meeting->id}");

            // Step 5: Generate PDFs
            $pdfService = app(PdfService::class);
            $pdfService->generateAllPdfs($this->meeting);

            Log::info("PDF generation complete for meeting {$this->meeting->id}");

            // Mark as ready
            $this->meeting->update(['state' => 'ready']);

            Log::info("Processing complete for meeting {$this->meeting->id}");

        } catch (\Exception $e) {
            Log::error("Processing failed for meeting {$this->meeting->id}: " . $e->getMessage(), [
                'exception' => $e,
            ]);

            $this->meeting->update(['state' => 'failed']);
            throw $e;
        }
    }

    public function failed(\Throwable $exception): void
    {
        Log::error("Job failed for meeting {$this->meeting->id}: " . $exception->getMessage());
        $this->meeting->update(['state' => 'failed']);
    }
}
