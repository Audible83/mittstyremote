import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
    ],
    resolve: {
        alias: {
            // Use Vue with template compiler for in-DOM templates
            'vue': 'vue/dist/vue.esm-bundler.js'
        }
    }
});
