@extends('layouts.app')

@section('title', 'Nytt Styremøte - Mitt Styremøte')

@section('content')
<div class="min-h-screen bg-gray-50">
<div id="app-wrapper">
<div id="app">
    <!-- Progress Bar -->
    <div class="bg-white border-b sticky top-0 z-50">
        <div class="max-w-4xl mx-auto px-4 py-3">
            <div class="flex items-center gap-4">
                <button v-if="step > 1 && step < 5" @click="step--" class="text-blue-600 font-medium">
                    ← Tilbake
                </button>
                <div class="flex-1">
                    <div class="h-1 bg-gray-200 rounded-full">
                        <div class="h-full bg-blue-600 transition-all" :style="{width: (step / 5 * 100) + '%'}"></div>
                    </div>
                </div>
                <span class="text-sm text-gray-500">@{{ step }}/5</span>
            </div>
        </div>
    </div>

    <!-- Step 1: Company Info -->
    <div v-if="step === 1" class="max-w-2xl mx-auto px-4 py-8">
        <h1 class="text-3xl font-bold mb-2">Hvilket selskap?</h1>
        <p class="text-gray-600 mb-8">Grunnleggende informasjon om selskapet</p>

        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium mb-2">Org.nr (valgfritt)</label>
                <input v-model="company.orgnr" type="text" maxlength="9"
                       class="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:border-blue-500 focus:outline-none"
                       placeholder="123456789">
            </div>

            <div>
                <label class="block text-sm font-medium mb-2">Selskapsnavn *</label>
                <input v-model="company.name" type="text"
                       class="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:border-blue-500 focus:outline-none"
                       placeholder="Acme AS" required>
            </div>

            <div>
                <label class="block text-sm font-medium mb-2">Møtedato *</label>
                <input v-model="company.meetingDate" type="datetime-local"
                       class="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:border-blue-500 focus:outline-none"
                       required>
            </div>

            <div>
                <label class="block text-sm font-medium mb-2">Møteprogram / Agenda (valgfritt)</label>
                <textarea v-model="company.agenda" rows="6"
                          class="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:border-blue-500 focus:outline-none"
                          placeholder="Skriv inn saksliste eller lim inn møteprogrammet her...&#10;&#10;Eksempel:&#10;Sak 1: Godkjenning av innkalling&#10;Sak 2: Godkjenning av referat fra forrige møte&#10;Sak 3: Årsregnskap og årsberetning&#10;Sak 4: Eventuelt"></textarea>
            </div>
        </div>

        <button @click="nextStep" :disabled="!company.name || !company.meetingDate"
                class="mt-8 w-full bg-blue-600 text-white py-4 rounded-xl font-semibold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed">
            Fortsett
        </button>
    </div>

    <!-- Step 2: Participants -->
    <div v-if="step === 2" class="max-w-2xl mx-auto px-4 py-8">
        <h1 class="text-3xl font-bold mb-2">Hvem deltar?</h1>
        <p class="text-gray-600 mb-8">Legg til alle møtedeltakere</p>

        <div class="space-y-3 mb-6">
            <div v-for="(p, i) in participants" :key="i" class="border-2 border-gray-200 rounded-xl p-4">
                <input v-model="p.name" type="text" placeholder="Navn"
                       class="w-full border-2 border-gray-200 rounded-lg px-4 py-3 mb-3 focus:border-blue-500 focus:outline-none">
                <div class="flex gap-2">
                    <select v-model="p.role" class="flex-1 border-2 border-gray-200 rounded-lg px-4 py-3 focus:border-blue-500 focus:outline-none">
                        <option value="styreleder">Styreleder</option>
                        <option value="styremedlem">Styremedlem</option>
                        <option value="daglig_leder">Daglig leder</option>
                    </select>
                    <button v-if="participants.length > 1" @click="participants.splice(i, 1)"
                            class="px-4 text-red-600 hover:bg-red-50 rounded-lg">
                        Fjern
                    </button>
                </div>
            </div>
        </div>

        <button @click="participants.push({name: '', role: 'styremedlem'})"
                class="w-full border-2 border-dashed border-gray-300 py-3 rounded-xl text-gray-600 hover:border-blue-500 hover:text-blue-600 mb-8">
            + Legg til deltaker
        </button>

        <button @click="nextStep" class="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold hover:bg-blue-700">
            Fortsett
        </button>
    </div>

    <!-- Step 3: Consent -->
    <div v-if="step === 3" class="max-w-2xl mx-auto px-4 py-8">
        <h1 class="text-3xl font-bold mb-2">Samtykke</h1>
        <p class="text-gray-600 mb-8">Alle må godkjenne opptak og AI-behandling</p>

        <div class="bg-blue-50 border-2 border-blue-200 rounded-2xl p-6 mb-6">
            <h3 class="font-semibold mb-3">Om personvern</h3>
            <ul class="space-y-2 text-sm text-blue-900">
                <li>✓ Lydopptak behandles av OpenAI Whisper</li>
                <li>✓ Transkripsjonen behandles av GPT for styrenotat</li>
                <li>✓ Demo slettes etter 48 timer</li>
            </ul>
        </div>

        <label class="flex items-start gap-3 p-4 border-2 rounded-xl cursor-pointer mb-8"
               :class="consent ? 'border-blue-500 bg-blue-50' : 'border-gray-200'">
            <input v-model="consent" type="checkbox" class="mt-1 w-5 h-5">
            <span class="text-sm">Jeg bekrefter at <strong>alle deltakere har samtykket</strong> til opptak og AI-behandling.</span>
        </label>

        <button @click="startRecording" :disabled="!consent"
                class="w-full bg-red-600 text-white py-4 rounded-xl font-semibold hover:bg-red-700 disabled:opacity-50">
            🎙️ Start opptak
        </button>
    </div>

    <!-- Step 4: Recording with Live Transcription -->
    <div v-if="step === 4" class="max-w-4xl mx-auto px-4 py-8">
        <div class="text-center mb-8">
            <div class="inline-flex items-center justify-center w-20 h-20 bg-red-600 rounded-full mb-4 animate-pulse">
                <svg class="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z"/>
                </svg>
            </div>
            <h1 class="text-4xl font-bold font-mono">@{{ recordingTime }}</h1>
            <p class="text-gray-600 mt-2">Opptak pågår</p>
        </div>

        <!-- Live Transcription Editor -->
        <div class="bg-white border-2 border-gray-200 rounded-xl p-6 mb-6">
            <h2 class="text-lg font-semibold mb-4">Live transkripsjon</h2>
            <textarea v-model="transcription"
                      class="w-full h-64 border-2 border-gray-200 rounded-lg p-4 focus:border-blue-500 focus:outline-none font-mono text-sm"
                      placeholder="Transkripsjonen vises her etter hvert som møtet pågår..."></textarea>
        </div>

        <div class="flex gap-3">
            <button @click="stopRecording"
                    class="flex-1 bg-gray-900 text-white py-4 rounded-xl font-semibold hover:bg-gray-800">
                ⏹ Stopp opptak
            </button>
            <button @click="cancelRecording"
                    class="px-6 border-2 border-gray-300 py-4 rounded-xl hover:bg-gray-50">
                Avbryt
            </button>
        </div>
    </div>

    <!-- Step 5: Generate Styrenotat -->
    <div v-if="step === 5" class="max-w-4xl mx-auto px-4 py-8">
        <h1 class="text-3xl font-bold mb-2">Ferdig!</h1>
        <p class="text-gray-600 mb-8">Generer styrenotat fra transkripsjonen</p>

        <div class="bg-white border-2 border-gray-200 rounded-xl p-6 mb-6">
            <div class="flex justify-between items-center mb-3">
                <h3 class="font-semibold">Transkripsjon (@{{ transcription.length }} tegn)</h3>
                <span class="text-sm text-gray-500">Rediger og fyll inn detaljer før generering</span>
            </div>
            <textarea v-model="transcription" rows="12"
                      class="w-full border-2 border-gray-200 rounded-lg px-4 py-3 focus:border-blue-500 focus:outline-none font-mono text-sm"
                      placeholder="Ingen transkripsjon tilgjengelig. Du kan skrive inn notater manuelt her..."></textarea>
            <p class="text-sm text-gray-500 mt-2">💡 Tips: Legg til detaljer om beslutninger, avstemninger, og hvem som sa hva for bedre styrenotat.</p>
        </div>

        <button @click="generateNotat" :disabled="generating"
                class="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold hover:bg-blue-700 disabled:opacity-50 mb-4">
            @{{ generating ? '⏳ Genererer...' : '📝 Generer styrenotat' }}
        </button>

        <!-- Generated Document -->
        <div v-if="styrenotat" class="bg-white border-2 border-gray-200 rounded-xl p-6">
            <div class="flex justify-between items-center mb-4">
                <h3 class="font-semibold">Styrenotat</h3>
                <div class="flex gap-2">
                    <button @click="downloadPDF" class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                        📄 Last ned PDF
                    </button>
                    <button @click="shareNotat" class="px-4 py-2 border-2 border-gray-300 rounded-lg hover:bg-gray-50">
                        🔗 Del
                    </button>
                </div>
            </div>
            <div class="prose max-w-none">
                <div v-html="styrenotat"></div>
            </div>
        </div>
    </div>
