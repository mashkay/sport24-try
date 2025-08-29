import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import Pages from 'vite-plugin-pages';

export default defineConfig({
  // base: '/sport24-try/',
  
  plugins: [
    Pages({
      dirs: ['src/pages'],
    }),
    solidPlugin(),
  ],
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
  },
});
