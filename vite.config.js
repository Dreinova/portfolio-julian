import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // Project page en https://dreinova.github.io/portfolio-julian/
  base: '/portfolio-julian/',
  plugins: [react(), tailwindcss()],
})
