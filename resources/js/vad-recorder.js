import { MicVAD } from '@ricky0123/vad-web';

/**
 * VAD-enabled audio recorder for meetings
 * Uses Silero VAD to detect speech and convert to WAV for Whisper
 */
export class VADRecorder {
    constructor() {
        this.vad = null;
        this.audioContext = null;
        this.chunks = [];
        this.isRecording = false;
        this.onChunkCallback = null;
        this.sampleRate = 16000; // Whisper works best with 16kHz
    }

    /**
     * Initialize VAD and start recording
     */
    async start(onChunkCallback) {
        this.onChunkCallback = onChunkCallback;
        this.chunks = [];
        this.isRecording = true;

        try {
            // Create audio context for processing
            this.audioContext = new (window.AudioContext || window.webkitAudioContext)({
                sampleRate: this.sampleRate
            });

            // Initialize VAD with optimal settings for meeting transcription
            this.vad = await MicVAD.new({
                // Model paths (absolute URLs from public directory)
                modelURL: '/silero_vad_legacy.onnx',
                workletURL: '/vad.worklet.bundle.min.js',

                // Use recommended settings from docs
                positiveSpeechThreshold: 0.8, // Higher threshold = more confident speech detection
                negativeSpeechThreshold: 0.35, // Lower = quicker to detect silence
                redemptionFrames: 8, // Frames to wait before declaring speech ended
                frameSamples: 1536, // Optimal for Silero VAD
                minSpeechFrames: 3, // Minimum frames to consider as speech
                preSpeechPadFrames: 1, // Padding before speech starts

                // Callbacks
                onSpeechStart: () => {
                    console.log('[VAD] Speech detected');
                },

                onSpeechEnd: async (audio) => {
                    console.log('[VAD] Speech ended, processing audio');
                    await this.processAudioSegment(audio);
                },

                onVADMisfire: () => {
                    console.log('[VAD] False positive detected, ignoring');
                },

                onFrameProcessed: (probs) => {
                    // Optional: Could show live VAD probability to user
                    // console.log('[VAD] Frame probability:', probs.isSpeech);
                }
            });

            await this.vad.start();
            console.log('[VAD] Recording started');

        } catch (error) {
            console.error('[VAD] Failed to start:', error);
            throw new Error('Kunne ikke starte VAD: ' + error.message);
        }
    }

    /**
     * Process detected speech segment and convert to WAV
     */
    async processAudioSegment(audioFloat32Array) {
        try {
            // Convert Float32Array to WAV blob
            const wavBlob = this.float32ArrayToWav(audioFloat32Array, this.sampleRate);

            console.log('[VAD] Created WAV chunk:', {
                size: wavBlob.size,
                duration: audioFloat32Array.length / this.sampleRate
            });

            // Call the upload callback
            if (this.onChunkCallback) {
                await this.onChunkCallback(wavBlob);
            }

        } catch (error) {
            console.error('[VAD] Failed to process audio segment:', error);
        }
    }

    /**
     * Convert Float32Array to WAV blob
     * Whisper expects: 16-bit PCM, mono, 16kHz
     */
    float32ArrayToWav(float32Array, sampleRate) {
        // Convert float32 (-1.0 to 1.0) to int16 (-32768 to 32767)
        const int16Array = new Int16Array(float32Array.length);
        for (let i = 0; i < float32Array.length; i++) {
            const s = Math.max(-1, Math.min(1, float32Array[i]));
            int16Array[i] = s < 0 ? s * 0x8000 : s * 0x7FFF;
        }

        // Create WAV file header
        const numChannels = 1; // Mono
        const bitsPerSample = 16;
        const byteRate = sampleRate * numChannels * bitsPerSample / 8;
        const blockAlign = numChannels * bitsPerSample / 8;
        const dataSize = int16Array.length * 2;
        const headerSize = 44;

        const buffer = new ArrayBuffer(headerSize + dataSize);
        const view = new DataView(buffer);

        // Write WAV header
        const writeString = (offset, string) => {
            for (let i = 0; i < string.length; i++) {
                view.setUint8(offset + i, string.charCodeAt(i));
            }
        };

        writeString(0, 'RIFF');
        view.setUint32(4, 36 + dataSize, true);
        writeString(8, 'WAVE');
        writeString(12, 'fmt ');
        view.setUint32(16, 16, true); // PCM chunk size
        view.setUint16(20, 1, true); // PCM format
        view.setUint16(22, numChannels, true);
        view.setUint32(24, sampleRate, true);
        view.setUint32(28, byteRate, true);
        view.setUint16(32, blockAlign, true);
        view.setUint16(34, bitsPerSample, true);
        writeString(36, 'data');
        view.setUint32(40, dataSize, true);

        // Write audio data
        const dataView = new Int16Array(buffer, headerSize);
        dataView.set(int16Array);

        return new Blob([buffer], { type: 'audio/wav' });
    }

    /**
     * Stop recording and cleanup
     */
    async stop() {
        this.isRecording = false;

        if (this.vad) {
            this.vad.pause();
            this.vad.destroy();
            this.vad = null;
        }

        if (this.audioContext) {
            await this.audioContext.close();
            this.audioContext = null;
        }

        console.log('[VAD] Recording stopped');
    }

    /**
     * Pause recording temporarily
     */
    pause() {
        if (this.vad) {
            this.vad.pause();
        }
    }

    /**
     * Resume recording
     */
    async resume() {
        if (this.vad) {
            await this.vad.start();
        }
    }
}
