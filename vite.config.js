import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Note: build.outDir set to "docs" so you can deploy via GitHub Pages (main/docs)
export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    outDir: 'docs'
  }
})
