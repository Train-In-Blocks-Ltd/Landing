<style>
/* GLOBAL */
:root {
  --low_shadow: 0 0 20px 10px #28282810;
  --border_rad_large: 10px;
  --back: #f9f9f9;
  --fore: white;
  --base_dark: #282828;
  --base_light: #585858;
  --base_accent: white;
  --overlay: rgba(255, 255, 255, 0.95);
  --transition-standard: 1s all cubic-bezier(0.165, 0.84, 0.44, 1);
}
body {
  font-family: Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--base_dark);
  font-size: 16px;
  margin: 0;
  background-color: var(--back);
  scroll-behavior: smooth;
}
svg path.transparent {
  stroke: var(--base_dark);
}
svg path:not(.transparent, .no-fill) {
  fill: var(--base_dark);
}
img,
video,
iframe {
  user-select: none;
  outline: none;
  border-radius: var(--border_rad_large);
  box-shadow: var(--low_shadow);
  max-width: 100%;
}
li {
  margin: 1rem 0;
}
a,
b {
  color: var(--base_dark);
}

/* Blog */
.nuxt-content h1 {
  @apply text-4xl font-bold mt-8 mb-4;
}
.nuxt-content h2 {
  @apply text-2xl font-bold mt-8 mb-4;
}
.nuxt-content h3 {
  @apply text-xl font-bold mb-4;
}
.nuxt-content p {
  @apply mb-4;
}
.nuxt-content ul,
.nuxt-content ol {
  padding-left: 1.2em;
}
.nuxt-content ul {
  list-style-type: disc;
}
.nuxt-content ol {
  list-style-type: decimal;
}

/* Animations */
.fadeIn {
  animation: 0.6s fadeIn;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* GLOBAL: CONTENT */
.text--xlarge {
  font-size: calc(40px + (46 - 40) * ((100vw - 300px) / (1600 - 300)));
}
.center_text {
  text-align: center;
}
.accent_text {
  color: var(--base_light);
}
.no_margin {
  margin: 0;
}
.back_text {
  color: var(--base_dark);
  transition: var(--transition-standard);
}
.back_text:hover {
  opacity: 0.6;
}

/* Floating help */
.floating_help {
  position: fixed;
  right: 5rem;
  bottom: 2rem;
  padding: 0.6rem 1rem;
  border-radius: 50px;
  background-color: var(--base_dark);
  color: var(--fore);
  font-weight: bold;
  text-decoration: none;
  z-index: 99;
  transition: var(--transition-standard);
}
.floating_help:hover {
  opacity: 0.6;
}

/* GLOBAL: FOOTER */
.social-icon {
  width: 25px;
  height: 25px;
  margin: 0 1rem 2rem 0;
  cursor: pointer;
  opacity: 1;
  transition: opacity 0.4s, transform 0.1s cubic-bezier(0.165, 0.84, 0.44, 1);
}
.social-icon:hover {
  opacity: 0.6;
}
.social-icon:active {
  transform: scale(0.9);
}

/* Cookie bar */
.cookieControl__BarContainer {
  display: grid;
  grid-gap: 1rem;
  margin: auto;
  padding: 2rem 6rem;
}
.cookieControl__BarContainer :is(p, button) {
  font-size: 0.8rem;
}
div.cookieControl__Bar {
  background-color: var(--base_dark);
}
.cookieControl__Bar p {
  color: var(--fore);
  margin-top: 0;
}
.cookieControl__Bar a.input--option b {
  color: var(--fore);
}
.cookieControl__BarButtons > button {
  background-color: var(--fore) !important;
  color: var(--base_dark) !important;
}

/* Cookie button */
.cookieControl__ControlButton {
  bottom: 2rem;
  background-color: var(--base_dark);
  transition: var(--transition-standard) !important;
}
.cookieControl__ControlButton:hover {
  opacity: 0.6;
}
.cookieControl__ControlButton svg > path:not(.transparent) {
  fill: var(--fore);
}

/* Cookie modal */
.cookieControl__ModalContent {
  background-color: var(--fore);
}
div.cookieControl__ModalContent *:not(button) {
  color: var(--base_dark);
}

/* Misc. */
.spacer--small {
  height: 6vh;
}
.spacer {
  height: 10vh;
}
.spacer--large {
  height: 20vh;
}

/* Scroll-bar */
::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}
::-webkit-scrollbar-track {
  background: #181e2520;
}
::-webkit-scrollbar-thumb {
  border-radius: 3px;
  background: var(--base_dark);
}
::-webkit-scrollbar-thumb:hover {
  background: var(--base_light);
}

/* Responsiveness */
@media (max-width: 992px) {
  button:hover {
    background-color: transparent;
    color: var(--base_dark);
  }
  .input--option.nuxt-link-exact-active:before {
    transform: scaleX(1);
    opacity: 1;
  }
}
@media (max-width: 768px) {
  .cookieControl__ModalContent {
    padding: 0;
    overflow-y: auto;
  }
  .cookieControl__BarContainer,
  .cookieControl__ModalContent > div {
    padding: 2rem;
  }
  .container--nav > div:last-child {
    position: fixed;
    top: 2.8rem;
    background-color: var(--fore);
    padding: 0.6rem 1rem;
    border-radius: 10px;
    box-shadow: var(--low_shadow);
    z-index: 1;
  }

  /* Misc. */
  .input--option:hover {
    opacity: 1;
  }
  .social-icon:hover {
    opacity: 1;
  }
  button:disabled:hover {
    color: rgba(16, 16, 16, 0.3);
  }
}
@media (max-width: 576px) {
  #logo--home {
    width: 6rem;
  }
  .container--nav > div > button {
    display: none;
  }
  .container--features {
    grid-gap: 2rem;
  }

  /* Misc. */
  div.ql-editor {
    width: 300px;
  }
  button {
    font-size: 0.8rem;
  }
}
@media (max-width: 360px) {
  body {
    font-size: 14px;
  }
  .main-title {
    font-size: 1.5rem;
  }
}
</style>

<template>
  <div id="app" class="px-8">
    <nav-menu />
    <nav-bar class="my-16" />
    <nuxt class="fadeIn" />
    <div class="spacer" />
    <nuxt-link v-if="$route.name !== 'help'" class="floating_help" to="/help/">
      I need help
    </nuxt-link>
    <footer-section />
  </div>
</template>

<script>
import NavMenu from "../components/extensive/NavMenu";
import NavBar from "../components/extensive/NavBar";
import FooterSection from "../components/extensive/FooterSection";

export default {
  name: "App",
  components: {
    NavMenu,
    NavBar,
    FooterSection,
  },
  data() {
    return {
      theme: "Light",
      openNav: false,
      metaHelper: {
        title: "Train In Blocks",
        description:
          "Over-delivering doesn't have to cost you. Impress your clients and help them reach their health and fitness goals.",
        image: "https://traininblocks.com/android-chrome-512x512.png",
        url: "https://traininblocks.com",
      },
    };
  },
  head() {
    return {
      title: this.metaHelper.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.metaHelper.description,
        },
        { hid: "og:title", name: "og:title", content: this.metaHelper.title },
        {
          hid: "og:description",
          name: "og:description",
          content: this.metaHelper.description,
        },
        { hid: "og:image", name: "og:image", content: this.metaHelper.img },
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: this.metaHelper.title,
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: this.metaHelper.description,
        },
        {
          hid: "twitter:img",
          name: "twitter:img",
          content: this.metaHelper.image,
        },
      ],
      link: [{ hid: "canonical", rel: "canonical", href: this.metaHelper.url }],
    };
  },
};
</script>
