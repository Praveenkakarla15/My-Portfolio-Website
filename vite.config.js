import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/My-Portfolio-Website/', // This MUST match your repository name exactly (case-sensitive)
  plugins: [react(), tailwindcss()],
})
