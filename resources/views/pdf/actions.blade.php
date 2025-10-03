<!DOCTYPE html>
<html lang="nb">
<head>
    <meta charset="UTF-8">
    <title>Tiltaksliste - {{ $meeting->company_name }}</title>
    <style>
        body {
            font-family: DejaVu Sans, sans-serif;
            font-size: 11pt;
            color: #333;
            margin: 2cm;
        }
        h1 {
            font-size: 18pt;
            margin-bottom: 0.5cm;
            border-bottom: 2px solid #000;
            padding-bottom: 0.3cm;
        }
        .meta {
            margin-bottom: 1cm;
            font-size: 10pt;
        }
        .content {
            margin-top: 1cm;
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
    <h1>TILTAKSLISTE</h1>

    <div class="meta">
        <strong>{{ $meeting->company_name }}</strong><br>
        Styremøte {{ $meeting->meeting_datetime->format('d.m.Y') }}
    </div>

    <div class="content">
        {!! nl2br(e($content)) !!}
    </div>

    <div class="footer">
        Generert {{ now()->format('d.m.Y H:i') }}
    </div>
</body>
</html>
