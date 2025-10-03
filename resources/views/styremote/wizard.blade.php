@extends('layouts.app')

@section('title', 'Nytt Styremøte - Mitt Styremøte')

@section('content')
<div class="max-w-4xl mx-auto px-4 py-8" id="wizard-app">
    <div class="bg-white rounded-lg shadow-lg p-8">
        <h1 class="text-3xl font-bold mb-8 text-center">Nytt Styremøte</h1>

        <!-- Progress Steps -->
        <div class="flex justify-between mb-12">
            <div class="step" :class="{'active': step >= 1, 'complete': step > 1}">
                <div class="step-number">1</div>
                <div class="step-label">Selskap</div>
            </div>
            <div class="step" :class="{'active': step >= 2, 'complete': step > 2}">
                <div class="step-number">2</div>
                <div class="step-label">Møteinfo</div>
            </div>
            <div class="step" :class="{'active': step >= 3, 'complete': step > 3}">
                <div class="step-number">3</div>
                <div class="step-label">Deltakere</div>
            </div>
            <div class="step" :class="{'active': step >= 4, 'complete': step > 4}">
                <div class="step-number">4</div>
                <div class="step-label">Samtykke</div>
            </div>
            <div class="step" :class="{'active': step >= 5}">
                <div class="step-number">5</div>
                <div class="step-label">Opptak</div>
            </div>
        </div>

        <!-- Step 1: Company -->
        <div v-show="step === 1" class="step-content">
            <h2 class="text-2xl font-semibold mb-6">Selskapsinfo</h2>

            <div class="mb-4">
                <label class="block text-sm font-medium mb-2">Org.nr. (9 siffer)</label>
                <div class="flex gap-2">
                    <input v-model="company.orgnr" type="text" maxlength="9" class="flex-1 border rounded px-3 py-2" placeholder="123456789">
                    <button @click="lookupCompany" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Slå opp</button>
                </div>
            </div>

            <div class="mb-4">
                <label class="block text-sm font-medium mb-2">Selskapsnavn</label>
                <input v-model="company.name" type="text" class="w-full border rounded px-3 py-2" required>
            </div>

            <div class="mb-4">
                <label class="block text-sm font-medium mb-2">Adresse</label>
                <input v-model="company.address" type="text" class="w-full border rounded px-3 py-2">
            </div>

            <button @click="nextStep" class="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 font-semibold">Neste</button>
        </div>

        <!-- Step 2: Meeting Info -->
        <div v-show="step === 2" class="step-content">
            <h2 class="text-2xl font-semibold mb-6">Møteinformasjon</h2>

            <div class="mb-4">
                <label class="block text-sm font-medium mb-2">Møtedato og klokkeslett</label>
                <input v-model="meeting.datetime" type="datetime-local" class="w-full border rounded px-3 py-2" required>
            </div>

            <div class="mb-4">
                <label class="block text-sm font-medium mb-2">Møtested</label>
                <input v-model="meeting.location" type="text" class="w-full border rounded px-3 py-2" placeholder="Selskapets adresse / Teams / Zoom" required>
            </div>

            <div class="mb-4">
                <label class="block text-sm font-medium mb-2">Møteleder (styreleder)</label>
                <input v-model="meeting.chair" type="text" class="w-full border rounded px-3 py-2" required>
            </div>

            <div class="mb-4">
                <label class="flex items-center">
                    <input v-model="meeting.quorum" type="checkbox" class="mr-2">
                    <span>Møtet er beslutningsdyktig (quorum)</span>
                </label>
            </div>

            <div class="mb-4">
                <label class="block text-sm font-medium mb-2">Saksliste (valgfritt)</label>
                <textarea v-model="meeting.agenda" rows="4" class="w-full border rounded px-3 py-2" placeholder="Sak 1: Godkjenning av årsregnskap&#10;Sak 2: Valg av revisor&#10;..."></textarea>
            </div>

            <div class="flex gap-4">
                <button @click="prevStep" class="flex-1 bg-gray-200 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-300">Tilbake</button>
                <button @click="nextStep" class="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 font-semibold">Neste</button>
            </div>
        </div>

        <!-- Step 3: Participants -->
        <div v-show="step === 3" class="step-content">
            <h2 class="text-2xl font-semibold mb-6">Deltakere</h2>

            <div v-for="(p, index) in participants" :key="index" class="mb-4 p-4 border rounded">
                <div class="flex gap-4 mb-2">
                    <input v-model="p.name" type="text" class="flex-1 border rounded px-3 py-2" placeholder="Navn" required>
                    <select v-model="p.role" class="border rounded px-3 py-2">
                        <option value="styreleder">Styreleder</option>
                        <option value="styremedlem">Styremedlem</option>
                        <option value="varamedlem">Varamedlem</option>
                        <option value="daglig_leder">Daglig leder</option>
                        <option value="observator">Observatør</option>
                    </select>
                    <button @click="removeParticipant(index)" class="text-red-600 hover:text-red-800">Fjern</button>
                </div>
                <label class="flex items-center text-sm">
                    <input v-model="p.present" type="checkbox" class="mr-2">
                    Tilstede
                </label>
            </div>

            <button @click="addParticipant" class="w-full mb-6 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">+ Legg til deltaker</button>

            <div class="flex gap-4">
                <button @click="prevStep" class="flex-1 bg-gray-200 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-300">Tilbake</button>
                <button @click="nextStep" class="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 font-semibold">Neste</button>
            </div>
        </div>

        <!-- Step 4: Consent -->
        <div v-show="step === 4" class="step-content">
            <h2 class="text-2xl font-semibold mb-6">Samtykke til opptak</h2>

            <div class="bg-yellow-50 border border-yellow-200 rounded p-6 mb-6">
                <h3 class="font-semibold mb-2">Viktig informasjon om personvern</h3>
                <p class="text-sm mb-4">
                    Ved å ta opp møtet samles det inn lydopptak, transkripsjon og annen informasjon som behandles av AI-tjenester (OpenAI Whisper og GPT).
                </p>
                <ul class="text-sm list-disc list-inside space-y-1 mb-4">
                    <li>Alle deltakere må samtykke til opptak</li>
                    <li>Opptaket lagres kryptert</li>
                    <li>Demo-opptak slettes automatisk etter 48 timer</li>
                    <li>Du kan slette opptaket når som helst</li>
                </ul>
            </div>

            <label class="flex items-start mb-6">
                <input v-model="consent" type="checkbox" class="mr-3 mt-1" required>
                <span class="text-sm">
                    Jeg bekrefter at alle deltakere har samtykket til opptak og behandling av møtedata i henhold til personvernreglene.
                </span>
            </label>

            <div class="flex gap-4">
                <button @click="prevStep" class="flex-1 bg-gray-200 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-300">Tilbake</button>
                <button @click="startRecording" :disabled="!consent" class="flex-1 bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 font-semibold disabled:opacity-50 disabled:cursor-not-allowed">
                    Start opptak
                </button>
            </div>
        </div>

        <!-- Step 5: Recording -->
        <div v-show="step === 5" class="step-content">
            <h2 class="text-2xl font-semibold mb-6 text-center">Opptak pågår</h2>

            <div class="text-center mb-8">
                <div class="inline-block bg-red-600 text-white px-8 py-4 rounded-full text-4xl font-mono">
                    @{{ recordingTime }}
                </div>
            </div>

            <div class="mb-8">
                <div class="bg-gray-200 rounded-full h-2">
                    <div class="bg-red-600 h-2 rounded-full transition-all duration-300" :style="{width: uploadProgress + '%'}"></div>
                </div>
                <p class="text-sm text-gray-600 text-center mt-2">Upload: @{{ uploadProgress }}%</p>
            </div>

            <button @click="stopRecording" class="w-full bg-gray-800 text-white px-6 py-4 rounded-lg hover:bg-gray-900 font-semibold text-lg">
                ⏹️ Stopp opptak
            </button>
        </div>
    </div>