</div>
</div>
</div>

<script type="module">
// Wait for Vue to load
(async () => {
    console.log('[Wizard] Starting...');

    await new Promise(resolve => {
        if (window.Vue) {
            console.log('[Wizard] Vue already available');
            resolve();
        } else {
            console.log('[Wizard] Waiting for Vue...');
            const checkVue = setInterval(() => {
                if (window.Vue) {
                    console.log('[Wizard] Vue loaded');
                    clearInterval(checkVue);
                    resolve();
                }
            }, 100);
        }
    });

    console.log('[Wizard] Creating app...');
    const { createApp } = window.Vue;
    console.log('[Wizard] createApp:', createApp);

    // Extract template before mounting (critical for Vue 3)
    const appElement = document.getElementById('app');
    const templateHTML = appElement.innerHTML;
    console.log('[Wizard] Template extracted:', templateHTML.length, 'chars');

    // Clear the element so Vue can mount cleanly
    appElement.innerHTML = '';

const app = createApp({
    template: templateHTML,
    data() {
        return {
            step: 1,
            company: {
                orgnr: '',
                name: '',
                meetingDate: '',
                agenda: ''
            },
            participants: [
                { name: '', role: 'styreleder' }
            ],
            consent: false,
            recording: false,
            recordingTime: '00:00:00',
            transcription: '',
            styrenotat: '',
            generating: false,
            meetingId: null,
            vadRecorder: null
        };
    },
    methods: {
        nextStep() {
            if (this.step === 1 && (!this.company.name || !this.company.meetingDate)) {
                alert('Fyll inn påkrevde felt');
                return;
            }
            this.step++;
        },
        async startRecording() {
            if (!this.consent) return;

            this.step = 4;
            this.recording = true;

            // Create meeting
            const response = await fetch('/api/meetings', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').content
                },
                body: JSON.stringify({
                    company_name: this.company.name,
                    company_orgnr: this.company.orgnr,
                    meeting_datetime: this.company.meetingDate,
                    agenda_text: this.company.agenda,
                    participants: this.participants
                })
            });

            const data = await response.json();
            this.meetingId = data.id;

            // Start VAD recording
            this.vadRecorder = new window.VADRecorder();
            await this.vadRecorder.start(async (wavBlob) => {
                await this.uploadAndTranscribe(wavBlob);
            });

            // Start timer
            const startTime = Date.now();
            setInterval(() => {
                const elapsed = Date.now() - startTime;
                const h = Math.floor(elapsed / 3600000);
                const m = Math.floor((elapsed % 3600000) / 60000);
                const s = Math.floor((elapsed % 60000) / 1000);
                this.recordingTime = `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
            }, 1000);
        },
        async uploadAndTranscribe(wavBlob) {
            const formData = new FormData();
            formData.append('audio', wavBlob);

            const response = await fetch(`/api/meetings/${this.meetingId}/transcribe-chunk`, {
                method: 'POST',
                headers: {
                    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').content
                },
                body: formData
            });

            const data = await response.json();
            if (data.text) {
                this.transcription += data.text + ' ';
            }
        },
        async stopRecording() {
            if (this.vadRecorder) {
                await this.vadRecorder.stop();
            }
            this.recording = false;
            this.step = 5;
        },
        cancelRecording() {
            if (confirm('Vil du avbryte opptaket?')) {
                window.location.href = '/';
            }
        },
        async generateNotat() {
            this.generating = true;

            const response = await fetch(`/api/meetings/${this.meetingId}/generate-notat`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').content
                },
                body: JSON.stringify({
                    transcription: this.transcription,
                    company: this.company,
                    participants: this.participants
                })
            });

            const data = await response.json();
            this.styrenotat = data.html;
            this.generating = false;
        },
        async downloadPDF() {
            window.open(`/api/meetings/${this.meetingId}/download/pdf`, '_blank');
        },
        shareNotat() {
            // TODO: Implement share functionality
            alert('Del-funksjon kommer snart');
        }
    }
});

console.log('[Wizard] Mounting to #app...');
const vm = app.mount(appElement);
console.log('[Wizard] Mounted successfully! VM:', vm);

})().catch(err => {
    console.error('Failed to initialize:', err);
    alert('Failed to load app: ' + err.message);
});
</script>
@endsection
