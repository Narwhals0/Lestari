import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  alias: {
    'react-qr-scanner': 'react-qr-scanner/dist/qr-scanner.min.js',
  },
})
