<?php

use App\Http\Controllers\Api\ShareController;
use App\Http\Controllers\HealthController;
use Illuminate\Support\Facades\Route;

// Health check endpoint
Route::get('/health', [HealthController::class, 'check'])->name('health');

Route::get('/', function () {
    return view('welcome');
})->name('home');

Route::get('/styremote/ny', function () {
    return view('styremote.wizard');
})->name('meeting.wizard');

Route::get('/styremote/{meeting}/status', function ($meetingId) {
    return view('styremote.status', ['meetingId' => $meetingId]);
})->name('meeting.status');

Route::get('/styremote/{meeting}/resultat', function ($meetingId) {
    return view('styremote.result', ['meetingId' => $meetingId]);
})->name('meeting.result');

// Share routes (public)
Route::get('/del/{token}', [ShareController::class, 'view'])->name('share.view');
Route::get('/del/{token}/download/{type}', [ShareController::class, 'download'])->name('share.download');

// Auth routes (Vipps integration - to be implemented)
Route::get('/auth/vipps', function () {
    return redirect('/'); // TODO: Implement Vipps OAuth
})->name('auth.vipps');

Route::get('/auth/vipps/callback', function () {
    return redirect('/'); // TODO: Implement Vipps OAuth callback
})->name('auth.vipps.callback');
