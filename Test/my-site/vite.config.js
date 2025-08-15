import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
 // Your real hosting path:
  base: "/Test/my-site/",
  // Optional: output directly into that folder in your repo
  build: {
    outDir: "Test/my-site",
    emptyOutDir: true, // careful: it will clear that folder on build
  },
});