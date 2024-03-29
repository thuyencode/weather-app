import { defineConfig } from 'vite'
import simpleHtmlPlugin from 'vite-plugin-simple-html'
import solid from 'vite-plugin-solid'
import { webfontDownload } from 'vite-plugin-webfont-dl'

export default defineConfig({
  // Change this line
  base: '/weather-app/',
  plugins: [solid(), simpleHtmlPlugin({ minify: true }), webfontDownload()]
})
