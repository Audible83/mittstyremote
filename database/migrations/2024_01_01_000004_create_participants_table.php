<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('participants', function (Blueprint $table) {
            $table->id();
            $table->foreignId('meeting_id')->constrained()->cascadeOnDelete();
            $table->string('name');
            $table->string('role'); // styreleder, styremedlem, varamedlem, daglig leder, observatør
            $table->string('email')->nullable();
            $table->boolean('is_board_member')->default(true);
            $table->boolean('is_present')->default(true);

            // Speaker diarization / enrollment (v2)
            $table->boolean('voice_enrolled')->default(false);
            $table->string('enrollment_clip_path')->nullable();
            $table->string('speaker_label')->nullable(); // mapped SPK00, SPK01, etc.

            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('participants');
    }
};
