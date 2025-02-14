// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
    devtools: { enabled: true },
    ssr: true,
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxt/icon',
        '@nuxt/content',
    ],
    content: {
        highlight: {
            theme: 'nord',
            preload: ['css', 'js', 'html', 'xml'],
        },
    },
    css: [
        '~/assets/css/main.css',
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