import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Relative base path ensures smooth operation on both root domains (Vercel)
  // and repository sub-paths (GitHub Pages)
  base: './',
  server: {
    port: 3000,
    open: true
  }
});
