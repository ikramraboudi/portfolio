import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    plugins: [react()],
    // Permet de configurer le base path pour GitHub Pages (ex: /Portfolio/) ou Vercel (/)
    base: env.VITE_BASE_PATH || '/',
    server: {
      port: 3000,
      open: false,
    },
    build: {
      sourcemap: false,
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['react', 'react-dom'],
            animations: ['framer-motion'],
            icons: ['lucide-react'],
          },
        },
      },
    },
  };
});
