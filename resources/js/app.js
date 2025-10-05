import './bootstrap';
// Import Vue with template compiler (full build)
import * as Vue from 'vue';
import { VADRecorder } from './vad-recorder';

// Make Vue 3 available globally with full API
window.Vue = Vue;

// Make VADRecorder available globally
window.VADRecorder = VADRecorder;
