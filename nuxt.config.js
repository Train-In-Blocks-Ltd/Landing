import * as path from "path";
import * as glob from "glob";
// eslint-disable-next-line
const sharp = require("sharp");

async function base64Encode(file) {
  const image = await sharp(file)
    .resize(600, 600)
    .toFormat("jpeg")
    .jpeg({ quality: 70, force: true })
    .toBuffer();
  const resizedImageData = image.toString("base64");
  return `data:image/jpg;base64,${resizedImageData}`;
}

function getDynamicPaths(urlFilepathTable) {
  return [].concat(
    ...Object.keys(urlFilepathTable).map((url) => {
      const filepathGlob = urlFilepathTable[url];
      return glob
        .sync(filepathGlob, { cwd: "content" })
        .map((filepath) => `${url}/${path.basename(filepath, ".md")}`);
    })
  );
}

export default async () => {
  return {
    components: true,
    target: "static",
    router: {
      trailingSlash: true,
    },
    /*
     ** Headers of the page
     */
    head: {
      titleTemplate: "%s | Train In Blocks",
      htmlAttrs: {
        lang: "en-GB",
      },
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content:
            "Over-delivering doesn't have to cost you. Impress your clients and help them reach their health and fitness goals.",
        },
        { name: "apple-mobile-web-app-title", content: "Train In Blocks" },
        { name: "application-name", content: "Train In Blocks" },
        { name: "msapplication-TileColor", content: "#ffffff" },
        { name: "theme-color", content: "#ffffff" },

        // Twitter Card data
        { name: "twitter:card", content: "summary_large_image" },
        { name: "tiwtter:site", content: "@traininblocks" },
        {
          hid: "twitter:title",
          name: "twitter:title",
          template: (chunk) => `${chunk} | Train In Blocks`,
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content:
            "Over-delivering doesn't have to cost you. Impress your clients and help them reach their health and fitness goals.",
        },
        {
          hid: "twitter:image",
          name: "twitter:image",
          content: "https://traininblocks.com/android-chrome-512x512.png?v=192",
        },

        // Open Graph data
        { property: "og:type", content: "website" },
        { property: "og:site_name", content: "Train In Blocks" },
        {
          hid: "og:description",
          property: "og:description",
          content:
            "Over-delivering doesn't have to cost you. Impress your clients and help them reach their health and fitness goals.",
        },
        {
          hid: "og:title",
          property: "og:title",
          template: (chunk) => `${chunk} | Train In Blocks`,
        },
        {
          hid: "og:image",
          property: "og:image",
          content: "https://traininblocks.com/android-chrome-512x512.png?v=192",
        },
        { property: "og:url", content: "https://traininblocks.com" },
      ],
      link: [
        { hid: "canonical", rel: "canonical" },
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "https://traininblocks.com/apple-touch-icon.png?v=192",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "https://traininblocks.com/favicon-16x16.png?v=192",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "https://traininblocks.com/favicon-32x32.png?v=192",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "192x192",
          href: "https://traininblocks.com/android-chrome-192x192.png?v=192",
        },
        {
          rel: "mask-icon",
          href: "https://traininblocks.com/safari-pinned-tab.svg?v=192",
          color: "#282828",
        },
      ],
      __dangerouslyDisableSanitizers: ["script"],
      script: [
        {
          innerHtml: `{
            const darkModeMediaQuery = window.matchMedia(
              '(prefers-color-scheme: dark)'
            );
            if (localStorage.getItem('darkmode') || darkModeMediaQuery.matches)
              document.documentElement.setAttribute('class', 'dark');
          }`,
        },
        {
          src: "https://js.stripe.com/v3/",
          async: true,
        },
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
          type: "application/ld+json",
        },
        {
          innerHTML: `{
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [{
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://traininblocks.com"
            }]
          }`,
          type: "application/ld+json",
        },
      ],
    },
    /*
     ** Customize the progress-bar color
     */
    loading: { color: "#282828" },
    /*
     ** Global CSS
     */
    css: ["~/assets/main.css"],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: ["~/plugins/fade-on-load.js"],
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: [
      // Doc: https://github.com/nuxt-community/eslint-module
      "@nuxtjs/eslint-module",
      "@aceforth/nuxt-optimized-images",
      "@nuxtjs/pwa",
      "@nuxt/postcss8",
      "@nuxtjs/google-analytics",
    ],
    /*
     ** Nuxt.js modules
     */
    modules: [
      [
        "nuxt-cookie-control",
        {
          colors: {
            barTextColor: "#282828",
            barBackground: "#F4F4F4",
            barButtonColor: "#282828",
            modalOverlay: "#282828",
            checkboxActiveBackground: "#282828",
            checkboxInactiveBackground: "#DDDDDD",
            checkboxDisabledBackground: "#282828",
            checkboxActiveCircleBackground: "#FFFFFF",
          },
        },
      ],
      "nuxt-content-body-html",
      "@nuxt/content",
      "@nuxtjs/feed",
    ],
    feed: [
      {
        create: async (feed) => {
          const $content = require("@nuxt/content").$content;
          feed.options = {
            title: "Train In Blocks Blog",
            link: "https://traininblocks.com/blog/",
            description: "Find power in knowledge",
          };

          let posts = await $content("blog").fetch();
          posts = posts.sort((a, b) => {
            return new Date(b.date) - new Date(a.date);
          });
          for (const post of posts) {
            const url = `https://traininblocks.com/blog/${post.slug}`;
            feed.addItem({
              author: post.author,
              content: `
                <p>
                  <img
                    alt="Cover image"
                    src="${await base64Encode(
                      `./assets/media-uploads/${post.img}`
                    )}"
                  >
                </p>
                ${post.bodyHtml}
              `,
              date: new Date(post.date),
              description: post.postDesc,
              id: url,
              link: url,
              title: post.title,
            });
          }
        },
        path: "/blog/feed.xml",
        type: "rss2",
      },
      {
        create: async (feed) => {
          const $content = require("@nuxt/content").$content;
          feed.options = {
            title: "Train In Blocks News",
            link: "https://traininblocks.com/dev/",
            description: "Join our development journey",
          };

          let posts = await $content("dev").fetch();
          posts = posts.sort((a, b) => {
            return new Date(b.date) - new Date(a.date);
          });
          posts.forEach((post) => {
            const url = `https://traininblocks.com/dev/${post.slug}`;
            feed.addItem({
              author: post.author,
              content: post.bodyHtml,
              date: new Date(post.date),
              description: post.postDesc,
              id: url,
              link: url,
              title: post.title,
            });
          });
        },
        path: "/dev/feed.xml",
        type: "rss2",
      },
      {
        create: async (feed) => {
          const $content = require("@nuxt/content").$content;
          feed.options = {
            title: "Train In Blocks Help",
            link: "https://traininblocks.com/help/",
            description: "Need help with something?",
          };

          const posts = await $content("help").sortBy("title", "desc").fetch();
          posts.forEach((post) => {
            const url = `https://traininblocks.com/help/${post.slug}`;
            feed.addItem({
              content: post.bodyHtml,
              description: post.postDesc,
              id: url,
              link: url,
              title: post.title,
            });
          });
        },
        path: "/help/feed.xml",
        type: "rss2",
      },
    ],
    googleAnalytics: {
      id: "UA-167770206-1",
    },
    cookies: {
      necessary: [
        {
          name: "Default Cookies",
          description: "Used for cookie control (cannot be disabled).",
          cookies: ["cookie_control_consent", "cookie_control_enabled_cookies"],
        },
      ],
      optional: [
        {
          name: "Google Analytics",
          description:
            "Google Analytics is a web analytics service offered by Google that tracks and reports website traffic.",
          src: "https://www.googletagmanager.com/gtag/js?id=UA-167770206-1",
          async: true,
          cookies: ["_ga", "_gat", "_gid", "_gcl_au"],
          accepted: () => {
            window.dataLayer = window.dataLayer || [];
            function gtag() {
              window.dataLayer.push(arguments);
            }
            gtag("set", "anonymizeIp", true);
            gtag("js", new Date());
            gtag("config", "UA-167770206-1", { anonymize_ip: true });
            gtag("config", "AW-407043956");
          },
          declined: () => {},
        },
        {
          name: "Facebook Pixel",
          description:
            "The Facebook Pixel is a web analytics service offered by Facebook that tracks and reports website visitors.",
          cookies: ["fbc", "fbp"],
          async: true,
          accepted: () => {
            /* eslint-disable */
            !(function (f, b, e, v, n, t, s) {
              if (f.fbq) return;
              n = f.fbq = function () {
                n.callMethod
                  ? n.callMethod.apply(n, arguments)
                  : n.queue.push(arguments);
              };
              if (!f._fbq) f._fbq = n;
              n.push = n;
              n.loaded = !0;
              n.version = "2.0";
              n.queue = [];
              t = b.createElement(e);
              t.async = !0;
              t.src = v;
              s = b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t, s);
            })(
              window,
              document,
              "script",
              "https://connect.facebook.net/en_US/fbevents.js"
            );
            fbq("init", "720008829338288");
            fbq("track", "PageView");
            /* eslint-enable */
          },
          declined: () => {},
        },
        {
          name: "Microsoft Universal Event Tracking",
          description:
            "Microsoft Universal Event Tracking is a web analytics service offered by Microsoft that tracks and reports website traffic.",
          async: true,
          cookies: ["MUID", "_uetmsclkid", "_uetsid", "_uetvid"],
          accepted: () => {
            /* eslint-disable */
            (function (w, d, t, r, u) {
              var f, n, i;
              (w[u] = w[u] || []),
                (f = function () {
                  var o = { ti: "52005290" };
                  (o.q = w[u]), (w[u] = new UET(o)), w[u].push("pageLoad");
                }),
                (n = d.createElement(t)),
                (n.src = r),
                (n.async = 1),
                (n.onload = n.onreadystatechange =
                  function () {
                    var s = this.readyState;
                    (s && s !== "loaded" && s !== "complete") ||
                      (f(), (n.onload = n.onreadystatechange = null));
                  }),
                (i = d.getElementsByTagName(t)[0]),
                i.parentNode.insertBefore(n, i);
            })(window, document, "script", "//bat.bing.com/bat.js", "uetq");
            /* eslint-enable */
          },
          declined: () => {},
        },
      ],
    },
    optimizedImages: {
      optimizeImages: true,
      optimizeImagesInDev: true,
    },
    pwa: {
      workbox: {
        offlineAnalytics: true,
        offlinePage: "/404.html",
      },
      manifest: {
        display: "browser",
      },
    },
    generate: {
      routes: await getDynamicPaths({
        "/posts": "posts/*.md",
      }),
      fallback: true,
    },
    /*
     ** Build configuration
     */
    build: {
      html: {
        minify: {
          collapseBooleanAttributes: true,
          decodeEntities: true,
          minifyCSS: true,
          minifyJS: true,
          processConditionalComments: true,
          removeEmptyAttributes: true,
          removeRedundantAttributes: true,
          trimCustomFragments: true,
          useShortDoctype: true,
        },
      },
      postcss: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  };
};
