@extends('layouts.app')

@section('title', 'Nytt Styremøte - Mitt Styremøte')

@section('content')
<div class="min-h-screen bg-gray-50 pb-20 sm:pb-8">
    <div id="wizard-app">
    <!-- Apple-style progress indicator -->
    <div class="bg-white border-b sticky top-0 z-10">
        <div class="max-w-3xl mx-auto px-4 py-3">
            <div class="flex items-center justify-between">
                <button v-if="step > 1 && step < 5" @click="prevStep" class="text-blue-600 font-medium">
                    ← Tilbake
                </button>
                <div v-else class="w-20"></div>
                <div class="flex-1 mx-4">
                    <div class="h-1 bg-gray-200 rounded-full overflow-hidden">
                        <div class="h-full bg-blue-600 transition-all duration-300" :style="{width: (step / 5 * 100) + '%'}"></div>
                    </div>
                </div>
                <span class="text-sm text-gray-500">@{{ step }}/5</span>
            </div>
        </div>
    </div>

    <div class="max-w-3xl mx-auto px-4 py-6">

        <!-- Step 1: Company -->
        <div v-show="step === 1" class="step-content">
            <h1 class="text-3xl font-bold mb-2">Hvilket selskap?</h1>
            <p class="text-gray-600 mb-8">Søk eller skriv inn selskapsinfo manuelt</p>

            <div class="space-y-4 mb-8">
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Org.nr. (valgfritt)</label>
                    <div class="flex gap-2">
                        <input v-model="company.orgnr" type="text" maxlength="9"
                               class="flex-1 border-2 border-gray-200 rounded-xl px-4 py-3 text-base focus:border-blue-500 focus:ring-0 transition-colors"
                               placeholder="123456789">
                        <button @click="lookupCompany"
                                class="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 active:bg-blue-800 font-medium transition-colors whitespace-nowrap">
                            Søk
                        </button>
                    </div>
                </div>

                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Selskapsnavn *</label>
                    <input v-model="company.name" type="text"
                           class="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-base focus:border-blue-500 focus:ring-0 transition-colors"
                           placeholder="Acme AS" required>
                </div>

                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Adresse (valgfritt)</label>
                    <input v-model="company.address" type="text"
                           class="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-base focus:border-blue-500 focus:ring-0 transition-colors"
                           placeholder="Storgata 1, 0123 Oslo">
                </div>
            </div>

            <button @click="nextStep"
                    class="w-full bg-blue-600 text-white px-6 py-4 rounded-xl hover:bg-blue-700 active:bg-blue-800 font-semibold text-lg transition-colors">
                Fortsett
            </button>
        </div>

        <!-- Step 2: Meeting Info -->
        <div v-show="step === 2" class="step-content">
            <h1 class="text-3xl font-bold mb-2">Møtedetaljer</h1>
            <p class="text-gray-600 mb-8">Når og hvor skal møtet holdes?</p>

            <div class="space-y-4 mb-8">
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Dato og tid *</label>
                    <input v-model="meeting.datetime" type="datetime-local"
                           class="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-base focus:border-blue-500 focus:ring-0 transition-colors"
                           required>
                </div>

                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Møtested *</label>
                    <input v-model="meeting.location" type="text"
                           class="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-base focus:border-blue-500 focus:ring-0 transition-colors"
                           placeholder="Kontoret / Teams / Zoom" required>
                </div>

                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Møteleder *</label>
                    <input v-model="meeting.chair" type="text"
                           class="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-base focus:border-blue-500 focus:ring-0 transition-colors"
                           placeholder="Navn på møteleder" required>
                </div>

                <div class="bg-gray-50 rounded-xl p-4">
                    <label class="flex items-start gap-3 cursor-pointer">
                        <input v-model="meeting.quorum" type="checkbox" class="mt-1 w-5 h-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500">
                        <div>
                            <span class="font-medium">Møtet er beslutningsdyktig</span>
                            <p class="text-sm text-gray-600 mt-1">Det er quorum for å fatte vedtak</p>
                        </div>
                    </label>
                </div>

                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Saksliste (valgfritt)</label>
                    <textarea v-model="meeting.agenda" rows="4"
                              class="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-base focus:border-blue-500 focus:ring-0 transition-colors"
                              placeholder="Sak 1: Godkjenning av årsregnskap&#10;Sak 2: Valg av revisor"></textarea>
                </div>
            </div>

            <button @click="nextStep"
                    class="w-full bg-blue-600 text-white px-6 py-4 rounded-xl hover:bg-blue-700 active:bg-blue-800 font-semibold text-lg transition-colors">
                Fortsett
            </button>
        </div>

        <!-- Step 3: Participants -->
        <div v-show="step === 3" class="step-content">
            <h1 class="text-3xl font-bold mb-2">Hvem deltar?</h1>
            <p class="text-gray-600 mb-8">Legg til alle møtedeltakere</p>

            <div class="space-y-3 mb-6">
                <div v-for="(p, index) in participants" :key="index" class="bg-white border-2 border-gray-200 rounded-xl p-4">
                    <div class="space-y-3">
                        <input v-model="p.name" type="text"
                               class="w-full border-2 border-gray-200 rounded-lg px-4 py-3 text-base focus:border-blue-500 focus:ring-0 transition-colors"
                               placeholder="Navn" required>

                        <div class="flex gap-2">
                            <select v-model="p.role"
                                    class="flex-1 border-2 border-gray-200 rounded-lg px-4 py-3 text-base focus:border-blue-500 focus:ring-0 transition-colors">
                                <option value="styreleder">Styreleder</option>
                                <option value="styremedlem">Styremedlem</option>
                                <option value="varamedlem">Varamedlem</option>
                                <option value="daglig_leder">Daglig leder</option>
                                <option value="observator">Observatør</option>
                            </select>

                            <button v-if="participants.length > 1" @click="removeParticipant(index)"
                                    class="px-4 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg>
                            </button>
                        </div>

                        <label class="flex items-center gap-2 cursor-pointer">
                            <input v-model="p.present" type="checkbox" class="w-5 h-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500">
                            <span class="text-sm text-gray-700">Tilstede på møtet</span>
                        </label>
                    </div>
                </div>
            </div>

            <button @click="addParticipant"
                    class="w-full mb-8 border-2 border-dashed border-gray-300 text-gray-600 px-6 py-4 rounded-xl hover:border-blue-500 hover:text-blue-600 font-medium transition-colors">
                + Legg til deltaker
            </button>

            <button @click="nextStep"
                    class="w-full bg-blue-600 text-white px-6 py-4 rounded-xl hover:bg-blue-700 active:bg-blue-800 font-semibold text-lg transition-colors">
                Fortsett
            </button>
        </div>

        <!-- Step 4: Consent -->
        <div v-show="step === 4" class="step-content">
            <h1 class="text-3xl font-bold mb-2">Samtykke</h1>
            <p class="text-gray-600 mb-8">Før vi starter opptaket</p>

            <div class="bg-blue-50 border-2 border-blue-200 rounded-2xl p-6 mb-6">
                <div class="flex gap-3 mb-4">
                    <svg class="w-6 h-6 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                        <h3 class="font-semibold text-blue-900 mb-2">Personvern og AI-behandling</h3>
                        <p class="text-sm text-blue-800 mb-3">
                            Lydopptak behandles av OpenAI (Whisper og GPT) for transkripsjon og sammendrag.
                        </p>
                        <ul class="text-sm text-blue-800 space-y-2">
                            <li class="flex gap-2">
                                <svg class="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                </svg>
                                Alle deltakere må samtykke
                            </li>
                            <li class="flex gap-2">
                                <svg class="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                </svg>
                                Demo slettes etter 48 timer
                            </li>
                            <li class="flex gap-2">
                                <svg class="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                </svg>
                                Kryptert lagring
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <label class="flex items-start gap-3 p-4 bg-gray-50 rounded-xl cursor-pointer mb-8 border-2 transition-colors" :class="consent ? 'border-blue-500 bg-blue-50' : 'border-gray-200'">
                <input v-model="consent" type="checkbox" class="mt-0.5 w-6 h-6 text-blue-600 rounded border-gray-300 focus:ring-blue-500" required>
                <span class="text-sm leading-relaxed">
                    Jeg bekrefter at <strong>alle deltakere har samtykket</strong> til opptak og AI-behandling av møtedata.
                </span>
            </label>

            <button @click="startRecording" :disabled="!consent"
                    class="w-full bg-red-600 text-white px-6 py-4 rounded-xl hover:bg-red-700 active:bg-red-800 font-semibold text-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-red-600">
                🎙️ Start opptak
            </button>
        </div>

        <!-- Step 5: Recording -->
        <div v-show="step === 5" class="step-content text-center">
            <div class="mb-8">
                <div class="inline-flex items-center justify-center w-24 h-24 bg-red-600 rounded-full mb-6 animate-pulse">
                    <svg class="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clip-rule="evenodd" />
                    </svg>
                </div>

                <h1 class="text-4xl font-bold mb-2 font-mono tabular-nums">@{{ recordingTime }}</h1>
                <p class="text-gray-600">Opptak pågår</p>
            </div>

            <div class="mb-8">
                <div v-if="speechDetected" class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-800">
                    <span class="w-3 h-3 bg-green-600 rounded-full animate-pulse"></span>
                    <span class="font-medium">Tale detektert</span>
                </div>
                <div v-else class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 text-gray-600">
                    <span class="w-3 h-3 bg-gray-400 rounded-full"></span>
                    <span>Venter på tale...</span>
                </div>
            </div>

            <div class="bg-gray-100 rounded-2xl p-6 mb-8">
                <div class="flex items-center justify-between mb-2">
                    <span class="text-sm text-gray-600">Opplasting</span>
                    <span class="text-sm font-medium">@{{ chunkSeq }} lydklipp</span>
                </div>
                <div class="bg-gray-200 rounded-full h-2">
                    <div class="bg-blue-600 h-2 rounded-full transition-all duration-300" :style="{width: Math.min(uploadProgress, 100) + '%'}"></div>
                </div>
            </div>

            <div class="space-y-3">
                <button @click="stopRecording"
                        class="w-full bg-gray-900 text-white px-6 py-4 rounded-xl hover:bg-gray-800 active:bg-black font-semibold text-lg transition-colors">
                    ⏹ Stopp opptak
                </button>
                <button @click="cancelRecording"
                        class="w-full bg-white border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-xl hover:bg-gray-50 active:bg-gray-100 font-medium transition-colors">
                    Avbryt
                </button>
            </div>
        </div>
    </div>
    </div>
