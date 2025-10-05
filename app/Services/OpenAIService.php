<?php

namespace App\Services;

use Illuminate\Support\Facades\Storage;
use OpenAI;

class OpenAIService
{
    private $client;

    public function __construct()
    {
        $apiKey = $this->getApiKey();

        $this->client = OpenAI::client($apiKey);
    }

    /**
     * Get OpenAI API key from storage
     */
    private function getApiKey(): string
    {
        $keyFile = config('services.openai.key_file', 'openai_api.key');

        if (!Storage::exists($keyFile)) {
            throw new \Exception("OpenAI API key file not found: {$keyFile}");
        }

        $key = trim(Storage::get($keyFile));

        if (empty($key)) {
            throw new \Exception("OpenAI API key is empty");
        }

        return $key;
    }

    /**
     * Transcribe audio using Whisper API
     */
    public function transcribe(string $audioPath, string $language = 'no'): array
    {
        // Validate file
        if (!file_exists($audioPath)) {
            throw new \Exception("Audio file not found: {$audioPath}");
        }

        if (!is_readable($audioPath)) {
            throw new \Exception("Audio file not readable: {$audioPath}");
        }

        $fileSize = filesize($audioPath);
        if ($fileSize === 0) {
            throw new \Exception("Audio file is empty");
        }

        if ($fileSize > 25 * 1024 * 1024) { // Whisper limit is 25MB
            throw new \Exception("Audio file too large for Whisper API: " .
                round($fileSize / 1024 / 1024, 2) . "MB (max 25MB)");
        }

        try {
            \Log::info("Transcribing audio", [
                'path' => $audioPath,
                'size' => $fileSize,
                'language' => $language
            ]);

            $response = $this->client->audio()->transcribe([
                'model' => 'whisper-1',
                'file' => fopen($audioPath, 'r'),
                'language' => $language,
                'response_format' => 'verbose_json',
                'timestamp_granularities' => ['word', 'segment'],
            ]);

            if (!isset($response->text)) {
                throw new \Exception("Invalid Whisper API response: missing text");
            }

            \Log::info("Transcription successful", [
                'text_length' => strlen($response->text),
                'duration' => $response->duration ?? null
            ]);

            return [
                'text' => $response->text,
                'language' => $response->language ?? $language,
                'duration' => $response->duration ?? null,
                'words' => $response->words ?? [],
                'segments' => $response->segments ?? [],
            ];

        } catch (\Exception $e) {
            \Log::error("Transcription failed", [
                'error' => $e->getMessage(),
                'audio_path' => $audioPath
            ]);
            throw new \Exception("Transcription failed: " . $e->getMessage());
        }
    }

    /**
     * Generate chat completion using GPT
     */
    public function chat(array $messages, string $model = 'gpt-5-nano', array $options = []): string
    {
        // Validate input
        if (empty($messages)) {
            throw new \Exception("Messages array cannot be empty");
        }

        foreach ($messages as $message) {
            if (!isset($message['role']) || !isset($message['content'])) {
                throw new \Exception("Each message must have 'role' and 'content' fields");
            }
        }

        try {
            \Log::info("Generating chat completion", [
                'model' => $model,
                'message_count' => count($messages),
                'temperature' => $options['temperature'] ?? 0.3
            ]);

            $response = $this->client->chat()->create(array_merge([
                'model' => $model,
                'messages' => $messages,
                'temperature' => 0.3, // Lower temperature for more consistent, factual outputs
            ], $options));

            if (!isset($response->choices[0]->message->content)) {
                throw new \Exception("Invalid GPT API response: missing content");
            }

            $content = $response->choices[0]->message->content;

            \Log::info("Chat completion successful", [
                'response_length' => strlen($content),
                'finish_reason' => $response->choices[0]->finish_reason ?? null
            ]);

            return $content;

        } catch (\Exception $e) {
            \Log::error("Chat completion failed", [
                'error' => $e->getMessage(),
                'model' => $model
            ]);
            throw new \Exception("Chat completion failed: " . $e->getMessage());
        }
    }

