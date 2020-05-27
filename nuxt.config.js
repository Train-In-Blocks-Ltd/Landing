
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s | Train In Blocks',
    htmlAttrs: {
      lang: 'en-GB'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },

      // Need filling in
      { name: 'description', content: '' },
      { property: 'og:description', content: '' },
      { name: 'twitter:description', content: '' },

      { name: 'apple-mobile-web-app-title', content: 'Train In Blocks' },
      { name: 'application-name', content: 'Train In Blocks' },
      { name: 'msapplication-TileColor', content: '#ffffff' },
      { name: 'theme-color', content: '#ffffff' },
      { hid: 'twitter:title', name: 'twitter:title', template: chunk => `${chunk} | Train In Blocks` },
      { name: 'twitter:image', content: 'https://traininblocks.com/android-chrome-192x192.png' },
      { property: 'og:site_name', content: 'Train In Blocks' },
      { hid: 'og:title', property: 'og:title', template: chunk => `${chunk} | Train In Blocks` },
      { hid: 'og:url', property: 'og:url', template: 'https://traininblocks.com%s' },
      { property: 'og:type', content: 'website' },
      { property: 'og:image', content: 'https://traininblocks.com/android-chrome-192x192.png' }
    ],
    link: [
      { rel: 'apple-touch-icon', sizes: '180x180', href: 'https://traininblocks.com/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: 'https://traininblocks.com/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '194x194', href: 'https://traininblocks.com/favicon-194x194.png' },
      { rel: 'icon', type: 'image/png', sizes: '192x192', href: 'https://traininblocks.com/android-chrome-192x192.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: 'https://traininblocks.com/favicon-16x16.png' },
      { rel: 'mask-icon', href: 'https://traininblocks.com/safari-pinned-tab.svg', color: '#282828' }
    ],
    script: [
      {
        inner: `{ 
          "@context": "http://schema.org",
          "@type": "Person",
          "email": "joe@joebailey.xyz",
          "image": "/Me.jpg",
          "jobTitle": "Front-End Web Developer",
          "name": "Joe Bailey",
          "birthPlace": "Cambridge, UK",
          "birthDate": "2000-06-02",
          "gender": "male",
          "nationality": "English",
          "telephone": "+44 7477737535",
          "url": "https://joebailey.xyz",
          "sameAs" : [ "https://www.linkedin.com/in/joe-bailey-b68b17171/",
          "https://twitter.com/JoeBailey26",
          "https://www.behance.net/joebailey26",
          "https://github.com/joebailey26",
          "https://codepen.io/joebailey26" 
        }`,
        type: 'application/ld+json'
      }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/modal.js', ssr: false },
    { src: '~/plugins/quill.js', ssr: false },
    { src: '~/plugins/scrollto.js', ssr: false }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/sitemap'
  ],
  sitemap: {
    hostname: 'https://traininblocks.com',
    gzip: true
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
