<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Redis;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\JsonResponse;

class HealthController extends Controller
{
    /**
     * Health check endpoint
     * Returns system status and connectivity checks
     */
    public function check(): JsonResponse
    {
        $checks = [
            'status' => 'healthy',
            'timestamp' => now()->toIso8601String(),
            'checks' => []
        ];

        // Database connectivity
        try {
            DB::connection()->getPdo();
            $checks['checks']['database'] = [
                'status' => 'ok',
                'message' => 'Database connection successful'
            ];
        } catch (\Exception $e) {
            $checks['status'] = 'unhealthy';
            $checks['checks']['database'] = [
                'status' => 'error',
                'message' => 'Database connection failed: ' . $e->getMessage()
            ];
        }

        // Redis connectivity
        try {
            Redis::ping();
            $checks['checks']['redis'] = [
                'status' => 'ok',
                'message' => 'Redis connection successful'
            ];
        } catch (\Exception $e) {
            $checks['status'] = 'unhealthy';
            $checks['checks']['redis'] = [
                'status' => 'error',
                'message' => 'Redis connection failed: ' . $e->getMessage()
            ];
        }

        // Storage accessibility
        try {
            Storage::exists('.health_check');
            $checks['checks']['storage'] = [
                'status' => 'ok',
                'message' => 'Storage is accessible'
            ];
        } catch (\Exception $e) {
            $checks['status'] = 'unhealthy';
            $checks['checks']['storage'] = [
                'status' => 'error',
                'message' => 'Storage check failed: ' . $e->getMessage()
            ];
        }

        // Diarization service (optional check)
        $diarizationUrl = config('services.diarization.diarize_url');
        if ($diarizationUrl) {
            try {
                $response = \Illuminate\Support\Facades\Http::timeout(5)->get($diarizationUrl);
                $checks['checks']['diarization_service'] = [
                    'status' => $response->successful() ? 'ok' : 'degraded',
                    'message' => 'Diarization service reachable'
                ];
            } catch (\Exception $e) {
                $checks['checks']['diarization_service'] = [
                    'status' => 'degraded',
                    'message' => 'Diarization service unreachable (optional)'
                ];
            }
        }

        // Return appropriate HTTP status
        $httpStatus = match ($checks['status']) {
            'healthy' => 200,
            'degraded' => 200,
            'unhealthy' => 503,
            default => 500
        };

        return response()->json($checks, $httpStatus);
    }
}
