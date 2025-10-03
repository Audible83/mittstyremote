<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Participant extends Model
{
    use HasFactory;

    protected $fillable = [
        'meeting_id',
        'name',
        'role',
        'email',
        'is_board_member',
        'is_present',
        'voice_enrolled',
        'enrollment_clip_path',
        'speaker_label',
    ];

    protected function casts(): array
    {
        return [
            'is_board_member' => 'boolean',
            'is_present' => 'boolean',
            'voice_enrolled' => 'boolean',
        ];
    }

    public function meeting()
    {
        return $this->belongsTo(Meeting::class);
    }

    public static function roleOptions(): array
    {
        return [
            'styreleder' => 'Styreleder',
            'styremedlem' => 'Styremedlem',
            'varamedlem' => 'Varamedlem',
            'daglig_leder' => 'Daglig leder',
            'observator' => 'Observatør',
        ];
    }
}
