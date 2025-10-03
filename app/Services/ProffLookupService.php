<?php

namespace App\Services;

use App\Models\Company;
use App\Models\AuditLog;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Http;
use Symfony\Component\DomCrawler\Crawler;

class ProffLookupService
{
    private const BASE_URL = 'https://www.proff.no';
    private const SEARCH_URL = 'https://www.proff.no/bransjes%C3%B8k';

    public function __construct(
        private readonly int $cacheHours = 24
    ) {}

    /**
     * Lookup company by organization number or name
     */
    public function lookup(string $orgnr = null, string $name = null): ?array
    {
        if (!$orgnr && !$name) {
            return null;
        }

        $cacheKey = $orgnr ? "proff.orgnr.{$orgnr}" : "proff.name." . md5($name);

        return Cache::remember($cacheKey, now()->addHours($this->cacheHours), function () use ($orgnr, $name) {
            try {
                if ($orgnr) {
                    return $this->lookupByOrgnr($orgnr);
                }
                return $this->lookupByName($name);
            } catch (\Exception $e) {
                \Log::error('Proff lookup failed', [
                    'orgnr' => $orgnr,
                    'name' => $name,
                    'error' => $e->getMessage()
                ]);

                AuditLog::log('proff.lookup.failed', null, null, [
                    'orgnr' => $orgnr,
                    'name' => $name,
                    'error' => $e->getMessage()
                ]);

                return null;
            }
        });
    }

    /**
     * Save lookup result to database
     */
    public function saveCompany(array $data): Company
    {
        $company = Company::updateOrCreate(
            ['orgnr' => $data['orgnr']],
            [
                'name' => $data['name'],
                'address' => $data['address'] ?? null,
                'zip' => $data['zip'] ?? null,
                'city' => $data['city'] ?? null,
                'proff_url' => $data['proff_url'] ?? null,
                'source_checked_at' => now(),
                'raw_json' => $data,
            ]
        );

        AuditLog::log('proff.lookup.success', null, null, [
            'company_id' => $company->id,
            'orgnr' => $company->orgnr
        ]);

        return $company;
    }

    /**
     * Lookup by organization number (9 digits)
     */
    private function lookupByOrgnr(string $orgnr): ?array
    {
        $orgnr = preg_replace('/\D/', '', $orgnr);

        if (strlen($orgnr) !== 9) {
            return null;
        }

        $url = self::BASE_URL . "/selskap/{$orgnr}";

        $response = Http::timeout(10)
            ->withHeaders([
                'User-Agent' => config('services.proff.user_agent', 'MittStyremote/1.0'),
            ])
            ->get($url);

        if (!$response->successful()) {
            return null;
        }

        return $this->parseCompanyPage($response->body(), $url);
    }

    /**
     * Lookup by company name
     */
    private function lookupByName(string $name): ?array
    {
        $response = Http::timeout(10)
            ->withHeaders([
                'User-Agent' => config('services.proff.user_agent', 'MittStyremote/1.0'),
            ])
            ->get(self::SEARCH_URL, [
                'q' => $name,
            ]);

        if (!$response->successful()) {
            return null;
        }

        $crawler = new Crawler($response->body());

        // Find first search result
        $firstResult = $crawler->filter('div.search-result-item a.search-result-link')->first();

        if ($firstResult->count() === 0) {
            return null;
        }

        $companyUrl = $firstResult->attr('href');

        if (!str_starts_with($companyUrl, 'http')) {
            $companyUrl = self::BASE_URL . $companyUrl;
        }

        // Fetch company page
        $companyResponse = Http::timeout(10)
            ->withHeaders([
                'User-Agent' => config('services.proff.user_agent', 'MittStyremote/1.0'),
            ])
            ->get($companyUrl);

        if (!$companyResponse->successful()) {
            return null;
        }

        return $this->parseCompanyPage($companyResponse->body(), $companyUrl);
    }

    /**
     * Parse company page HTML
     */
    private function parseCompanyPage(string $html, string $url): ?array
    {
        $crawler = new Crawler($html);

        try {
            $data = [
                'proff_url' => $url,
            ];

            // Extract company name
            $nameElement = $crawler->filter('h1.company-name, h1[itemprop="name"]')->first();
            if ($nameElement->count() > 0) {
                $data['name'] = trim($nameElement->text());
            }

            // Extract organization number
            $orgnrElement = $crawler->filterXPath('//dt[contains(text(), "Organisasjonsnummer")]/following-sibling::dd[1]')->first();
            if ($orgnrElement->count() > 0) {
                $data['orgnr'] = preg_replace('/\D/', '', $orgnrElement->text());
            }

            // Extract address
            $addressElement = $crawler->filter('[itemprop="streetAddress"], .company-address')->first();
            if ($addressElement->count() > 0) {
                $data['address'] = trim($addressElement->text());
            }

            // Extract postal code
            $zipElement = $crawler->filter('[itemprop="postalCode"]')->first();
            if ($zipElement->count() > 0) {
                $data['zip'] = trim($zipElement->text());
            }

            // Extract city
            $cityElement = $crawler->filter('[itemprop="addressLocality"]')->first();
            if ($cityElement->count() > 0) {
                $data['city'] = trim($cityElement->text());
            }

            // Require at least name and orgnr
            if (!isset($data['name']) || !isset($data['orgnr'])) {
                return null;
            }

            return $data;

        } catch (\Exception $e) {
            \Log::error('Failed to parse Proff company page', [
                'url' => $url,
                'error' => $e->getMessage()
            ]);
            return null;
        }
    }
}
