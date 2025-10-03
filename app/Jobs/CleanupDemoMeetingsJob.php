<?php

namespace App\Jobs;

use App\Models\Meeting;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Log;

class CleanupDemoMeetingsJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    public function handle(): void
    {
        $expiredMeetings = Meeting::whereNotNull('retention_until')
            ->where('retention_until', '<=', now())
            ->get();

        foreach ($expiredMeetings as $meeting) {
            try {
                Log::info("Cleaning up expired meeting {$meeting->id}");

                // Delete audio file
                if ($meeting->audio_path && Storage::exists($meeting->audio_path)) {
                    Storage::delete($meeting->audio_path);
                }

                // Delete PDF files
                foreach (['pdf_minutes_path', 'pdf_actions_path', 'pdf_decisions_path'] as $field) {
                    if ($meeting->$field && Storage::exists($meeting->$field)) {
                        Storage::delete($meeting->$field);
                    }
                }

                // Delete enrollment clips if any
                foreach ($meeting->participants as $participant) {
                    if ($participant->enrollment_clip_path && Storage::exists($participant->enrollment_clip_path)) {
                        Storage::delete($participant->enrollment_clip_path);
                    }
                }

                // Delete the meeting (cascade will delete participants, shares, audit logs)
                $meeting->delete();

                Log::info("Successfully cleaned up meeting {$meeting->id}");

            } catch (\Exception $e) {
                Log::error("Failed to cleanup meeting {$meeting->id}: " . $e->getMessage());
            }
        }
    }
}
