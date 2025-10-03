<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Share extends Model
{
    use HasFactory;

    protected $fillable = [
        'meeting_id',
        'audience',
        'token',
        'expires_at',
        'opened_count',
    ];

    protected function casts(): array
    {
        return [
            'expires_at' => 'datetime',
        ];
    }

    protected static function boot()
    {
        parent::boot();

        static::creating(function ($share) {
            if (!$share->token) {
                $share->token = (string) Str::uuid();
            }
        });
    }

    public function meeting()
    {
        return $this->belongsTo(Meeting::class);
    }

    public function isExpired(): bool
    {
        return $this->expires_at && $this->expires_at->isPast();
    }

    public function incrementOpenedCount(): void
    {
        $this->increment('opened_count');
    }

    public function getUrl(): string
    {
        return route('share.view', ['token' => $this->token]);
    }
}