    /**
     * Generate meeting minutes in Norwegian
     */
    public function generateMinutes(array $meetingData, string $transcript, array $diarization): string
    {
        // Validate required fields
        $requiredFields = ['company_name', 'meeting_datetime', 'meeting_location', 'chair_name', 'quorum_ok'];
        foreach ($requiredFields as $field) {
            if (!isset($meetingData[$field])) {
                throw new \Exception("Missing required meeting data field: {$field}");
            }
        }

        if (empty($transcript)) {
            throw new \Exception("Transcript cannot be empty for minutes generation");
        }

        try {
            \Log::info("Generating meeting minutes", [
                'company' => $meetingData['company_name'],
                'transcript_length' => strlen($transcript),
                'participant_count' => count($meetingData['participants'] ?? [])
            ]);

            $systemPrompt = "Du er sekretær for et norsk styremøte. Skriv presise, korrekte og nøkterne dokumenter på bokmål. Ta kun med fakta som fremgår av transkripsjonen. Merk beslutninger, avstemninger, habilitet og frister tydelig. Strukturér resultatet til formelle dokumenter som kan godkjennes i ettertid.";

            $participantsList = collect($meetingData['participants'] ?? [])
                ->map(fn($p) => "{$p['name']} ({$p['role']})" . ($p['is_present'] ? ' - Tilstede' : ' - Fraværende'))
                ->join("\n");

            $userPrompt = "Generer et formelt møtereferat (protokoll) basert på følgende informasjon:\n\n";
            $userPrompt .= "SELSKAP:\n";
            $userPrompt .= "Navn: {$meetingData['company_name']}\n";
            $userPrompt .= "Org.nr: {$meetingData['company_orgnr']}\n";
            $userPrompt .= "Adresse: {$meetingData['company_address']}\n\n";
            $userPrompt .= "MØTE:\n";
            $userPrompt .= "Dato/tid: {$meetingData['meeting_datetime']}\n";
            $userPrompt .= "Sted: {$meetingData['meeting_location']}\n";
            $userPrompt .= "Møteleder: {$meetingData['chair_name']}\n";
            $userPrompt .= "Beslutningsdyktig: " . ($meetingData['quorum_ok'] ? 'Ja' : 'Nei') . "\n\n";
            $userPrompt .= "DELTAKERE:\n{$participantsList}\n\n";

            if (!empty($meetingData['agenda_text'])) {
                $userPrompt .= "AGENDA:\n{$meetingData['agenda_text']}\n\n";
            }

            $userPrompt .= "TRANSKRIPSJON:\n{$transcript}\n\n";

            $userPrompt .= "Formater referatet med følgende seksjoner:\n";
            $userPrompt .= "1. INNLEDNING (selskap, orgnr, adresse, møtedato/sted, møteleder, protokollfører, innkalling & beslutningsdyktighet)\n";
            $userPrompt .= "2. TILSTEDE/FRAVÆR\n";
            $userPrompt .= "3. AGENDA / SAKSOVERSIKT\n";
            $userPrompt .= "4. SAKER (Sak 1, 2, …: Kort drøfting, VEDTAK, eventuelle avstemningsresultat og habilitetsnotater)\n";
            $userPrompt .= "5. EVENTUELT\n";
            $userPrompt .= "6. NESTE MØTE\n";
            $userPrompt .= "7. SIGNATURFELT (styreleder + protokollfører)\n";

            $minutes = $this->chat([
                ['role' => 'system', 'content' => $systemPrompt],
                ['role' => 'user', 'content' => $userPrompt],
            ]);

            \Log::info("Meeting minutes generated successfully", [
                'minutes_length' => strlen($minutes)
            ]);

            return $minutes;

        } catch (\Exception $e) {
            \Log::error("Minutes generation failed", [
                'error' => $e->getMessage(),
                'company' => $meetingData['company_name'] ?? 'unknown'
            ]);
            throw new \Exception("Minutes generation failed: " . $e->getMessage());
        }
    }

