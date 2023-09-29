import fs from 'fs'
import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

const root = resolve(__dirname, 'src')
const outDir = resolve(__dirname, 'dist')
const endpointFileName = 'index.html'
const endpointMap = fs
  .readdirSync('src', { withFileTypes: true })
  .filter(item => item.isDirectory() && (item.name !== 'assets'))
  .reduce((mapper, item) => {
    const folderName = item.name
    mapper[folderName] = resolve(root, folderName, endpointFileName)
    return mapper
  }, {})

// https://vitejs.dev/config/
export default defineConfig({
  root,
  plugins: [react()],
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(root, endpointFileName),
        ...endpointMap
      }
    }
  }
})
