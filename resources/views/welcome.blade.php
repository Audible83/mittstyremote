@extends('layouts.app')

@section('title', 'Hjem - Mitt Styremøte')

@section('content')
<div class="min-h-screen">
    <!-- Hero Section -->
    <div class="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
            <div class="text-center">
                <h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">Automatiser styremøtet</h1>
                <p class="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 text-blue-100 px-4">
                    Ta opp, transkriber og generer profesjonelle møtereferater med AI
                </p>
                <div class="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 px-4">
                    <a href="{{ route('meeting.wizard') }}" class="bg-white text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-blue-50 transition">
                        Start demo
                    </a>
                    <a href="/auth/vipps" class="bg-orange-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-orange-600 transition">
                        Logg inn med Vipps
                    </a>
                </div>
                <p class="mt-4 text-xs sm:text-sm text-blue-200 px-4">
                    Demo-modus lagrer i 48 timer. Logg inn for permanent lagring.
                </p>
            </div>
        </div>
    </div>

    <!-- Features Section -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div class="bg-white p-6 rounded-lg shadow-sm">
                <div class="text-4xl mb-4">🎙️</div>
                <h3 class="text-xl font-semibold mb-2">Ta opp møtet</h3>
                <p class="text-gray-600">
                    Ta opp styremøtet direkte fra mobil eller desktop. Støtter lange møter med chunked upload.
                </p>
            </div>

            <div class="bg-white p-6 rounded-lg shadow-sm">
                <div class="text-4xl mb-4">👥</div>
                <h3 class="text-xl font-semibold mb-2">Identifiser talere</h3>
                <p class="text-gray-600">
                    AI-drevet diarisering identifiserer hvem som sa hva basert på deltakerlist.
                </p>
            </div>

            <div class="bg-white p-6 rounded-lg shadow-sm">
                <div class="text-4xl mb-4">📄</div>
                <h3 class="text-xl font-semibold mb-2">Generer dokumenter</h3>
                <p class="text-gray-600">
                    Få protokoll, tiltaksliste og beslutningslogg klar som PDF på bokmål.
                </p>
            </div>

            <div class="bg-white p-6 rounded-lg shadow-sm">
                <div class="text-4xl mb-4">🏢</div>
                <h3 class="text-xl font-semibold mb-2">Proff.no-oppslag</h3>
                <p class="text-gray-600">
                    Slå opp selskapsinfo automatisk fra Brønnøysundregistrene via Proff.no.
                </p>
            </div>

            <div class="bg-white p-6 rounded-lg shadow-sm">
                <div class="text-4xl mb-4">🔗</div>
                <h3 class="text-xl font-semibold mb-2">Del enkelt</h3>
                <p class="text-gray-600">
                    Generer sikre delingslenker for protokoll, tiltak eller beslutninger.
                </p>
            </div>

            <div class="bg-white p-6 rounded-lg shadow-sm">
                <div class="text-4xl mb-4">🔒</div>
                <h3 class="text-xl font-semibold mb-2">Personvern først</h3>
                <p class="text-gray-600">
                    Samtykke påkrevd, kryptert lagring, automatisk sletting etter 48t i demo.
                </p>
            </div>
        </div>
    </div>

    <!-- CTA Section -->
    <div class="bg-blue-50 py-12 sm:py-16">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 class="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Klar til å komme i gang?</h2>
            <p class="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8 px-4">
                Prøv en demo helt gratis, eller logg inn med Vipps for full funksjonalitet.
            </p>
            <a href="{{ route('meeting.wizard') }}" class="bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-blue-700 transition inline-block">
                Start ditt første styremøte nå
            </a>
        </div>
    </div>
</div>
@endsection
