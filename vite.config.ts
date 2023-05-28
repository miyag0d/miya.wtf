import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'
import macrosPlugin from 'vite-plugin-babel-macros'
import imagePresets, { widthPreset } from 'vite-plugin-image-presets'
import svgr from 'vite-plugin-svgr'

export default defineConfig({
  base: '',
  plugins: [
    react(),
    svgr(),
    macrosPlugin(),
    imagePresets({
      thumbnail: widthPreset({
        loading: 'lazy',
        widths: [120, 170],
        formats: {
          webp: { quality: 50 },
        },
      }),
      banner: widthPreset({
        class: 'banner',
        loading: 'eager',
        widths: [500],
        formats: {
          webp: { quality: 50 },
        },
      }),
      avatar: widthPreset({
        loading: 'lazy',
        widths: [325],
        formats: {
          webp: { quality: 50 },
        },
      }),
    }),
  ],
  build: {
    sourcemap: true,
    commonjsOptions: {
      include: [],
    },
  },
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src') },
      { find: 'abis', replacement: path.resolve(__dirname, 'abis') },
      {
        find: 'typechain',
        replacement: path.resolve(__dirname, './typechain'),
      },
      { find: 'assets', replacement: path.resolve(__dirname, 'src/assets') },
    ],
  },
  optimizeDeps: {
    disabled: false,
  },
})
