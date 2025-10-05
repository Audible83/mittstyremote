@extends('layouts.app')

@section('title', 'Nytt Styremøte - Mitt Styremøte')

@section('content')
<div class="min-h-screen bg-gray-50">
<div id="app-wrapper">
<div id="app">
    <!-- Progress Bar with Clickable Steps -->
    <div class="bg-white border-b sticky top-0 z-50">
        <div class="max-w-4xl mx-auto px-4 py-4">
            <!-- Desktop: Show step names -->
            <div class="hidden md:flex items-center justify-between gap-2">
                <button v-for="(stepInfo, index) in stepLabels" :key="index"
                        @click="goToStep(index + 1)"
                        :disabled="index + 1 > step"
                        class="flex-1 text-center py-2 rounded-lg transition-all"
                        :class="{
                            'bg-blue-600 text-white font-semibold': step === index + 1,
                            'bg-blue-50 text-blue-600 hover:bg-blue-100 cursor-pointer': index + 1 < step,
                            'bg-gray-100 text-gray-400 cursor-not-allowed': index + 1 > step
                        }">
                    <div class="text-xs mb-1">@{{ index + 1 }}</div>
                    <div class="text-sm">@{{ stepInfo }}</div>
                </button>
            </div>

            <!-- Mobile: Simple progress bar -->
            <div class="md:hidden flex items-center gap-4">
                <button v-if="step > 1 && step < 5" @click="step--" class="text-blue-600 font-medium text-sm">
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
    <div v-if="step === 1" class="max-w-2xl mx-auto px-4 py-8 pb-32 md:pb-8">
        <h1 class="text-3xl font-bold mb-2">Hvilket selskap?</h1>
        <p class="text-gray-600 mb-8">Grunnleggende informasjon om selskapet</p>

        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium mb-2">
                    Org.nr (valgfritt)
                    <span v-if="lookupLoading" class="ml-2 text-blue-600 text-sm">
                        <svg class="animate-spin h-4 w-4 inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Henter info...
                    </span>
                    <span v-if="lookupSuccess && !lookupLoading" class="ml-2 text-green-600 text-sm">
                        ✓ Funnet
                    </span>
                    <span v-if="lookupError && !lookupLoading" class="ml-2 text-red-600 text-sm">
                        ✗ {{ lookupError }}
                    </span>
                </label>
                <input v-model="company.orgnr"
                       type="text"
                       maxlength="9"
                       pattern="[0-9]{9}"
                       @input="onOrgnrInput"
                       class="w-full border-2 rounded-xl px-4 py-3 focus:outline-none"
                       :class="{
                           'border-gray-200 focus:border-blue-500': !lookupError && !lookupSuccess,
                           'border-green-500 focus:border-green-500': lookupSuccess && !lookupError,
                           'border-red-500 focus:border-red-500': lookupError
                       }"
                       placeholder="123456789">
            </div>

            <div>
                <label class="block text-sm font-medium mb-2">Selskapsnavn *</label>
                <input v-model="company.name" type="text"
                       class="w-full border-2 rounded-xl px-4 py-3 focus:outline-none transition-colors"
                       :class="errors.companyName ? 'border-red-500 focus:border-red-500' : 'border-gray-200 focus:border-blue-500'"
                       placeholder="Acme AS" required>
                <p v-if="errors.companyName" class="mt-1 text-sm text-red-600">
                    {{ errors.companyName }}
                </p>
            </div>

            <div>
                <label class="block text-sm font-medium mb-2">Møtedato *</label>

                <!-- Quick Date Selection (especially useful on mobile) -->
                <div class="grid grid-cols-3 gap-2 mb-3">
                    <button type="button" @click="setQuickDate('now')"
                            class="px-3 py-2 text-sm border-2 border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 hover:text-blue-700 transition-colors">
                        🕐 Nå
                    </button>
                    <button type="button" @click="setQuickDate('today_14')"
                            class="px-3 py-2 text-sm border-2 border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 hover:text-blue-700 transition-colors">
                        📅 I dag 14:00
                    </button>
                    <button type="button" @click="setQuickDate('tomorrow_14')"
                            class="px-3 py-2 text-sm border-2 border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 hover:text-blue-700 transition-colors">
                        📅 I morgen 14:00
                    </button>
                </div>

                <input v-model="company.meetingDate" type="datetime-local"
                       class="w-full border-2 rounded-xl px-4 py-3 focus:outline-none transition-colors"
                       :class="errors.meetingDate ? 'border-red-500 focus:border-red-500' : 'border-gray-200 focus:border-blue-500'"
                       required>
                <p v-if="errors.meetingDate" class="mt-1 text-sm text-red-600">
                    {{ errors.meetingDate }}
                </p>
            </div>

            <div>
                <label class="block text-sm font-medium mb-2">Møteprogram / Agenda (valgfritt)</label>
                <textarea v-model="company.agenda" rows="6"
                          lang="no"
                          spellcheck="true"
                          class="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:border-blue-500 focus:outline-none"
                          placeholder="Skriv inn saksliste eller lim inn møteprogrammet her...&#10;&#10;Eksempel:&#10;Sak 1: Godkjenning av innkalling&#10;Sak 2: Godkjenning av referat fra forrige møte&#10;Sak 3: Årsregnskap og årsberetning&#10;Sak 4: Eventuelt"></textarea>
            </div>
        </div>

        <!-- Desktop only button (hidden on mobile - bottom nav shows instead) -->
        <button @click="nextStep" :disabled="!company.name || !company.meetingDate"
                class="mt-8 w-full bg-blue-600 text-white py-4 rounded-xl font-semibold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed hidden md:block">
            Fortsett
        </button>
    </div>

    <!-- Step 2: Participants -->
    <div v-if="step === 2" class="max-w-2xl mx-auto px-4 py-8 pb-32 md:pb-8">
        <h1 class="text-3xl font-bold mb-2">Hvem deltar?</h1>
        <p class="text-gray-600 mb-8">Legg til alle møtedeltakere</p>

        <div class="space-y-3 mb-6">
            <div v-for="(p, i) in participants" :key="i" class="border-2 border-gray-200 rounded-xl p-4">
                <div class="mb-3">
                    <input v-model="p.name" type="text" placeholder="Navn"
                           class="w-full border-2 rounded-lg px-4 py-3 focus:outline-none transition-colors"
                           :class="errors.participants[i] ? 'border-red-500 focus:border-red-500' : 'border-gray-200 focus:border-blue-500'">
                    <p v-if="errors.participants[i]" class="mt-1 text-sm text-red-600">
                        {{ errors.participants[i] }}
                    </p>
                </div>
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

        <!-- Desktop only button -->
        <button @click="nextStep" class="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold hover:bg-blue-700 hidden md:block">
            Fortsett
        </button>
    </div>

    <!-- Step 3: Consent -->
    <div v-if="step === 3" class="max-w-2xl mx-auto px-4 py-8 pb-32 md:pb-8">
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

        <!-- Desktop only button -->
        <button @click="startRecording" :disabled="!consent"
                class="w-full bg-red-600 text-white py-4 rounded-xl font-semibold hover:bg-red-700 disabled:opacity-50 hidden md:block">
            🎙️ Start opptak
        </button>
    </div>

    <!-- Mobile Bottom Navigation (Steps 1-3 only) -->
    <div v-if="step >= 1 && step <= 3" class="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t-2 border-gray-200 safe-area-bottom z-50">
        <div class="flex items-center gap-3 px-4 py-3">
            <!-- Back Button -->
            <button v-if="step > 1" @click="step--"
                    class="px-4 py-3 border-2 border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50">
                ← Tilbake
            </button>

            <!-- Step Indicator -->
            <div class="flex-1 text-center">
                <span class="text-sm font-medium text-gray-600">Steg @{{ step }} av 3</span>
            </div>

            <!-- Primary Action Button -->
            <button v-if="step === 1" @click="nextStep" :disabled="!company.name || !company.meetingDate"
                    class="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed">
                Fortsett
            </button>
            <button v-if="step === 2" @click="nextStep"
                    class="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700">
                Fortsett
            </button>
            <button v-if="step === 3" @click="startRecording" :disabled="!consent"
                    class="flex-1 bg-red-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-red-700 disabled:opacity-50">
                🎙️ Start
            </button>
        </div>
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
                      lang="no"
                      spellcheck="true"
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
                      lang="no"
                      spellcheck="true"
                      class="w-full border-2 border-gray-200 rounded-lg px-4 py-3 focus:border-blue-500 focus:outline-none font-mono text-sm"
                      placeholder="Ingen transkripsjon tilgjengelig. Du kan skrive inn notater manuelt her..."></textarea>
            <p class="text-sm text-gray-500 mt-2">💡 Tips: Legg til detaljer om beslutninger, avstemninger, og hvem som sa hva for bedre styrenotat.</p>
        </div>

        <button @click="generateNotat" :disabled="generating"
                class="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold hover:bg-blue-700 disabled:opacity-50 mb-4">
            @{{ generating ? '⏳ Genererer...' : '📝 Generer styrenotat' }}
        </button>

        <!-- Loading Skeleton -->
        <div v-if="generating" class="bg-white border-2 border-gray-200 rounded-xl p-6 mb-4 animate-pulse">
            <div class="flex justify-between items-center mb-4">
                <div class="h-6 bg-gray-200 rounded w-32"></div>
                <div class="flex gap-2">
                    <div class="h-10 bg-gray-200 rounded w-32"></div>
                    <div class="h-10 bg-gray-200 rounded w-20"></div>
                </div>
            </div>
            <div class="space-y-3">
                <div class="h-8 bg-gray-200 rounded w-3/4"></div>
                <div class="h-4 bg-gray-100 rounded w-full"></div>
                <div class="h-4 bg-gray-100 rounded w-full"></div>
                <div class="h-4 bg-gray-100 rounded w-5/6"></div>
                <div class="h-6 bg-gray-200 rounded w-2/3 mt-6"></div>
                <div class="h-4 bg-gray-100 rounded w-full"></div>
                <div class="h-4 bg-gray-100 rounded w-full"></div>
                <div class="h-4 bg-gray-100 rounded w-4/5"></div>
            </div>
            <div class="mt-4 text-center text-sm text-gray-500">
                <svg class="animate-spin h-5 w-5 inline mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                AI genererer styrenotat...
            </div>
        </div>

        <!-- Generated Document -->
        <div v-if="styrenotat && !generating" class="bg-white border-2 border-gray-200 rounded-xl p-6">
            <div class="flex justify-between items-center mb-4">
                <h3 class="font-semibold">Styrenotat</h3>
                <div class="flex gap-2">
                    <button @click="downloadPDF" :disabled="downloadingPDF"
                            class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 flex items-center gap-2">
                        <svg v-if="downloadingPDF" class="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span>@{{ downloadingPDF ? 'Laster...' : '📄 Last ned PDF' }}</span>
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
            stepLabels: [
                'Selskap',
                'Deltakere',
                'Samtykke',
                'Opptak',
                'Styrenotat'
            ],
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
            vadRecorder: null,
            lookupLoading: false,
            lookupSuccess: false,
            lookupError: null,
            lookupTimeout: null,
            // Form validation
            errors: {
                companyName: '',
                meetingDate: '',
                participants: []
            },
            // Loading states
            downloadingPDF: false
        };
    },
    methods: {
        goToStep(targetStep) {
            // Only allow going back to previous steps, not forward
            if (targetStep < this.step && targetStep >= 1) {
                this.step = targetStep;
                console.log('[Navigation] Jumped to step', targetStep);
            }
        },
        validateStep1() {
            this.errors.companyName = '';
            this.errors.meetingDate = '';
            let isValid = true;

            if (!this.company.name || this.company.name.trim() === '') {
                this.errors.companyName = 'Selskapsnavn er påkrevet';
                isValid = false;
            }

            if (!this.company.meetingDate) {
                this.errors.meetingDate = 'Møtedato er påkrevet';
                isValid = false;
            }

            return isValid;
        },
        validateStep2() {
            this.errors.participants = [];
            let isValid = true;

            this.participants.forEach((p, index) => {
                if (!p.name || p.name.trim() === '') {
                    this.errors.participants[index] = 'Navn er påkrevet';
                    isValid = false;
                } else {
                    this.errors.participants[index] = '';
                }
            });

            return isValid;
        },
        nextStep() {
            // Validate current step
            if (this.step === 1 && !this.validateStep1()) {
                return;
            }

            if (this.step === 2 && !this.validateStep2()) {
                return;
            }

            // Clear errors and proceed
            this.errors.companyName = '';
            this.errors.meetingDate = '';
            this.errors.participants = [];
            this.step++;
        },
        setQuickDate(type) {
            const now = new Date();

            switch(type) {
                case 'now':
                    // Current time, rounded to nearest 15 minutes
                    const minutes = Math.round(now.getMinutes() / 15) * 15;
                    now.setMinutes(minutes);
                    now.setSeconds(0);
                    break;

                case 'today_14':
                    // Today at 14:00
                    now.setHours(14, 0, 0, 0);
                    break;

                case 'tomorrow_14':
                    // Tomorrow at 14:00
                    now.setDate(now.getDate() + 1);
                    now.setHours(14, 0, 0, 0);
                    break;
            }

            // Format for datetime-local input: YYYY-MM-DDTHH:mm
            const year = now.getFullYear();
            const month = String(now.getMonth() + 1).padStart(2, '0');
            const day = String(now.getDate()).padStart(2, '0');
            const hours = String(now.getHours()).padStart(2, '0');
            const mins = String(now.getMinutes()).padStart(2, '0');

            this.company.meetingDate = `${year}-${month}-${day}T${hours}:${mins}`;
            console.log('[QuickDate] Set to:', this.company.meetingDate);
        },
        onOrgnrInput(event) {
            const orgnr = event.target.value;

            // Reset states
            this.lookupSuccess = false;
            this.lookupError = null;

            // Only lookup if we have exactly 9 digits
            if (orgnr && orgnr.length === 9 && /^\d{9}$/.test(orgnr)) {
                // Debounce the lookup
                clearTimeout(this.lookupTimeout);
                this.lookupTimeout = setTimeout(() => {
                    this.lookupCompany(orgnr);
                }, 500);
            }
        },
        async lookupCompany(orgnr) {
            this.lookupLoading = true;
            this.lookupError = null;

            try {
                const response = await fetch('/api/company/lookup', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').content
                    },
                    body: JSON.stringify({ orgnr })
                });

                if (response.ok) {
                    const data = await response.json();

                    // Auto-fill company information
                    if (data.name) {
                        this.company.name = data.name;
                        this.lookupSuccess = true;
                        console.log('[Lookup] Company found:', data.name);
                    } else {
                        this.lookupError = 'Ingen data funnet';
                    }
                } else {
                    const error = await response.json();
                    this.lookupError = error.message || 'Fant ikke org.nr';
                    console.error('[Lookup] Error:', error);
                }
            } catch (error) {
                this.lookupError = 'Nettverksfeil';
                console.error('[Lookup] Network error:', error);
            } finally {
                this.lookupLoading = false;
            }
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

            // Clear draft since meeting is completed
            this.clearDraft();
        },
        async downloadPDF() {
            this.downloadingPDF = true;
            try {
                window.open(`/api/meetings/${this.meetingId}/download/pdf`, '_blank');
                // Small delay to show the loading state
                setTimeout(() => {
                    this.downloadingPDF = false;
                }, 1000);
            } catch (error) {
                console.error('[PDF] Download failed:', error);
                alert('Kunne ikke laste ned PDF');
                this.downloadingPDF = false;
            }
        },
        shareNotat() {
            // TODO: Implement share functionality
            alert('Del-funksjon kommer snart');
        },
        saveDraft() {
            const draft = {
                step: this.step,
                company: this.company,
                participants: this.participants,
                consent: this.consent,
                transcription: this.transcription,
                timestamp: Date.now()
            };
            localStorage.setItem('mittstyremote_draft', JSON.stringify(draft));
            console.log('[AutoSave] Draft saved');
        },
        loadDraft() {
            const saved = localStorage.getItem('mittstyremote_draft');
            if (saved) {
                try {
                    const draft = JSON.parse(saved);
                    const age = Date.now() - draft.timestamp;

                    // Show resume dialog if draft is less than 24 hours old
                    if (age < 24 * 60 * 60 * 1000) {
                        const resume = confirm(
                            `Du har et ulagret møte fra ${Math.round(age / 3600000)} timer siden.\n\n` +
                            `Vil du fortsette hvor du slapp?`
                        );

                        if (resume) {
                            this.step = draft.step;
                            this.company = draft.company;
                            this.participants = draft.participants;
                            this.consent = draft.consent;
                            this.transcription = draft.transcription || '';
                            console.log('[AutoSave] Draft restored');
                        } else {
                            localStorage.removeItem('mittstyremote_draft');
                        }
                    } else {
                        localStorage.removeItem('mittstyremote_draft');
                    }
                } catch (e) {
                    console.error('[AutoSave] Failed to load draft', e);
                }
            }
        },
        clearDraft() {
            localStorage.removeItem('mittstyremote_draft');
            console.log('[AutoSave] Draft cleared');
        }
    },
    mounted() {
        // Load draft on mount
        this.loadDraft();

        // Auto-save every 30 seconds
        this.autoSaveInterval = setInterval(() => {
            if (this.step > 0 && this.step < 5 && !this.meetingId) {
                this.saveDraft();
            }
        }, 30000);
    },
    beforeUnmount() {
        // Clear auto-save interval
        if (this.autoSaveInterval) {
            clearInterval(this.autoSaveInterval);
        }
    },
    watch: {
        // Save on significant changes
        'company.name'() {
            if (this.company.name) {
                clearTimeout(this.saveTimeout);
                this.saveTimeout = setTimeout(() => this.saveDraft(), 2000);
            }
        },
        'company.agenda'() {
            clearTimeout(this.saveTimeout);
            this.saveTimeout = setTimeout(() => this.saveDraft(), 2000);
        },
        participants: {
            deep: true,
            handler() {
                clearTimeout(this.saveTimeout);
                this.saveTimeout = setTimeout(() => this.saveDraft(), 2000);
            }
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
