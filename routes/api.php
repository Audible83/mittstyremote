<?php

use App\Http\Controllers\Api\CompanyController;
use App\Http\Controllers\Api\MeetingController;
use App\Http\Controllers\Api\ShareController;
use Illuminate\Support\Facades\Route;

// Company lookup - strict rate limiting to prevent scraping abuse
Route::post('/company/lookup', [CompanyController::class, 'lookup'])
    ->middleware('throttle:10,1'); // 10 requests per minute

// Meeting management - moderate rate limiting
Route::post('/meetings', [MeetingController::class, 'store'])
    ->middleware('throttle:5,1'); // 5 meetings per minute max

Route::post('/meetings/{meeting}/participants', [MeetingController::class, 'addParticipants'])
    ->middleware('throttle:20,1');

Route::post('/meetings/{meeting}/consent', [MeetingController::class, 'consent'])
    ->middleware('throttle:10,1');

// Upload chunks - higher limit for streaming uploads
Route::post('/meetings/{meeting}/upload', [MeetingController::class, 'uploadChunk'])
    ->middleware('throttle:200,1'); // Allow rapid chunk uploads

Route::post('/meetings/{meeting}/finalize', [MeetingController::class, 'finalize'])
    ->middleware('throttle:10,1');

// Status polling - allow frequent checks
Route::get('/meetings/{meeting}/status', [MeetingController::class, 'status'])
    ->middleware('throttle:60,1'); // 1 request per second for polling

// Downloads - moderate limit
Route::get('/meetings/{meeting}/download/{type}', [MeetingController::class, 'download'])
    ->middleware('throttle:30,1');

// Sharing - strict rate limiting
Route::post('/meetings/{meeting}/share', [ShareController::class, 'create'])
    ->middleware('throttle:10,1');
