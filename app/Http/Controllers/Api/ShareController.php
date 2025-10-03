<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Meeting;
use App\Models\Share;
use App\Models\AuditLog;
use Illuminate\Http\Request;

class ShareController extends Controller
{
    public function create(Request $request, Meeting $meeting)
    {
        $validated = $request->validate([
            'audience' => 'required|in:minutes,actions,decisions,all',
            'ttl_hours' => 'nullable|integer|min:1|max:8760', // Max 1 year
        ]);

        $expiresAt = $request->ttl_hours
            ? now()->addHours($request->ttl_hours)
            : null;

        $share = Share::create([
            'meeting_id' => $meeting->id,
            'audience' => $validated['audience'],
            'expires_at' => $expiresAt,
        ]);

        AuditLog::log('share.created', $meeting->id, null, [
            'share_id' => $share->id,
            'audience' => $share->audience,
        ]);

        return response()->json([
            'token' => $share->token,
            'url' => $share->getUrl(),
            'expires_at' => $share->expires_at,
        ], 201);
    }

    public function view(string $token)
    {
        $share = Share::where('token', $token)->firstOrFail();

        if ($share->isExpired()) {
            return response()->json(['error' => 'Share link has expired'], 410);
        }

        $share->incrementOpenedCount();

        $meeting = $share->meeting()->with('participants')->first();

        $response = [
            'meeting' => [
                'company_name' => $meeting->company_name,
                'company_orgnr' => $meeting->company_orgnr,
                'meeting_datetime' => $meeting->meeting_datetime,
                'meeting_location' => $meeting->meeting_location,
                'chair_name' => $meeting->chair_name,
            ],
            'audience' => $share->audience,
        ];

        if ($share->audience === 'all' || $share->audience === 'minutes') {
            $response['minutes'] = $meeting->minutes_content;
            $response['minutes_pdf_url'] = $meeting->pdf_minutes_path
                ? route('share.download', ['token' => $token, 'type' => 'minutes'])
                : null;
        }

        if ($share->audience === 'all' || $share->audience === 'actions') {
            $response['actions'] = $meeting->actions_content;
            $response['actions_pdf_url'] = $meeting->pdf_actions_path
                ? route('share.download', ['token' => $token, 'type' => 'actions'])
                : null;
        }

        if ($share->audience === 'all' || $share->audience === 'decisions') {
            $response['decisions'] = $meeting->decisions_content;
            $response['decisions_pdf_url'] = $meeting->pdf_decisions_path
                ? route('share.download', ['token' => $token, 'type' => 'decisions'])
                : null;
        }

        return response()->json($response);
    }

    public function download(string $token, string $type)
    {
        $share = Share::where('token', $token)->firstOrFail();

        if ($share->isExpired()) {
            abort(410, 'Share link has expired');
        }

        if (!in_array($type, ['minutes', 'actions', 'decisions'])) {
            abort(400, 'Invalid type');
        }

        // Check if audience allows this type
        if ($share->audience !== 'all' && $share->audience !== $type) {
            abort(403, 'Access denied to this content');
        }

        $meeting = $share->meeting;
        $pathField = "pdf_{$type}_path";

        if (!$meeting->$pathField || !\Storage::exists($meeting->$pathField)) {
            abort(404, 'PDF not found');
        }

        $filename = "{$type}_{$meeting->company_name}_{$meeting->meeting_datetime->format('Ymd')}.pdf";

        AuditLog::log("share.download.{$type}", $meeting->id, null, [
            'share_id' => $share->id,
        ]);

        return \Storage::download($meeting->$pathField, $filename);
    }
}
