// https://nuxt.com/docs/api/configuration/nuxt-config
import eslintPlugin from 'vite-plugin-eslint'

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    [
      '@pinia/nuxt',
      {
        autoImports: ['defineStore', 'acceptHMRUpdate'],
      },
    ],
  ],
  imports: {
    dirs: ['stores'],
  },
  vite: {
    plugins: [eslintPlugin()],
  },
  css: ['~/assets/css/tailwind.css'],
})