    /**
     * Generate action items list in Norwegian
     */
    public function generateActions(string $transcript, array $meetingData): string
    {
        if (empty($transcript)) {
            throw new \Exception("Transcript cannot be empty for action items generation");
        }

        try {
            \Log::info("Generating action items", [
                'transcript_length' => strlen($transcript),
                'company' => $meetingData['company_name'] ?? 'unknown'
            ]);

            $systemPrompt = "Du er sekretær for et norsk styremøte. Skriv presise, korrekte og nøkterne dokumenter på bokmål. Ta kun med fakta som fremgår av transkripsjonen.";

            $userPrompt = "Basert på følgende møtetranskripsjon, identifiser alle tiltak/handlingspunkter som ble avtalt.\n\n";
            $userPrompt .= "TRANSKRIPSJON:\n{$transcript}\n\n";
            $userPrompt .= "Lag en tabell med kolonner: TILTAK | ANSVARLIG | FRIST | STATUS\n";
            $userPrompt .= "Status skal alltid være 'Ny' for alle tiltak.\n";
            $userPrompt .= "Hvis frist eller ansvarlig ikke er eksplisitt nevnt, bruk 'Ikke spesifisert'.\n";

            $actions = $this->chat([
                ['role' => 'system', 'content' => $systemPrompt],
                ['role' => 'user', 'content' => $userPrompt],
            ]);

            \Log::info("Action items generated successfully", [
                'actions_length' => strlen($actions)
            ]);

            return $actions;

        } catch (\Exception $e) {
            \Log::error("Action items generation failed", [
                'error' => $e->getMessage(),
                'company' => $meetingData['company_name'] ?? 'unknown'
            ]);
            throw new \Exception("Action items generation failed: " . $e->getMessage());
        }
    }

    /**
     * Generate decisions log in Norwegian
     */
    public function generateDecisions(string $transcript, array $meetingData): string
    {
        if (empty($transcript)) {
            throw new \Exception("Transcript cannot be empty for decisions generation");
        }

        try {
            \Log::info("Generating decisions log", [
                'transcript_length' => strlen($transcript),
                'company' => $meetingData['company_name'] ?? 'unknown'
            ]);

            $systemPrompt = "Du er sekretær for et norsk styremøte. Skriv presise, korrekte og nøkterne dokumenter på bokmål. Ta kun med fakta som fremgår av transkripsjonen.";

            $userPrompt = "Basert på følgende møtetranskripsjon, identifiser alle formelle beslutninger/vedtak.\n\n";
            $userPrompt .= "TRANSKRIPSJON:\n{$transcript}\n\n";
            $userPrompt .= "For hvert vedtak, oppgi:\n";
            $userPrompt .= "- SAK (nummer og tittel)\n";
            $userPrompt .= "- VEDTAKSTEKST (presis formulering)\n";
            $userPrompt .= "- AVSTEMNING (for/mot/avholdende hvis nevnt, ellers 'Enstemmig')\n";
            $userPrompt .= "- IKRAFTTREDELSE (hvis nevnt)\n";
            $userPrompt .= "- HABILITET (hvis noen erklærte seg inhabil)\n";

            $decisions = $this->chat([
                ['role' => 'system', 'content' => $systemPrompt],
                ['role' => 'user', 'content' => $userPrompt],
            ]);

            \Log::info("Decisions log generated successfully", [
                'decisions_length' => strlen($decisions)
            ]);

            return $decisions;

        } catch (\Exception $e) {
            \Log::error("Decisions generation failed", [
                'error' => $e->getMessage(),
                'company' => $meetingData['company_name'] ?? 'unknown'
            ]);
            throw new \Exception("Decisions generation failed: " . $e->getMessage());
        }
    }
}
