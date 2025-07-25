// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  modules: ['@nuxt/test-utils', '@pinia/nuxt'],
  ssr: false,
  devtools: { enabled: true },
  css: ['@nordhealth/css', '@nordhealth/themes/lib/vet.css'],
  routeRules: {
    '/': {
      redirect: '/signup',
    },
  },
  compatibilityDate: '2025-07-15',
  vite: {
    vue: {
      template: {
        compilerOptions: {
          isCustomElement: tag => tag.includes('-'),
        },
      },
    },
  },
})
