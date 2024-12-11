import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  base: "/",
  publicPath: "/",
  build: {
    rollupOptions: {
      output: {
        entryFileNames: (chunkInfo) => {
          return `assets/${chunkInfo.name.replace(/_/g, '-')}.js`;
        },
        chunkFileNames: (chunkInfo) => {
          return `assets/${chunkInfo.name.replace(/_/g, '')}.js`;
        },
        assetFileNames: `assets/[name].[ext]`,
      },
    },
  },

})
