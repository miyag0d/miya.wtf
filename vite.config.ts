import react from '@vitejs/plugin-react'
import * as path from 'path'
import { defineConfig } from 'vite'
import macrosPlugin from 'vite-plugin-babel-macros'
import svgr from 'vite-plugin-svgr'

export default defineConfig({
  base: '',
  plugins: [react(), svgr(), macrosPlugin()],
  build: {
    commonjsOptions: {
      include: [],
    },
  },
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src') },
      { find: '@abis', replacement: path.resolve(__dirname, 'abis') },
      {
        find: '@typechain',
        replacement: path.resolve(__dirname, '../typechain-types'),
      },
    ],
  },
  optimizeDeps: {
    disabled: false,
  },
})
