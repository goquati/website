export default defineNuxtConfig({
  css: [
    '~/assets/css/colors_and_type.css',
    '~/assets/css/marketing.css',
    '~/assets/css/landing.css',
    '~/assets/css/hero.css',
    '~/assets/css/identity.css',
  ],

  app: {
    head: {
      title: 'Quati — Wir liefern echte Software',
      meta: [
        { name: 'description', content: 'Zwei Senior-Entwickler. MVPs, KI-Automatisierungen und Fullstack-Anwendungen — geliefert in Wochen, nicht Quartalen.' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,700;1,9..144,400;1,9..144,700&family=Inter:wght@400;500;600;700&family=Geist+Mono:wght@400;500;600&display=swap',
        },
        { rel: 'icon', href: '/quati-mark.svg', type: 'image/svg+xml' },
      ],
    },
  },

  devtools: { enabled: false },
})
