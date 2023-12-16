// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtModule } from 'nuxt'
import { resolve } from 'path';
export default defineNuxtConfig({


modules:[
  "@nuxt/content",
  "@nuxt/image",
  'nuxt-gtag',
  'nuxt-swiper',
  '@nuxtjs/supabase',
  '@vite-pwa/nuxt'
],
pwa: {
  manifest: {
  name: 'hbhalli.com',
  short_name: 'hbhalli',
  description: '7am vegetables delivery, everyday!',
  theme_color: '#ffffff',
  icons: [
    {
      src: '/icon_192x192.png',
      sizes: '192x192',
      type: 'image/png',
    },
   ],
  },
  devOptions: {
    enabled: true,
    type: 'module',
  },
},

supabase: {
    redirect: false,
  },
  gtag: {
    id: 'G-VCFFGDC75H'
  },
  ssr: true,
  app: {
    head: {
      title: 'Order veggies today',
      htmlAttrs: {
        lang: 'en',       
      },

      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: '7am vegetables delivery, everyday!',
        },
        { name: 'format-detection', content: 'telephone=no' },
        { hid: 'og-image', property: 'og:image',
        content: 'https://hbhalli.com/hbhalli-og.webp'
},

      ],

      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+Kannada:wght@500;600&family=Poppins:wght@200;300;400;500;600;700;800&display=swap',
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com',
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+Kannada:wght@500;600&display=swap',
        },
      ],
    
    },
  },
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    }, 
  },
});