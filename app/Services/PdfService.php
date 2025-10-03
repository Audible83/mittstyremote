<?php

namespace App\Services;

use App\Models\Meeting;
use Barryvdh\DomPDF\Facade\Pdf;
use Illuminate\Support\Facades\Storage;

class PdfService
{
    /**
     * Generate all PDFs for a meeting
     */
    public function generateAllPdfs(Meeting $meeting): void
    {
        try {
            \Log::info("Generating all PDFs", [
                'meeting_id' => $meeting->id
            ]);

            $this->generateMinutesPdf($meeting);
            $this->generateActionsPdf($meeting);
            $this->generateDecisionsPdf($meeting);

            \Log::info("All PDFs generated successfully", [
                'meeting_id' => $meeting->id
            ]);

        } catch (\Exception $e) {
            \Log::error("PDF generation failed", [
                'meeting_id' => $meeting->id,
                'error' => $e->getMessage()
            ]);
            throw new \Exception("PDF generation failed: " . $e->getMessage());
        }
    }

    /**
     * Generate minutes PDF
     */
    public function generateMinutesPdf(Meeting $meeting): string
    {
        if (empty($meeting->minutes_content)) {
            throw new \Exception("Meeting minutes content is empty");
        }

        try {
            \Log::info("Generating minutes PDF", [
                'meeting_id' => $meeting->id
            ]);

            // Sanitize content to prevent XSS
            $sanitizedContent = $this->sanitizeContent($meeting->minutes_content);

            $pdf = Pdf::loadView('pdf.minutes', [
                'meeting' => $meeting,
                'content' => $sanitizedContent,
            ]);

            $filename = "minutes_{$meeting->id}_" . now()->format('Ymd_His') . ".pdf";
            $path = "pdf/{$filename}";

            $output = $pdf->output();

            if (empty($output)) {
                throw new \Exception("PDF generation produced empty output");
            }

            Storage::put($path, $output);

            if (!Storage::exists($path)) {
                throw new \Exception("Failed to save PDF to storage");
            }

            $meeting->update(['pdf_minutes_path' => $path]);

            \Log::info("Minutes PDF generated successfully", [
                'meeting_id' => $meeting->id,
                'path' => $path,
                'size' => strlen($output)
            ]);

            return $path;

        } catch (\Exception $e) {
            \Log::error("Minutes PDF generation failed", [
                'meeting_id' => $meeting->id,
                'error' => $e->getMessage()
            ]);
            throw new \Exception("Minutes PDF generation failed: " . $e->getMessage());
        }
    }

    /**
     * Generate actions PDF
     */
    public function generateActionsPdf(Meeting $meeting): string
    {
        if (empty($meeting->actions_content)) {
            throw new \Exception("Meeting actions content is empty");
        }

        try {
            \Log::info("Generating actions PDF", [
                'meeting_id' => $meeting->id
            ]);

            $sanitizedContent = $this->sanitizeContent($meeting->actions_content);

            $pdf = Pdf::loadView('pdf.actions', [
                'meeting' => $meeting,
                'content' => $sanitizedContent,
            ]);

            $filename = "actions_{$meeting->id}_" . now()->format('Ymd_His') . ".pdf";
            $path = "pdf/{$filename}";

            $output = $pdf->output();

            if (empty($output)) {
                throw new \Exception("PDF generation produced empty output");
            }

            Storage::put($path, $output);

            if (!Storage::exists($path)) {
                throw new \Exception("Failed to save PDF to storage");
            }

            $meeting->update(['pdf_actions_path' => $path]);

            \Log::info("Actions PDF generated successfully", [
                'meeting_id' => $meeting->id,
                'path' => $path
            ]);

            return $path;

        } catch (\Exception $e) {
            \Log::error("Actions PDF generation failed", [
                'meeting_id' => $meeting->id,
                'error' => $e->getMessage()
            ]);
            throw new \Exception("Actions PDF generation failed: " . $e->getMessage());
        }
    }

    /**
     * Generate decisions PDF
     */
    public function generateDecisionsPdf(Meeting $meeting): string
    {
        if (empty($meeting->decisions_content)) {
            throw new \Exception("Meeting decisions content is empty");
        }

        try {
            \Log::info("Generating decisions PDF", [
                'meeting_id' => $meeting->id
            ]);

            $sanitizedContent = $this->sanitizeContent($meeting->decisions_content);

            $pdf = Pdf::loadView('pdf.decisions', [
                'meeting' => $meeting,
                'content' => $sanitizedContent,
            ]);

            $filename = "decisions_{$meeting->id}_" . now()->format('Ymd_His') . ".pdf";
            $path = "pdf/{$filename}";

            $output = $pdf->output();

            if (empty($output)) {
                throw new \Exception("PDF generation produced empty output");
            }

            Storage::put($path, $output);

            if (!Storage::exists($path)) {
                throw new \Exception("Failed to save PDF to storage");
            }

            $meeting->update(['pdf_decisions_path' => $path]);

            \Log::info("Decisions PDF generated successfully", [
                'meeting_id' => $meeting->id,
                'path' => $path
            ]);

            return $path;

        } catch (\Exception $e) {
            \Log::error("Decisions PDF generation failed", [
                'meeting_id' => $meeting->id,
                'error' => $e->getMessage()
            ]);
            throw new \Exception("Decisions PDF generation failed: " . $e->getMessage());
        }
    }

    /**
     * Sanitize content to prevent XSS in PDFs
     */
    private function sanitizeContent(string $content): string
    {
        // Remove potentially dangerous HTML tags
        $content = strip_tags($content, '<p><br><strong><em><u><h1><h2><h3><h4><h5><h6><ul><ol><li><table><tr><td><th><thead><tbody>');

        // Encode special characters
        $content = htmlspecialchars($content, ENT_QUOTES | ENT_HTML5, 'UTF-8', false);

        return $content;
    }

    /**
     * Get PDF download response
     */
    public function download(string $path, string $filename): \Symfony\Component\HttpFoundation\BinaryFileResponse
    {
        if (!Storage::exists($path)) {
            throw new \Exception("PDF file not found: {$path}");
        }

        return Storage::download($path, $filename);
    }
}
