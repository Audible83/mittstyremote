<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('companies', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('orgnr', 9)->unique()->index();
            $table->string('address')->nullable();
            $table->string('zip', 10)->nullable();
            $table->string('city')->nullable();
            $table->string('proff_url')->nullable();
            $table->timestamp('source_checked_at')->nullable();
            $table->json('raw_json')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('companies');
    }
};
