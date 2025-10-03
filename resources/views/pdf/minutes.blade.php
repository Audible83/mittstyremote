<!DOCTYPE html>
<html lang="nb">
<head>
    <meta charset="UTF-8">
    <title>Møteprotokoll - {{ $meeting->company_name }}</title>
    <style>
        body {
            font-family: DejaVu Sans, sans-serif;
            font-size: 11pt;
            line-height: 1.6;
            color: #333;
            margin: 2cm;
        }
        h1 {
            font-size: 18pt;
            margin-bottom: 0.5cm;
            border-bottom: 2px solid #000;
            padding-bottom: 0.3cm;
        }
        h2 {
            font-size: 14pt;
            margin-top: 1cm;
            margin-bottom: 0.4cm;
        }
        .header {
            text-align: center;
            margin-bottom: 1cm;
        }
        .meta {
            margin-bottom: 1cm;
        }
        .meta table {
            width: 100%;
        }
        .meta td {
            padding: 0.2cm 0;
        }
        .meta td:first-child {
            font-weight: bold;
            width: 30%;
        }
        .signature {
            margin-top: 2cm;
            page-break-inside: avoid;
        }
        .signature table {
            width: 100%;
        }
        .signature-line {
            border-top: 1px solid #000;
            margin-top: 1.5cm;
            padding-top: 0.3cm;
        }
        .footer {
            position: fixed;
            bottom: 1cm;
            right: 2cm;
            font-size: 9pt;
            color: #666;
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>MØTEPROTOKOLL</h1>
    </div>

    <div class="meta">
        <table>
            <tr>
                <td>Selskap:</td>
                <td>{{ $meeting->company_name }}</td>
            </tr>
            <tr>
                <td>Org.nr:</td>
                <td>{{ $meeting->company_orgnr }}</td>
            </tr>
            <tr>
                <td>Adresse:</td>
                <td>{{ $meeting->company_address }}</td>
            </tr>
            <tr>
                <td>Møtedato:</td>
                <td>{{ $meeting->meeting_datetime->format('d.m.Y H:i') }}</td>
            </tr>
            <tr>
                <td>Møtested:</td>
                <td>{{ $meeting->meeting_location }}</td>
            </tr>
            <tr>
                <td>Møteleder:</td>
                <td>{{ $meeting->chair_name }}</td>
            </tr>
        </table>
    </div>

    <div class="content">
        {!! nl2br(e($content)) !!}
    </div>

    <div class="signature">
        <table>
            <tr>
                <td style="width: 50%;">
                    <div class="signature-line">
                        Styreleder
                    </div>
                </td>
                <td style="width: 50%;">
                    <div class="signature-line">
                        Protokollfører
                    </div>
                </td>
            </tr>
        </table>
    </div>

    <div class="footer">
        Generert {{ now()->format('d.m.Y H:i') }} med Mitt Styremøte
    </div>
</body>
</html>
