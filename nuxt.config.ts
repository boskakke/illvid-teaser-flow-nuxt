
import { defineNuxtConfig } from 'nuxt'


// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({

  publicRuntimeConfig: {
    BASE_URL: process.env.BASE_URL,
    API_URL: process.env.API_URL,
    FRONTPAGE_ID: process.env.FRONTPAGE_ID
  },
  css: [
    // SCSS file in the project
    '~/assets/styles/main.scss'
  ],
  modules: [
    '@vueuse/nuxt',
    '@nuxt/image-edge',
  ],
  image: {
    provider: 'imgix',
    domains: ['images.bonnier.cloud'],
    imgix: {
      baseURL: 'https://images-bonnier.imgix.net'
    },
    screens: {
      xs: 600,
      sm: 1240,
      md: 1240,
      lg: 1240,
      xl: 1280,
      xxl: 1536,
      '2xl': 1536
    },
  }
})

