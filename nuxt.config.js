
import * as path from 'path'
import * as glob from 'glob'
import Mode from 'frontmatter-markdown-loader/mode'

function getDynamicPaths (urlFilepathTable) {
  return [].concat(
    ...Object.keys(urlFilepathTable).map((url) => {
      const filepathGlob = urlFilepathTable[url]
      return glob
        .sync(filepathGlob, { cwd: 'content' })
        .map(filepath => `${url}/${path.basename(filepath, '.md')}`)
    })
  )
}

export default async () => {
  return {
    mode: 'universal',
    /*
    ** Headers of the page
    */
    head: {
      titleTemplate: 'Train In Blocks | %s',
      htmlAttrs: {
        lang: 'en-GB'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Over-delivering doesn\'t have to cost you. Impress your clients and help them reach their health and fitness goals.' },
        { property: 'og:description', content: 'Over-delivering doesn\'t have to cost you. Impress your clients and help them reach their health and fitness goals.' },
        { name: 'twitter:description', content: 'Over-delivering doesn\'t have to cost you. Impress your clients and help them reach their health and fitness goals.' },
        { name: 'apple-mobile-web-app-title', content: 'Train In Blocks' },
        { name: 'application-name', content: 'Train In Blocks' },
        { name: 'msapplication-TileColor', content: '#ffffff' },
        { name: 'theme-color', content: '#ffffff' },
        { hid: 'twitter:title', name: 'twitter:title', template: chunk => `Train In Blocks | ${chunk}` },
        { name: 'twitter:image', content: 'https://traininblocks.com/android-chrome-192x192.png' },
        { property: 'og:site_name', content: 'Train In Blocks' },
        { hid: 'og:title', property: 'og:title', template: chunk => `Train In Blocks | ${chunk}` },
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
      '@nuxtjs/stylelint-module',
      '@nuxtjs/pwa'
    ],
    /*
    ** Nuxt.js modules
    */
    modules: [
      '@nuxtjs/sitemap'
    ],
    sitemap: {
      hostname: 'https://traininblocks.com',
      gzip: true
    },
    pwa: {
      manifest: {
        display: 'browser'
      }
    },
    generate: {
      routes: await getDynamicPaths({
        '/posts': 'posts/*.md'
      })
    },
    /*
    ** Build configuration
    */
    build: {
      /*
      ** You can extend webpack config here
      */
      extend (config, ctx) {
        // add frontmatter-markdown-loader
        config.module.rules.push({
          test: /\.md$/,
          include: path.resolve(__dirname, 'content'),
          loader: 'frontmatter-markdown-loader',
          options: {
            mode: [Mode.VUE_COMPONENT, Mode.META]
          }
        })
      }
    }
  }
}
