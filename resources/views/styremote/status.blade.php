@extends('layouts.app')

@section('title', 'Status - Mitt Styremøte')

@section('content')
<div class="max-w-4xl mx-auto px-4 py-8" id="status-app">
    <div class="bg-white rounded-lg shadow-lg p-8">
        <h1 class="text-3xl font-bold mb-8 text-center">Behandler møte...</h1>

        <div class="space-y-6">
            <!-- Progress steps -->
            <div class="step-indicator" :class="{complete: progress >= 20}">
                <div class="step-icon">📤</div>
                <div class="step-text">
                    <h3 class="font-semibold">Laster opp</h3>
                    <p class="text-sm text-gray-600">Kombinerer lydfiler</p>
                </div>
            </div>

            <div class="step-indicator" :class="{complete: progress >= 40}">
                <div class="step-icon">👥</div>
                <div class="step-text">
                    <h3 class="font-semibold">Identifiserer talere</h3>
                    <p class="text-sm text-gray-600">Diarisering med AI</p>
                </div>
            </div>

            <div class="step-indicator" :class="{complete: progress >= 60}">
                <div class="step-icon">🗣️</div>
                <div class="step-text">
                    <h3 class="font-semibold">Transkriberer</h3>
                    <p class="text-sm text-gray-600">Tale til tekst</p>
                </div>
            </div>

            <div class="step-indicator" :class="{complete: progress >= 80}">
                <div class="step-icon">📝</div>
                <div class="step-text">
                    <h3 class="font-semibold">Genererer dokumenter</h3>
                    <p class="text-sm text-gray-600">Protokoll, tiltak og beslutninger</p>
                </div>
            </div>

            <div class="step-indicator" :class="{complete: progress >= 100}">
                <div class="step-icon">✅</div>
                <div class="step-text">
                    <h3 class="font-semibold">Ferdig!</h3>
                    <p class="text-sm text-gray-600">Dokumenter klare</p>
                </div>
            </div>
        </div>

        <!-- Progress bar -->
        <div class="mt-8">
            <div class="bg-gray-200 rounded-full h-3">
                <div class="bg-blue-600 h-3 rounded-full transition-all duration-500" :style="{width: progress + '%'}"></div>
            </div>
            <p class="text-center mt-2 text-sm text-gray-600">@{{ progress }}% fullført</p>
        </div>

        <!-- Error state -->
        <div v-if="failed" class="mt-8 bg-red-50 border border-red-200 rounded p-6 text-center">
            <p class="text-red-800 font-semibold">Behandlingen feilet</p>
            <p class="text-sm text-red-600 mt-2">Vennligst prøv igjen eller kontakt support</p>
        </div>
    </div>
</div>

<script type="module">
// Wait for Vue to be available
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
        }
    });

    const { createApp } = window.Vue;

    createApp({
    data() {
        return {
            meetingId: {!! json_encode($meetingId) !!},
            state: 'uploading',
            progress: 10,
            failed: false,
            pollInterval: null
        };
    },
    mounted() {
        this.startPolling();
    },
    beforeUnmount() {
        if (this.pollInterval) {
            clearInterval(this.pollInterval);
        }
    },
    methods: {
        async startPolling() {
            // Poll every 5 seconds instead of 3 to avoid rate limit (60/min = 1/sec)
            this.pollInterval = setInterval(async () => {
                await this.checkStatus();
            }, 5000);
            // Do initial check immediately
            await this.checkStatus();
        },
        async checkStatus() {
            try {
                const response = await fetch(`/api/meetings/${this.meetingId}/status`);
                const data = await response.json();

                this.state = data.state;

                // Update progress based on state
                const stateProgress = {
                    uploading: 20,
                    diarizing: 40,
                    transcribing: 60,
                    summarizing: 80,
                    ready: 100,
                    failed: 0
                };

                this.progress = stateProgress[this.state] || 10;

                if (this.state === 'ready') {
                    clearInterval(this.pollInterval);
                    setTimeout(() => {
                        window.location.href = `/styremote/${this.meetingId}/resultat`;
                    }, 1000);
                } else if (this.state === 'failed') {
                    this.failed = true;
                    clearInterval(this.pollInterval);
                }
            } catch (error) {
                console.error('Status check failed:', error);
            }
        }
    }
    }).mount('#status-app');
})();
</script>

<style>
/* Removed v-cloak to prevent hiding content */

.step-indicator {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
    border-radius: 0.5rem;
    background: #f9fafb;
    opacity: 0.5;
    transition: all 0.3s;
}
.step-indicator.complete {
    background: #ecfdf5;
    opacity: 1;
}
.step-icon {
    font-size: 2rem;
}
.step-text {
    flex: 1;
}
</style>
@endsection
