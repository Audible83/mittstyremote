<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('shares', function (Blueprint $table) {
            $table->id();
            $table->foreignId('meeting_id')->constrained()->cascadeOnDelete();
            $table->enum('audience', ['minutes', 'actions', 'decisions', 'all'])->default('all');
            $table->uuid('token')->unique()->index();
            $table->timestamp('expires_at')->nullable();
            $table->integer('opened_count')->default(0);
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('shares');
    }
};
