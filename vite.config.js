import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const rootDir = fileURLToPath(new URL('.', import.meta.url))

// https://vite.dev/config/
// Two HTML entries. `websites/index.html` is served as /websites/ on HostGator
// (DirectoryIndex) with no rewrite rules. base stays relative so asset URLs
// in dist/websites/index.html point at ../assets/.
export default defineConfig({
  plugins: [react()],
  base: "./",
  build: {
    rollupOptions: {
      input: {
        main: resolve(rootDir, 'index.html'),
        websites: resolve(rootDir, 'websites/index.html'),
      },
    },
  },
})
