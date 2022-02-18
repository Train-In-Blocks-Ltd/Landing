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
  @apply m-0 text-base text-gray-800 dark:text-white bg-gray-100 dark:bg-gray-800 scroll-smooth;
}
svg path.transparent {
  @apply stroke-gray-800 dark:stroke-white;
}
svg path:not(.transparent, .no-fill) {
  @apply fill-gray-800 dark:fill-white;
}

img,
video,
iframe {
  @apply select-none outline-none rounded-lg max-w-full;
}
li {
  @apply my-1;
}
a,
b {
  @apply text-gray-800 dark:text-white;
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
.nuxt-content a {
  @apply underline text-blue-700;
}
.nuxt-content img {
  @apply w-full md:w-1/2 sm:max-w-lg my-4 grayscale;
}
ul,
ol {
  @apply pl-5;
}
ul {
  @apply list-disc;
}
ol {
  @apply list-decimal;
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

/* Cookie bar */
.cookieControl__BarButtons > button,
div.cookieControl__ModalContent button {
  @apply select-none cursor-pointer self-center rounded border-none px-6 py-3 font-bold transition-all hover:opacity-60 active:scale-95 disabled:opacity-60 disabled:cursor-default;
}
.cookieControl__BarContainer {
  @apply grid gap-4 m-auto px-8 py-10;
}
div.cookieControl__Bar {
  @apply bg-gray-800 dark:bg-white;
}
div.cookieControl__Bar p {
  @apply text-white dark:text-gray-800;
}

/* Cookie button */
.cookieControl__ControlButton {
  @apply bottom-8 bg-gray-800 dark:bg-white hover:opacity-60 transition-opacity;
}
.cookieControl__ControlButton svg > path:not(.transparent) {
  @apply fill-white dark:fill-gray-800;
}
.cookieControl__BarButtons > button {
  @apply dark:text-white text-gray-800 dark:bg-gray-800 bg-white;
}

/* Cookie modal */
.cookieControl__ModalContent {
  @apply bg-white dark:bg-gray-800;
}
div.cookieControl__ModalContent *:not(button) {
  @apply text-gray-800 dark:text-white;
}
div.cookieControl__ModalContent button {
  @apply text-white dark:text-gray-800 bg-gray-800 dark:bg-white;
}
div.cookieControl__ModalContent input:checked:disabled + label,
div.cookieControl__ModalContent input:checked + label {
  @apply bg-gray-800 dark:bg-white;
}
div.cookieControl__ModalContent input:checked:disabled + label:before,
div.cookieControl__ModalContent label:before {
  @apply dark:bg-gray-800 bg-white;
}

/* Scroll-bar */
::-webkit-scrollbar {
  @apply w-3;
}
::-webkit-scrollbar-track {
  @apply bg-gray-300 dark:bg-gray-700;
}
::-webkit-scrollbar-thumb {
  @apply rounded-sm bg-gray-800 dark:bg-white hover:opacity-60 transition-opacity;
}

/* Responsiveness */
@media (max-width: 768px) {
  .cookieControl__ModalContent {
    padding: 0;
    overflow-y: auto;
  }
  .cookieControl__BarContainer,
  .cookieControl__ModalContent > div {
    padding: 2rem;
  }
}
@media (max-width: 360px) {
  body {
    font-size: 14px;
  }
}
</style>

<template>
  <div id="app" class="px-8">
    <nav-menu />
    <nav-bar class="my-16" />
    <nuxt class="fadeIn mb-16" />
    <nuxt-link
      v-if="$route.name !== 'help'"
      style="z-index: 99"
      class="fixed right-20 bottom-8 px-6 py-2 rounded-full bg-gray-800 dark:bg-white text-white dark:text-gray-800 font-bold hover:opacity-60 transition-opacity"
      to="/help/"
    >
      <txt>I need help</txt>
    </nuxt-link>
    <footer-section />
  </div>
</template>

<script>
import Txt from "../components/elements/Txt";
import NavMenu from "../components/extensive/NavMenu";
import NavBar from "../components/extensive/NavBar";
import FooterSection from "../components/extensive/FooterSection";

export default {
  name: "App",
  components: {
    Txt,
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
