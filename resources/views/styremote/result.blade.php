@extends('layouts.app')

@section('title', 'Resultat - Mitt Styremøte')

@section('content')
<div class="max-w-6xl mx-auto px-4 py-8" id="result-app">
    <div class="bg-white rounded-lg shadow-lg p-8">
        <h1 class="text-3xl font-bold mb-2 text-center">Møte ferdig behandlet! 🎉</h1>
        <p class="text-center text-gray-600 mb-8">Dokumentene er klare for nedlasting</p>

        <!-- Download buttons -->
        <div class="grid md:grid-cols-3 gap-4 mb-8">
            <a :href="`/api/meetings/${meetingId}/download/minutes`" class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-lg text-center font-semibold block">
                📄 Last ned protokoll
            </a>
            <a :href="`/api/meetings/${meetingId}/download/actions`" class="bg-green-600 hover:bg-green-700 text-white px-6 py-4 rounded-lg text-center font-semibold block">
                ✅ Last ned tiltaksliste
            </a>
            <a :href="`/api/meetings/${meetingId}/download/decisions`" class="bg-purple-600 hover:bg-purple-700 text-white px-6 py-4 rounded-lg text-center font-semibold block">
                ⚖️ Last ned beslutningslogg
            </a>
        </div>

        <!-- Share section -->
        <div class="border-t pt-8">
            <h2 class="text-2xl font-semibold mb-4">Del dokumenter</h2>

            <div class="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                    <label class="block text-sm font-medium mb-2">Velg hva som skal deles</label>
                    <select v-model="shareAudience" class="w-full border rounded px-3 py-2">
                        <option value="all">Alt</option>
                        <option value="minutes">Kun protokoll</option>
                        <option value="actions">Kun tiltaksliste</option>
                        <option value="decisions">Kun beslutningslogg</option>
                    </select>
                </div>

                <div>
                    <label class="block text-sm font-medium mb-2">Utløpstid (timer)</label>
                    <input v-model.number="shareTtl" type="number" min="1" max="8760" class="w-full border rounded px-3 py-2">
                </div>
            </div>

            <button @click="createShare" class="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-semibold">
                🔗 Generer delingslenke
            </button>

            <div v-if="shareUrl" class="mt-4 p-4 bg-green-50 border border-green-200 rounded">
                <p class="font-semibold mb-2">Lenke opprettet!</p>
                <div class="flex gap-2">
                    <input :value="shareUrl" readonly class="flex-1 border rounded px-3 py-2 bg-white">
                    <button @click="copyShareUrl" class="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded">
                        Kopier
                    </button>
                </div>
                <p class="text-sm text-gray-600 mt-2">Utløper: @{{ shareExpiresAt }}</p>
            </div>
        </div>

        <!-- Demo notice -->
        <div v-if="isDemo" class="mt-8 bg-yellow-50 border border-yellow-200 rounded p-6">
            <h3 class="font-semibold mb-2">⏰ Demo-modus</h3>
            <p class="text-sm text-gray-700">
                Dette møtet slettes automatisk etter 48 timer.
                <a href="/auth/vipps" class="text-blue-600 hover:underline">Logg inn med Vipps</a>
                for permanent lagring og tilgang til møtehistorikk.
            </p>
        </div>
    </div>
</div>

<script type="module">
// Wait for Vue to be available
await new Promise(resolve => {
    if (window.Vue) resolve();
    else {
        const checkVue = setInterval(() => {
            if (window.Vue) {
                clearInterval(checkVue);
                resolve();
            }
        }, 100);
    }
});

const { createApp } = window.Vue;

// Get CSRF token
const csrfToken = document.querySelector('meta[name="csrf-token"]')?.content;

createApp({
    data() {
        return {
            meetingId: {!! json_encode($meetingId) !!},
            shareAudience: 'all',
            shareTtl: 168,
            shareUrl: '',
            shareExpiresAt: '',
            isDemo: false
        };
    },
    mounted() {
        this.loadMeeting();
    },
    methods: {
        async loadMeeting() {
            try {
                const response = await fetch(`/api/meetings/${this.meetingId}/status`);
                const data = await response.json();
                // Check if demo (placeholder - would need endpoint)
                this.isDemo = true; // Assume demo for now
            } catch (error) {
                console.error('Failed to load meeting:', error);
            }
        },
        async createShare() {
            try {
                const response = await fetch(`/api/meetings/${this.meetingId}/share`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                        'X-CSRF-TOKEN': csrfToken
                    },
                    body: JSON.stringify({
                        audience: this.shareAudience,
                        ttl_hours: this.shareTtl
                    })
                });

                if (response.ok) {
                    const data = await response.json();
                    this.shareUrl = data.url;
                    this.shareExpiresAt = data.expires_at || 'Aldri';
                } else {
                    alert('Kunne ikke opprette delingslenke');
                }
            } catch (error) {
                console.error('Share creation failed:', error);
                alert('Feil ved opprettelse av lenke');
            }
        },
        async copyShareUrl() {
            try {
                await navigator.clipboard.writeText(this.shareUrl);
                alert('Lenke kopiert!');
            } catch (error) {
                console.error('Copy failed:', error);
            }
        }
    }
}).mount('#result-app');
</script>
@endsection
