<?php

return [
    'openai' => [
        'key_file' => env('OPENAI_KEY_FILE', 'openai_api.key'),
        'organization' => env('OPENAI_ORGANIZATION'),
    ],

    'diarization' => [
        'diarize_url' => env('DIARIZE_URL', 'http://localhost:8000/diarize'),
        'enroll_url' => env('DIARIZE_ENROLL_URL', 'http://localhost:8000/enroll'),
        'identify_url' => env('DIARIZE_IDENTIFY_URL', 'http://localhost:8000/identify'),
    ],

    'proff' => [
        'cache_hours' => env('PROFF_CACHE_HOURS', 24),
        'user_agent' => env('PROFF_USER_AGENT', 'MittStyremote/1.0'),
    ],

    'vipps' => [
        'client_id' => env('VIPPS_CLIENT_ID'),
        'client_secret' => env('VIPPS_CLIENT_SECRET'),
        'redirect_uri' => env('VIPPS_REDIRECT_URI'),
        'environment' => env('VIPPS_ENVIRONMENT', 'test'),
    ],
];
