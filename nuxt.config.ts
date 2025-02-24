// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: [
        "/assets/css/font.css",
        "/assets/css/theme.css",
    ],
    compatibilityDate: '2024-11-01',
    devtools: {enabled: false},
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxt/image',
    ],
    tailwindcss: {
        exposeConfig: true,
        viewer: true,
    },
    app: {
        head: {
            script: [
                {
                    src: "https://cdn.telemetrydeck.com/websdk/telemetrydeck.min.js#data-key=6EEB15B7-D274-4D92-8C93-683BBC883F50",
                    async: true,
                    defer: true,
                    tagPosition: "head",
                    'data-app-id': "6EEB15B7-D274-4D92-8C93-683BBC883F50"
                }
            ]
        }
    }
})
