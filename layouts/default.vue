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
  @apply m-0 text-base text-slate dark:text-white bg-paper dark:bg-slate scroll-smooth;
}
svg path.transparent {
  @apply stroke-slate dark:stroke-white;
}
svg path:not(.transparent, .no-fill) {
  @apply fill-slate dark:fill-white;
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
  @apply text-slate dark:text-white;
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
.nuxt-content p,
.nuxt-content ol,
.nuxt-content ul {
  @apply mb-4;
}
.nuxt-content a {
  @apply underline text-blue-700 dark:text-white;
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
blockquote {
  @apply px-2 pt-12 pb-4 md:py-8 md:px-12 rounded-lg border-3 border-slate dark:border-white rounded-lg text-slate dark:text-white bg-white dark:bg-slate sm:text-center relative leading-normal;
}
blockquote::after {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' style='fill: rgb(40 40 40)'%3E%3C!----%3E%3Cpath d='M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z'/%3E%3C/svg%3E");
  @apply absolute w-8 h-8 left-2 top-2 content-[""];
}
.nuxt-content blockquote {
  @apply my-6 text-xl md:text-2xl font-bold shadow-lg;
}
.nuxt-content blockquote p {
  @apply mb-0;
}
blockquote cite {
  @apply hidden;
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
  @apply bg-slate dark:bg-white;
}
div.cookieControl__Bar p {
  @apply text-white dark:text-slate;
}

/* Cookie button */
.cookieControl__ControlButton {
  @apply bottom-8 bg-slate dark:bg-white hover:opacity-60 focus:opacity-60 transition-opacity;
}
.cookieControl__ControlButton svg > path:not(.transparent) {
  @apply fill-white dark:fill-slate;
}
.cookieControl__BarButtons > button {
  @apply dark:text-white text-slate dark:bg-slate bg-white;
}

/* Cookie modal */
.cookieControl__ModalContent {
  @apply bg-white dark:bg-slate;
}
div.cookieControl__ModalContent *:not(button) {
  @apply text-slate dark:text-white;
}
div.cookieControl__ModalContent button {
  @apply text-white dark:text-slate bg-slate dark:bg-white;
}
div.cookieControl__ModalContent input:checked:disabled + label,
div.cookieControl__ModalContent input:checked + label {
  @apply bg-slate dark:bg-white;
}
div.cookieControl__ModalContent input:checked:disabled + label:before,
div.cookieControl__ModalContent label:before {
  @apply dark:bg-slate bg-white;
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

/* Animation */
.fadeHidden {
  opacity: 0;
}
.showElement {
  opacity: 1;
  transform: translate(0, 0);
  transition: all 0.75s ease-out;
  transition-delay: var(--delay);
}
</style>

<template>
  <div id="app" class="px-4 md:px-8">
    <nav-menu :openNav="openNav" />
    <nav-bar />
    <div @click="openNav = false">
      <nuxt-link
        v-if="$route.name !== 'help'"
        style="z-index: 99"
        class="fixed right-20 bottom-8 px-6 py-2 rounded-full bg-slate dark:bg-white text-white dark:text-slate font-bold hover:opacity-60 focus:opacity-60 transition-opacity"
        to="/help/"
      >
        <txt>I need help</txt>
      </nuxt-link>
    </div>
    <CookieControl>
      <template #bar>
        <txt type="tiny">
          We use cookies and other tracking technologies to improve your
          browsing experience on our site, analyze site traffic, and understand
          where our audience is coming from. To find out more, please read our
          <nuxt-link to="/legal/cookies-policy/">
            <txt type="tiny" bold>Cookies Policy</txt>.
          </nuxt-link>
        </txt>
      </template>
    </CookieControl>
    <nuxt class="fadeIn mb-16" />
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
        <div
          class="relative top-20 mx-auto p-8 rounded-md bg-paper dark:bg-slate"
        >
          <a
            class="absolute top-8 right-8 cursor-pointer hover:opacity-60 transition-all rounded-none"
            href="#"
            @click.prevent="exitIntent = false"
            v-html="require('../assets/svg/close.svg?include')"
          />
          <div class="text-center">
            <txt type="title" class="my-4"> Let's stay connected! </txt>
            <txt type="large-body" class="my-8">
              Learn everything that personal trainers need to know to profit and
              grow!
            </txt>
            <mailchimp-sign-up tag="Intent" />
          </div>
        </div>
      </div>
    </transition>

    <!-- Business Closed Modal -->
    <transition name="modal">
      <div
        v-if="businessCloseModal"
        id="exit-modal"
        style="z-index: 71"
        class="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"
        @click="exit"
      >
        <div
          class="relative top-20 mx-auto p-8 rounded-md bg-paper dark:bg-slate"
        >
          <a
            class="absolute top-8 right-8 cursor-pointer hover:opacity-60 transition-all rounded-none"
            href="#"
            @click.prevent="businessCloseModal = false"
            v-html="require('../assets/svg/close.svg?include')"
          />
          <div class="text-center">
            <txt type="title" class="my-4"> Thanks for being on this journey with us! </txt>
            <txt type="large-body" class="my-8">
              We've taken the unfortunate decision to close the business down, so you won't be able to sign up for a new account anymore.
            </txt>
            <txt type="large-body" class="my-8">
              Please feel free to use this site as a resource, browse our blog posts, and have a look at what we achieved.
            </txt>
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
      exitIntent: false,
      darkmodeOn: false,
      businessCloseModal: true,
    };
  },
  head() {
    return {
      title: "Affordable Personal Training Software",
      meta: [
        {
          hid: "og:title",
          name: "og:title",
          content: "Affordable Personal Training Software",
        },
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: "Affordable Personal Training Software",
        },
      ],
    };
  },
  watch: {
    darkmodeOn(state) {
      if (state) localStorage.setItem("darkmode", true);
      else localStorage.removeItem("darkmode");
      this.darkmode();
    },
  },
  beforeMount() {
    const darkModeMediaQuery = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );
    darkModeMediaQuery.addEventListener("change", (e) => {
      this.darkmodeOn = e.matches;
    });
    if (localStorage.getItem("darkmode") || darkModeMediaQuery.matches)
      this.darkmodeOn = true;
    this.darkmode();
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
        setTimeout(() => {
          // add all the elements inside modal which you want to make focusable
          const focusableElements =
            'button:not(:disabled), [href], input:not(:disabled), select, textarea, [tabindex]:not([tabindex="-1"])';
          const popup = this.$el.querySelector("#exit-modal"); // select the navigation

          const firstFocusableElement =
            popup.querySelectorAll(focusableElements)[0]; // get first element to be focused inside modal
          const focusableContent = popup.querySelectorAll(focusableElements);
          const lastFocusableElement =
            focusableContent[focusableContent.length - 1]; // get last element to be focused inside modal

          document.addEventListener("keydown", function (e) {
            const isTabPressed = e.key === "Tab" || e.keyCode === 9;

            if (!isTabPressed) {
              return;
            }

            if (e.shiftKey) {
              // if shift key pressed for shift + tab combination
              if (document.activeElement === firstFocusableElement) {
                lastFocusableElement.focus(); // add focus for the last focusable element
                e.preventDefault();
              }
            } else if (document.activeElement === lastFocusableElement) {
              // if focused has reached to last focusable element then focus first focusable element after pressing tab
              firstFocusableElement.focus(); // add focus for the first focusable element
              e.preventDefault();
            }
          });

          lastFocusableElement.focus();
        }, 200);

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
    if (
      !this.getCookie("exitIntentShown") &&
      !window.localStorage.getItem("existing-lead")
    ) {
      window.addEventListener("mousemove", startExitCountdown);
      window.addEventListener("scroll", startExitCountdown);
      window.addEventListener("keydown", startExitCountdown);
      window.addEventListener("click", startExitCountdown);
      window.addEventListener("touchstart", startExitCountdown);
    }
    // const self = this;
    function startExitCountdown() {
      // Set timeout so exit intent isn't show on page load - wait 10 seconds
      setTimeout(() => {
        // Add event listener for when user leaves page
        document.addEventListener("mouseout", mouseEvent);
        // Add event listener for when user presses a key - which we listen to the escape key
        // document.addEventListener("keydown", self.exit);
      }, 10000);
      window.removeEventListener("mousemove", startExitCountdown);
      window.removeEventListener("scroll", startExitCountdown);
      window.removeEventListener("keydown", startExitCountdown);
      window.removeEventListener("click", startExitCountdown);
      window.removeEventListener("touchstart", startExitCountdown);
    }
  },
  methods: {
    darkmode() {
      if (this.darkmodeOn) {
        document.documentElement.setAttribute("class", "dark");
        this.theme = "Dark";
      } else {
        document.documentElement.removeAttribute("class");
        this.theme = "Light";
      }
    },
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
