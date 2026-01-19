import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        manualChunks: {
          // Separate heavy animation libraries
          'vendor-animations': ['framer-motion', 'react-slick', 'slick-carousel'],
          // Separate AI SDK (only loaded when search is used)
          'vendor-ai': ['@google/generative-ai'],
          // Separate markdown rendering
          'vendor-markdown': ['react-markdown'],
          // Core React libraries
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
        },
      },
    },
  },
  server: {
    proxy: {
      '/api/forex': {
        target: 'https://api.exchangerate-api.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/forex/, ''),
      },

      '/api/crypto': {
        target: 'https://api.coingecko.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/crypto/, ''),
      },
      '/api/alphavantage': {
        target: 'https://www.alphavantage.co',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/alphavantage/, ''),
      },
    },
  },
})
