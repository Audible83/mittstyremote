<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Meeting extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'company_id',
        'company_name',
        'company_orgnr',
        'company_address',
        'meeting_datetime',
        'meeting_location',
        'chair_name',
        'quorum_ok',
        'agenda_text',
        'consent_confirmed',
        'consent_at',
        'consent_ip',
        'consent_user_agent',
        'state',
        'audio_path',
        'pdf_minutes_path',
        'pdf_actions_path',
        'pdf_decisions_path',
        'transcript',
        'diarization_json',
        'words_json',
        'minutes_content',
        'actions_content',
        'decisions_content',
        'retention_until',
    ];

    protected function casts(): array
    {
        return [
            'meeting_datetime' => 'datetime',
            'consent_confirmed' => 'boolean',
            'consent_at' => 'datetime',
            'quorum_ok' => 'boolean',
            'diarization_json' => 'array',
            'words_json' => 'array',
            'retention_until' => 'datetime',
        ];
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function company()
    {
        return $this->belongsTo(Company::class);
    }

    public function participants()
    {
        return $this->hasMany(Participant::class);
    }

    public function shares()
    {
        return $this->hasMany(Share::class);
    }

    public function auditLogs()
    {
        return $this->hasMany(AuditLog::class);
    }

    public function isDemo(): bool
    {
        return $this->user_id === null;
    }

    public function isExpired(): bool
    {
        return $this->retention_until && $this->retention_until->isPast();
    }

    public function isPending(): bool
    {
        return in_array($this->state, ['created', 'uploading']);
    }

    public function isProcessing(): bool
    {
        return in_array($this->state, ['diarizing', 'transcribing', 'summarizing']);
    }

    public function isReady(): bool
    {
        return $this->state === 'ready';
    }

    public function hasFailed(): bool
    {
        return $this->state === 'failed';
    }
}
