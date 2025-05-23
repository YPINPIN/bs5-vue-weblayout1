import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueDevTools from 'vite-plugin-vue-devtools';

// https://vite.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/bs5-vue-weblayout1/' : '/',
  plugins: [vue(), vueDevTools()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  // Optional: Silence Sass deprecation warnings.
  css: {
    preprocessorOptions: {
      scss: {
        silenceDeprecations: ['import', 'color-functions', 'global-builtin'],
        additionalData: `
          @use "@/assets/scss/global/g-fn.scss";
        `,
      },
    },
  },
});