</div>

<style>
.step {
    text-align: center;
    flex: 1;
    position: relative;
}
.step-number {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #e5e7eb;
    color: #6b7280;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 8px;
    font-weight: bold;
}
.step.active .step-number {
    background: #2563eb;
    color: white;
}
.step.complete .step-number {
    background: #10b981;
    color: white;
}
.step-label {
    font-size: 0.875rem;
    color: #6b7280;
}
.step.active .step-label {
    color: #2563eb;
    font-weight: 600;
}
</style>

<script>
const { createApp } = Vue;

// Get CSRF token
const csrfToken = document.querySelector('meta[name="csrf-token"]')?.content;

if (!csrfToken) {
    console.error('CSRF token not found');
}

createApp({
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
            mediaRecorder: null,
            recordingTime: '00:00:00',
            recordingInterval: null,
            recordingStartTime: null,
            chunkSeq: 0,
            uploadProgress: 0
        };
    },
    methods: {
        async lookupCompany() {
            if (!this.company.orgnr && !this.company.name) {
                alert('Fyll inn org.nr. eller selskapsnavn');
                return;
            }

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
                alert('Feil ved oppslag. Fyll inn manuelt.');
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

            // Start recording
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
                this.mediaRecorder = new MediaRecorder(stream, {
                    mimeType: 'audio/webm;codecs=opus'
                });

                this.recordingStartTime = Date.now();
                this.recordingInterval = setInterval(() => {
                    const elapsed = Date.now() - this.recordingStartTime;
                    const hours = Math.floor(elapsed / 3600000);
                    const minutes = Math.floor((elapsed % 3600000) / 60000);
                    const seconds = Math.floor((elapsed % 60000) / 1000);
                    this.recordingTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
                }, 1000);

                this.mediaRecorder.ondataavailable = async (event) => {
                    if (event.data.size > 0) {
                        await this.uploadChunk(event.data, false);
                    }
                };

                this.mediaRecorder.start(5000); // 5 second chunks
            } catch (error) {
                console.error('Recording failed:', error);
                alert('Kunne ikke starte opptak. Sjekk mikrofontilgang.');
            }
        },
        async stopRecording() {
            if (this.mediaRecorder && this.mediaRecorder.state !== 'inactive') {
                this.mediaRecorder.stop();
                clearInterval(this.recordingInterval);

                // Upload last chunk
                this.mediaRecorder.onstop = async () => {
                    // Finalize
                    await fetch(`/api/meetings/${this.meetingId}/finalize`, {
                        method: 'POST',
                        headers: {
                            'Accept': 'application/json',
                            'X-CSRF-TOKEN': csrfToken
                        }
                    });

                    // Redirect to status page
                    window.location.href = `/styremote/${this.meetingId}/status`;
                };
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
    }
}).mount('#wizard-app');
</script>
@endsection
