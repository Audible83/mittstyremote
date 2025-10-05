<!DOCTYPE html>
<html lang="nb">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>@yield('title', 'Mitt Styremøte')</title>

    <!-- PWA Meta Tags -->
    <meta name="description" content="Opptak og AI-genererte styrenotater for norske styremøter">
    <meta name="theme-color" content="#2563eb">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="default">
    <meta name="apple-mobile-web-app-title" content="MittStyremøte">

    <!-- PWA Manifest -->
    <link rel="manifest" href="/manifest.webmanifest">

    <!-- iOS Icons -->
    <link rel="apple-touch-icon" href="/images/icon-192.png">
    <link rel="apple-touch-icon" sizes="180x180" href="/images/icon-192.png">

    <!-- Favicon -->
    <link rel="icon" href="/favicon.ico" sizes="any">
    <link rel="icon" type="image/png" sizes="192x192" href="/images/icon-192.png">
    <link rel="icon" type="image/png" sizes="512x512" href="/images/icon-512.png">

    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>
<body class="bg-gray-50">
    <nav class="bg-white shadow-sm">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between h-16">
                <div class="flex items-center">
                    <a href="/" class="text-2xl font-bold text-blue-600">Mitt Styremøte</a>
                </div>
                <div class="flex items-center space-x-4">
                    @auth
                        <span class="text-sm text-gray-700">{{ auth()->user()->name }}</span>
                    @else
                        <a href="/auth/vipps" class="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg">
                            Logg inn med Vipps
                        </a>
                    @endauth
                </div>
            </div>
        </div>
    </nav>

    <main>
        @yield('content')
    </main>

    <footer class="bg-white border-t mt-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <p class="text-center text-sm text-gray-500">
                © {{ date('Y') }} Mitt Styremøte. Alle rettigheter reservert.
            </p>
        </div>
    </footer>

    <!-- Service Worker Registration -->
    <script>
        if ('serviceWorker' in navigator) {
            window.addEventListener('load', () => {
                navigator.serviceWorker.register('/sw.js')
                    .then((registration) => {
                        console.log('[SW] Service worker registered:', registration.scope);

                        // Check for updates periodically
                        setInterval(() => {
                            registration.update();
                        }, 60 * 60 * 1000); // Check every hour
                    })
                    .catch((error) => {
                        console.error('[SW] Service worker registration failed:', error);
                    });

                // Handle service worker updates
                navigator.serviceWorker.addEventListener('controllerchange', () => {
                    console.log('[SW] New service worker activated');
                    // Optionally reload the page
                    // window.location.reload();
                });
            });
        }
    </script>
</body>
</html>
