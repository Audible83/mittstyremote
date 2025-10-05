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

            // Convert markdown to HTML for better formatting
            $htmlContent = $this->markdownToHtml($meeting->minutes_content);

            $pdf = Pdf::loadView('pdf.minutes', [
                'meeting' => $meeting,
                'content' => $htmlContent,
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
     * Convert markdown to HTML for PDF
     */
    private function markdownToHtml(string $markdown): string
    {
        $html = $markdown;

        // Headers
        $html = preg_replace('/^# (.+)$/m', '<h1>$1</h1>', $html);
        $html = preg_replace('/^## (.+)$/m', '<h2>$1</h2>', $html);
        $html = preg_replace('/^### (.+)$/m', '<h3>$1</h3>', $html);
        $html = preg_replace('/^#### (.+)$/m', '<h4>$1</h4>', $html);

        // Bold with special handling for VEDTAK
        $html = preg_replace('/\*\*VEDTAK:\*\*/', '<div class="vedtak"><strong>VEDTAK:</strong>', $html);
        $html = preg_replace('/\*\*(.+?)\*\*/', '<strong>$1</strong>', $html);

        // Close VEDTAK divs (find lines after VEDTAK and before next heading/empty line)
        $html = preg_replace('/(class="vedtak"><strong>VEDTAK:<\/strong>.*?)(?=<h[234]|$)/s', '$1</div>', $html);

        // Italic
        $html = preg_replace('/\*([^*]+?)\*/', '<em>$1</em>', $html);

        // Lists
        $lines = explode("\n", $html);
        $inList = false;
        $processedLines = [];

        foreach ($lines as $line) {
            if (preg_match('/^[-*] (.+)$/', $line, $matches)) {
                if (!$inList) {
                    $processedLines[] = '<ul>';
                    $inList = true;
                }
                $processedLines[] = '<li>' . $matches[1] . '</li>';
            } else {
                if ($inList) {
                    $processedLines[] = '</ul>';
                    $inList = false;
                }
                $processedLines[] = $line;
            }
        }

        if ($inList) {
            $processedLines[] = '</ul>';
        }

        $html = implode("\n", $processedLines);

        // Paragraphs and line breaks
        $html = preg_replace('/\n\n+/', '</p><p>', $html);
        $html = '<p>' . $html . '</p>';
        $html = str_replace("\n", '<br>', $html);

        return $html;
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
