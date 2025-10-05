import './bootstrap';
import { createApp } from 'vue';
import { VADRecorder } from './vad-recorder';

// Vue 3 is available globally if needed
window.Vue = { createApp };

// Make VADRecorder available globally
window.VADRecorder = VADRecorder;
