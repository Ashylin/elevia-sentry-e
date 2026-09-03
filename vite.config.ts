import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  base:'/elevia-sentry-e/',
  plugins: [react()],
})
