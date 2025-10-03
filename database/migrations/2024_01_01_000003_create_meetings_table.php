<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('meetings', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->nullable()->constrained()->nullOnDelete();
            $table->foreignId('company_id')->nullable()->constrained()->nullOnDelete();

            // Meeting metadata (may differ from company record)
            $table->string('company_name');
            $table->string('company_orgnr', 9)->nullable();
            $table->string('company_address')->nullable();

            $table->dateTime('meeting_datetime');
            $table->string('meeting_location'); // physical address or "Teams", "Zoom", etc.
            $table->string('chair_name'); // styreleder
            $table->boolean('quorum_ok')->default(false);
            $table->text('agenda_text')->nullable();

            // Consent & legal
            $table->boolean('consent_confirmed')->default(false);
            $table->timestamp('consent_at')->nullable();
            $table->string('consent_ip', 45)->nullable();
            $table->text('consent_user_agent')->nullable();

            // Processing state
            $table->enum('state', [
                'created',
                'uploading',
                'diarizing',
                'transcribing',
                'summarizing',
                'ready',
                'failed'
            ])->default('created')->index();

            // File paths
            $table->string('audio_path')->nullable();
            $table->string('pdf_minutes_path')->nullable();
            $table->string('pdf_actions_path')->nullable();
            $table->string('pdf_decisions_path')->nullable();

            // Processing results
            $table->longText('transcript')->nullable();
            $table->json('diarization_json')->nullable();
            $table->json('words_json')->nullable(); // word-level timestamps from Whisper
            $table->longText('minutes_content')->nullable();
            $table->longText('actions_content')->nullable();
            $table->longText('decisions_content')->nullable();

            // Demo mode retention
            $table->timestamp('retention_until')->nullable();

            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('meetings');
    }
};
