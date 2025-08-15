import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
 // Se o repositório for "my-site", usa "/my-site/"
  // Se for user site (repo "username.github.io"), usa "/"
  base: "/Test/my-site/",
})
