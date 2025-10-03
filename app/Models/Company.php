<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Company extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'orgnr',
        'address',
        'zip',
        'city',
        'proff_url',
        'source_checked_at',
        'raw_json',
    ];

    protected function casts(): array
    {
        return [
            'source_checked_at' => 'datetime',
            'raw_json' => 'array',
        ];
    }

    public function meetings()
    {
        return $this->hasMany(Meeting::class);
    }
}
