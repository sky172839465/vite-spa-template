import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

const root = resolve(__dirname, 'src')
const outDir = resolve(__dirname, 'dist')
const endpointFileName = 'index.html'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  root,
  plugins: [react()],
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(root, endpointFileName)
      }
    }
  },
  resolve: {
    alias: {
      '@': root
    }
  }
})
