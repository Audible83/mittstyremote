<!DOCTYPE html>
<html lang="nb">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>@yield('title', 'Mitt Styremøte')</title>

    <!-- Vue 3 CDN -->
    <script src="https://unpkg.com/vue@3.4.21/dist/vue.global.prod.js"></script>

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
</body>
</html>
