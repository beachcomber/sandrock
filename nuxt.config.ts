// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: { enabled: true },
    ssr: true,
    prerender: true,
    modules: [
      '@nuxtjs/tailwindcss',
      '@nuxt/icon',
      '@nuxt/content',
      ['@nuxtjs/google-fonts',{
          families: {
          Roboto: [100,200,300,400,500,600,700,800,900],
          Inter: [400, 700],
          'Josefin+Sans': true,
          Lato: [100, 300],
          Raleway: {
              wght: [100, 400],
              ital: [100]
          },
          Inter: '200..700',
          'Crimson Pro': {
              wght: '200..900',
              ital: '200..700',
          }
          }
      }],
      'vue3-carousel-nuxt'
    ],
    content: {
        highlight: {
            theme: 'nord',
            preload: ['css', 'js', 'html', 'xml'],
        },
    },
    css: [
        '~/assets/css/global.css',
        '~/node_modules/lite-youtube-embed/src/lite-yt-embed.css',
    ],
    plugins: [
        '~/plugins/lite-youtube-embed.client.ts',
    ],
    vue: {  
        compilerOptions: {
            isCustomElement: (tag) => ['lite-youtube'].includes(tag),
        },
    }
})