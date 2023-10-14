import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: '/src/index.js', // Update this path to your JavaScript entry point file
      },
    },
  },
  define: {
    'process.env.REACT_APP_API_URL': JSON.stringify(process.env.REACT_APP_API_URL),
    'process.env.REACT_APP_API_TOKEN': JSON.stringify(process.env.REACT_APP_API_TOKEN),
  }
})
