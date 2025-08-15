import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/Test/my-site/",     // caminho público real no teu domínio
  build: { outDir: "dist" },  // gera para dist (mais simples de gerir)
});