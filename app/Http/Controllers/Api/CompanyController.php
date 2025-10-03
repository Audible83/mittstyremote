<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Services\ProffLookupService;
use Illuminate\Http\Request;

class CompanyController extends Controller
{
    public function __construct(
        private ProffLookupService $proffService
    ) {}

    public function lookup(Request $request)
    {
        $request->validate([
            'orgnr' => 'nullable|string|max:9',
            'name' => 'nullable|string|max:255',
        ]);

        if (!$request->orgnr && !$request->name) {
            return response()->json(['error' => 'Either orgnr or name is required'], 400);
        }

        $data = $this->proffService->lookup($request->orgnr, $request->name);

        if (!$data) {
            return response()->json(['error' => 'Company not found or lookup failed'], 404);
        }

        // Optionally save to database
        if ($request->boolean('save')) {
            $company = $this->proffService->saveCompany($data);
            $data['id'] = $company->id;
        }

        return response()->json($data);
    }
}
