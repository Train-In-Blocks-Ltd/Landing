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
.nuxt-content img,
.nuxt-content video,
.nuxt-content iframe {
  @apply w-full md:w-1/2 sm:max-w-lg my-4;
}
.nuxt-content video,
.nuxt-content iframe {
  aspect-ratio: 16/9;
  height: auto;
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

#exit-modal > div {
  width: Min(900px, calc(100vw - 4rem));
}
.modal-enter-active,
.modal-leave-active {
  transition: all 0.4s;
}
.modal-enter,
.modal-leave-to {
  opacity: 0;
}
</style>

<template>
  <div id="app" class="px-8">
    <nav-menu />
    <nav-bar class="my-16" />
    <nuxt class="fadeIn mb-16" />
    <div @click="openNav = false">
      <nuxt-link
        v-if="$route.name !== 'help'"
        style="z-index: 99"
        class="fixed right-20 bottom-8 px-6 py-2 rounded-full bg-gray-800 dark:bg-white text-white dark:text-gray-800 font-bold hover:opacity-60 transition-opacity"
        to="/help/"
      >
        <txt>I need help</txt>
      </nuxt-link>
    </div>
    <footer-section />

    <!-- Pop up intent -->
    <transition name="modal">
      <div
        v-if="exitIntent"
        id="exit-modal"
        style="z-index: 71"
        class="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"
        @click="exit"
      >
        <div class="relative top-20 mx-auto p-8 rounded-md bg-white">
          <inline-svg
            :src="require('../assets/svg/close.svg')"
            class="absolute top-8 right-8 cursor-pointer hover:opacity-60 transition-all"
            @click="exitIntent = false"
          />
          <div class="text-center">
            <txt type="title" class="my-4"> Let's stay connected! </txt>
            <txt type="large-body" class="my-8">
              Learn everything that personal trainers need to know to profit and
              grow!
            </txt>
            <mailchimp-sign-up />
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import NavMenu from "../components/extensive/NavMenu";
import NavBar from "../components/extensive/NavBar";
import FooterSection from "../components/extensive/FooterSection";
import MailchimpSignUp from "../components/generic/MailchimpSignUp";
import Txt from "../components/elements/Txt";

export default {
  name: "App",
  components: {
    NavMenu,
    NavBar,
    FooterSection,
    MailchimpSignUp,
    Txt,
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
      exitIntent: false,
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
  mounted() {
    const mouseEvent = (e) => {
      // Check that we are exiting the window at the top and not from the sides or bottom of the screen
      const shouldShowExitIntent =
        !e.toElement && !e.relatedTarget && e.clientY < 10;

      if (shouldShowExitIntent) {
        // Remove the mouseout event listener so we don't get into a loop
        document.removeEventListener("mouseout", mouseEvent);
        // Show the popup
        this.exitIntent = true;

        // Set the cookie when the popup is shown to the user - so we don't show the popup again for 30 days
        this.setCookie("exitIntentShown", true, 30);

        // GA event
        this.$ga.event({
          eventCategory: "intake",
          eventAction: "exit-intent",
          eventLabel: "show",
          eventValue: 1,
        });
      }
    };
    // Wrap the setTimeout into an if statement
    if (!this.getCookie("exitIntentShown")) {
      // Set timeout so exit intent isn't show on page load - wait 10 seconds
      setTimeout(() => {
        // Add event listener for when user leaves page
        document.addEventListener("mouseout", mouseEvent);
        // Add event listener for when user presses a key - which we listen to the escape key
        document.addEventListener("keydown", this.exit);
      }, 10000);
    }
  },
  methods: {
    // Close the modal
    exit(e) {
      if (e.target.id === "exit-modal") this.exitIntent = false;
    },
    setCookie(name, value, days) {
      let expires = "";
      if (days) {
        const date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        expires = "; expires=" + date.toUTCString();
      }
      document.cookie = name + "=" + (value || "") + expires + ";";
    },
    getCookie(name) {
      const cookies = document.cookie.split(";");
      for (const cookie of cookies) {
        // eslint-disable-next-line
        if (cookie.indexOf(name + "=") > -1) {
          return cookie.split("=")[1];
        }
      }
      return null;
    },
  },
};
</script>
