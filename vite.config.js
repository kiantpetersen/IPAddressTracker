import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // build: {
  //   rollupOptions: {
  //     output: {
  //       // Use the environment variable in your output configuration
  //       entryFileNames: `assets/[name]-${import.meta.env.VITE_API_KEY}.js`
  //     }
  //   }
  // }
})