</div>

<style>
/* Apple-esque smooth transitions */
* {
    -webkit-tap-highlight-color: transparent;
}

input:focus, select:focus, textarea:focus {
    outline: none;
}

/* Smooth page transitions */
.step-content {
    animation: fadeIn 0.3s ease-in-out;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>

<script type="module">
// Wait for app.js to load Vue globally
(async () => {
    await new Promise(resolve => {
        if (window.Vue) {
            resolve();
        } else {
            const checkVue = setInterval(() => {
                if (window.Vue) {
                    clearInterval(checkVue);
                    resolve();
                }
            }, 100);

            setTimeout(() => {
                clearInterval(checkVue);
                alert('Vue failed to load. Please refresh the page.');
            }, 5000);
        }
    });

    const { createApp } = window.Vue;

    // Get CSRF token
    const csrfToken = document.querySelector('meta[name="csrf-token"]')?.content;

    if (!csrfToken) {
        console.error('CSRF token not found');
    }

    const appConfig = {
    data() {
        return {
            step: 1,
            company: {
                orgnr: '',
                name: '',
                address: ''
            },
            meeting: {
                datetime: '',
                location: '',
                chair: '',
                quorum: false,
                agenda: ''
            },
            participants: [
                { name: '', role: 'styreleder', present: true }
            ],
            consent: false,
            meetingId: null,
            vadRecorder: null,
            recordingTime: '00:00:00',
            recordingInterval: null,
            recordingStartTime: null,
            chunkSeq: 0,
            uploadProgress: 0,
            speechDetected: false,
            totalSpeechDuration: 0
        };
    },
    methods: {
        async lookupCompany() {
            if (!this.company.orgnr && !this.company.name) {
                alert('Fyll inn org.nr. eller selskapsnavn');
                return;
            }

            const button = event.target;
            button.disabled = true;
            button.textContent = 'Søker...';

            try {
                const response = await fetch('/api/company/lookup', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                        'X-CSRF-TOKEN': csrfToken
                    },
                    body: JSON.stringify({
                        orgnr: this.company.orgnr,
                        name: this.company.name
                    })
                });

                if (response.ok) {
                    const data = await response.json();
                    this.company.name = data.name;
                    this.company.orgnr = data.orgnr;
                    this.company.address = data.address || '';
                    alert('Selskapsinfo hentet fra Proff.no!');
                } else {
                    const error = await response.json();
                    alert('Kunne ikke finne selskap: ' + (error.message || 'Fyll inn manuelt'));
                }
            } catch (error) {
                console.error('Lookup failed:', error);
                alert('Feil ved oppslag. Vennligst sjekk internettforbindelsen eller fyll inn manuelt.');
            } finally {
                button.disabled = false;
                button.textContent = 'Slå opp';
            }
        },
        addParticipant() {
            this.participants.push({ name: '', role: 'styremedlem', present: true });
        },
        removeParticipant(index) {
            this.participants.splice(index, 1);
        },
        async nextStep() {
            if (this.step === 1 && !this.company.name) {
                alert('Fyll inn selskapsnavn');
                return;
            }
            if (this.step === 2 && (!this.meeting.datetime || !this.meeting.location || !this.meeting.chair)) {
                alert('Fyll inn alle påkrevde felt');
                return;
            }
            if (this.step === 3) {
                await this.createMeeting();
            }
            this.step++;
        },
        prevStep() {
            this.step--;
        },
        async createMeeting() {
            try {
                const response = await fetch('/api/meetings', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                        'X-CSRF-TOKEN': csrfToken
                    },
                    body: JSON.stringify({
                        company_name: this.company.name,
                        company_orgnr: this.company.orgnr,
                        company_address: this.company.address,
                        meeting_datetime: this.meeting.datetime,
                        meeting_location: this.meeting.location,
                        chair_name: this.meeting.chair,
                        quorum_ok: this.meeting.quorum,
                        agenda_text: this.meeting.agenda
                    })
                });

                if (!response.ok) {
                    throw new Error('Failed to create meeting');
                }

                const data = await response.json();
                this.meetingId = data.id;

                // Add participants
                await fetch(`/api/meetings/${this.meetingId}/participants`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                        'X-CSRF-TOKEN': csrfToken
                    },
                    body: JSON.stringify({ participants: this.participants.map(p => ({
                        name: p.name,
                        role: p.role,
                        is_present: p.present
                    })) })
                });
            } catch (error) {
                console.error('Failed to create meeting:', error);
                alert('Feil ved opprettelse av møte');
            }
        },
        async startRecording() {
            if (!this.consent) return;

            // Record consent
            await fetch(`/api/meetings/${this.meetingId}/consent`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'X-CSRF-TOKEN': csrfToken
                },
                body: JSON.stringify({ consent_confirmed: true })
            });

            this.step = 5;

            // Start VAD recording
            try {
                this.vadRecorder = new window.VADRecorder();

                this.recordingStartTime = Date.now();
                this.recordingInterval = setInterval(() => {
                    const elapsed = Date.now() - this.recordingStartTime;
                    const hours = Math.floor(elapsed / 3600000);
                    const minutes = Math.floor((elapsed % 3600000) / 60000);
                    const seconds = Math.floor((elapsed % 60000) / 1000);
                    this.recordingTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
                }, 1000);

                // Start VAD with chunk upload callback
                await this.vadRecorder.start(async (wavBlob) => {
                    this.speechDetected = true;
                    await this.uploadChunk(wavBlob, false);
                });

                console.log('[Wizard] VAD recording started');
            } catch (error) {
                console.error('[Wizard] Recording failed:', error);
                alert('Kunne ikke starte opptak. Sjekk mikrofontilgang og prøv igjen.');
            }
        },
        async cancelRecording() {
            if (confirm('Er du sikker på at du vil avbryte opptaket? All data vil gå tapt.')) {
                if (this.vadRecorder) {
                    await this.vadRecorder.stop();
                    clearInterval(this.recordingInterval);
                }
                window.location.href = '/';
            }
        },
        async stopRecording() {
            if (this.vadRecorder) {
                clearInterval(this.recordingInterval);

                // Stop VAD recorder
                await this.vadRecorder.stop();

                try {
                    // Finalize
                    const response = await fetch(`/api/meetings/${this.meetingId}/finalize`, {
                        method: 'POST',
                        headers: {
                            'Accept': 'application/json',
                            'X-CSRF-TOKEN': csrfToken
                        }
                    });

                    if (!response.ok) {
                        throw new Error('Finalisering feilet');
                    }

                    // Redirect to status page
                    window.location.href = `/styremote/${this.meetingId}/status`;
                } catch (error) {
                    console.error('[Wizard] Finalize failed:', error);
                    alert('Kunne ikke fullføre opptaket. Prøv igjen eller kontakt support.');
                }
            }
        },
        async uploadChunk(blob, isLast) {
            const formData = new FormData();
            formData.append('chunk', blob);
            formData.append('seq', this.chunkSeq++);
            formData.append('is_last', isLast ? '1' : '0');

            try {
                await fetch(`/api/meetings/${this.meetingId}/upload`, {
                    method: 'POST',
                    headers: {
                        'X-CSRF-TOKEN': csrfToken
                    },
                    body: formData
                });

                this.uploadProgress = Math.min(95, this.chunkSeq * 5);
            } catch (error) {
                console.error('Upload failed:', error);
            }
        }
    };

    console.log('[Wizard] Mounting app to #wizard-app');
    const appElement = document.getElementById('wizard-app');
    console.log('[Wizard] Element found:', appElement);
    console.log('[Wizard] Element content length:', appElement ? appElement.innerHTML.length : 'NOT FOUND');

    const app = createApp(appConfig);
    const vm = app.mount('#wizard-app');

    console.log('[Wizard] Mounted! VM:', vm);
    console.log('[Wizard] Step value:', vm.step);
})().catch(err => {
    console.error('[Wizard] Initialization error:', err);
    alert('Failed to initialize wizard: ' + err.message);
});
</script>
@endsection
