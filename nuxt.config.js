
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
    target: 'static',
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
        { hid: 'description', name: 'description', content: 'Over-delivering doesn\'t have to cost you. Impress your clients and help them reach their health and fitness goals.' },
        { name: 'apple-mobile-web-app-title', content: 'Train In Blocks' },
        { name: 'application-name', content: 'Train In Blocks' },
        { name: 'msapplication-TileColor', content: '#ffffff' },
        { name: 'theme-color', content: '#ffffff' },

        // Twitter Card data
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'tiwtter:site', content: '@traininblocks' },
        { hid: 'twitter:title', name: 'twitter:title', template: chunk => `Train In Blocks | ${chunk}` },
        { hid: 'twitter:description', name: 'twitter:description', content: 'Over-delivering doesn\'t have to cost you. Impress your clients and help them reach their health and fitness goals.' },
        { hid: 'twitter:image', name: 'twitter:image', content: 'https://traininblocks.com/android-chrome-512x512.png?v=192' },

        // Open Graph data
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Train In Blocks' },
        { hid: 'og:description', property: 'og:description', content: 'Over-delivering doesn\'t have to cost you. Impress your clients and help them reach their health and fitness goals.' },
        { hid: 'og:title', property: 'og:title', template: chunk => `Train In Blocks | ${chunk}` },
        { hid: 'og:image', property: 'og:image', content: 'https://traininblocks.com/android-chrome-512x512.png?v=192' },
        { property: 'og:url', content: 'https://traininblocks.com' }
      ],
      link: [
        { hid: 'canonical', rel: 'canonical' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: 'https://traininblocks.com/apple-touch-icon.png?v=192' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: 'https://traininblocks.com/favicon-16x16.png?v=192' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: 'https://traininblocks.com/favicon-32x32.png?v=192' },
        { rel: 'icon', type: 'image/png', sizes: '192x192', href: 'https://traininblocks.com/android-chrome-192x192.png?v=192' },
        { rel: 'mask-icon', href: 'https://traininblocks.com/safari-pinned-tab.svg?v=192', color: '#282828' }
      ],
      __dangerouslyDisableSanitizers: ['script'],
      script: [
        {
          innerHTML: `{
            "@context": "http://schema.org",
            "@type": "Organization",
            "name": "Train In Blocks",
            "legalName" : "Train In Blocks Ltd",
            "foundingDate": "2020",
            "founder": {
              "@type": "Person",
              "name": "Mikey Lau"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "customer support",
              "email": "hello@traininblocks.com"
            },
            "logo": "https://traininblocks.com/android-chrome-512x512.png",
            "slogan": "Over-delivering doesn't have to cost you.",
            "url": "https://traininblocks.com",
            "sameAs": [
              "https://www.linkedin.com/company/train-in-blocks",
              "https://www.twitter.com/traininblocks",
              "https://www.instagram.com/traininblocks",
              "https://www.facebook.com/traininblocks"
            ]
          }`,
          type: 'application/ld+json'
        }
      ]
    },
    /*
    ** Customize the progress-bar color
    */
    loading: { color: '#282828' },
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
      { src: '~/plugins/scrollto.js', ssr: false },
      { src: '~/plugins/stripeCheckout.js', ssr: false }
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
      ['nuxt-cookie-control', {
        colors: {
          barTextColor: '#282828',
          barBackground: '#F4F4F4',
          barButtonColor: '#282828',
          modalOverlay: '#282828',
          checkboxActiveBackground: '#282828',
          checkboxInactiveBackground: '#DDDDDD',
          checkboxDisabledBackground: '#282828',
          checkboxActiveCircleBackground: '#FFFFFF'
        }
      }]
    ],
    cookies: {
      necessary: [
        {
          name: 'Default Cookies',
          description: 'Used for cookie control (cannot be disabled).',
          cookies: ['cookie_control_consent', 'cookie_control_enabled_cookies']
        }
      ],
      optional: [
        {
          name: 'Google Analytics',
          description: 'Google Analytics is a web analytics service offered by Google that tracks and reports website traffic.',
          src: 'https://www.googletagmanager.com/gtag/js?id=UA-167770206-1',
          async: true,
          cookies: ['_ga', '_gat', '_gid'],
          accepted: () => {
            window.dataLayer = window.dataLayer || []
            function gtag () {
              window.dataLayer.push(arguments)
            }
            gtag('set', 'anonymizeIp', true)
            gtag('js', new Date())
            gtag('config', 'UA-167770206-1', { anonymize_ip: true })
          },
          declined: () => {
          }
        }
      ]
    },
    pwa: {
      workbox: {
        offlineAnalytics: true,
        offlinePage: '/404.html',
      },
      manifest: {
        display: 'browser'
      }
    },
    generate: {
      routes: await getDynamicPaths({
        '/posts': 'posts/*.md'
      }),
      fallback: true
    },
    /*
    ** Build configuration
    */
    build: {
      extend (config, ctx) {
        // add frontmatter-markdown-loader
        config.module.rules.push({
          test: /\.md$/,
          include: path.resolve(__dirname, 'content'),
          loader: 'frontmatter-markdown-loader',
          options: {
            mode: [Mode.HTML, Mode.META]
          }
        })
      }
    }
  }
}
