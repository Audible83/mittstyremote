<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AuditLog extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $fillable = [
        'user_id',
        'meeting_id',
        'action',
        'meta_json',
        'ip_address',
        'user_agent',
        'created_at',
    ];

    protected function casts(): array
    {
        return [
            'meta_json' => 'array',
            'created_at' => 'datetime',
        ];
    }

    protected static function boot()
    {
        parent::boot();

        static::creating(function ($log) {
            if (!$log->created_at) {
                $log->created_at = now();
            }
        });
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function meeting()
    {
        return $this->belongsTo(Meeting::class);
    }

    public static function log(
        string $action,
        ?int $meetingId = null,
        ?int $userId = null,
        ?array $meta = null
    ): self {
        return self::create([
            'action' => $action,
            'meeting_id' => $meetingId,
            'user_id' => $userId ?? auth()->id(),
            'meta_json' => $meta,
            'ip_address' => request()->ip(),
            'user_agent' => request()->userAgent(),
        ]);
    }
}
