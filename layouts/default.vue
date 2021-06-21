<style>
/* GLOBAL */
:root {
  --low_shadow: 0 0 20px 10px #28282808;
  --border_rad_large: 10px;
  --back: #F9F9F9;
  --fore: white;
  --base_dark: #282828;
  --base_light: #585858;
  --base_accent: white;
  --overlay: rgba(255, 255, 255, .95)
}
body {
  font-family: Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--base_dark);
  font-size: 16px;
  margin: 0;
  padding: 0 10%;
  background-color: var(--back);
  scroll-behavior: smooth
}
svg path:not(.transparent) {
  fill: var(--base_dark)
}
img, video, iframe {
  user-select: none;
  outline: none;
  border-radius: var(--border_rad_large);
  box-shadow: var(--low_shadow);
  max-width: 100%
}
h1, h2 {
  font-size: 2rem;
  color: var(--base_dark)
}
h3 {
  font-size: 1.4rem;
  color: var(--base_dark)
}
p {
  line-height: 1.4;
  margin: 1rem 0
}
li {
  margin: 1rem 0
}
a, b {
  color: var(--base_dark)
}

/* Animations */
.fadeIn {
  animation: .6s fadeIn
}

@keyframes fadeIn {
  from {
    opacity: 0
  }
  to {
    opacity: 1
  }
}

/* MCE */
#mc-embedded-subscribe-form {
  margin-bottom: 2rem
}
#mc-embedded-subscribe-form label {
  color: var(--base_dark);
  font-weight: bold
}

/* Inputs */
input:not([type=checkbox]):not([type=radio]):not([type=color]):not([type=button]):not([type=submit]),
select,
textarea,
#mce-EMAIL {
  outline: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  color: var(--base_dark);
  width: 100%;
  padding: .6rem;
  resize: none;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1rem;
  border: 3px solid var(--base_light);
  border-radius: 8px;
  background-color: transparent;
  box-shadow: none;
  transition: all .6s cubic-bezier(.165, .84, .44, 1)
}
input:not([type=checkbox]):not([type=radio]):not([type=color]):not([type=button]):not([type=submit]):not(:focus):hover,
select:hover,
textarea:hover,
#mce-EMAIL:hover {
  opacity: .6
}
input:not([type=checkbox]):not([type=radio]):not([type=color]):not([type=button]):not([type=submit]):disabled {
  cursor: not-allowed;
  opacity: .6
}
input:not([type=checkbox]):not([type=radio]):not([type=color]):not([type=button]):not([type=submit]):focus,
textarea:focus,
#mce-EMAIL:focus {
  border: 1px solid var(--base_dark)
}
input:not([type=checkbox]):not([type=radio]):not([type=color]):not([type=button]):not([type=submit]).small_border_radius,
select.small_border_radius,
textarea.small_border_radius,
#mce-EMAIL.small_border_radius {
  border-radius: 5px
}
input:not([type=checkbox]):not([type=radio]):not([type=color]):not([type=button]):not([type=submit]).width_300,
select.width_300,
#mce-EMAIL.width_300 {
  width: 300px
}
input[type=color] {
  margin: 0 .4rem;
  background-color: transparent;
  padding: 0 .14rem;
  outline-width: 0;
  cursor: pointer;
  transition: all .4s cubic-bezier(.165, .84, .44, 1)
}
::placeholder {
  color: var(--base_light);
  opacity: 1; /* Firefox */
}

/* GLOBAL: CONTENT */
.text--xlarge {
  font-size: 4rem
}
.text--large {
  font-size: 2.6rem
}
.text--small {
  font-size: 1.6rem
}
.center_text {
  text-align: center
}
.accent_text {
  color: var(--base_light)
}
.no_margin {
  margin: 0
}
.back_text {
  color: var(--base_dark);
  transition: .6s all cubic-bezier(.165, .84, .44, 1)
}
.back_text:hover {
  opacity: .6
}

/* Box buttons */
button:not(.cookieControl__ControlButton),
#mc-embedded-subscribe {
  height: auto;
  width: auto;
  max-height: 35px;
  user-select: none;
  cursor: pointer;
  border-radius: 5px;
  opacity: 1;
  text-transform: capitalize;
  outline-width: 0;
  border: none;
  /* stylelint-disable-next-line */
  padding: .6rem 1.6rem !important;
  font-size: .8rem;
  font-weight: bold;
  /* stylelint-disable-next-line */
  color: var(--base_accent) !important;
  /* stylelint-disable-next-line */
  background-color: var(--base_dark) !important;
  transition: color .6s, background-color .6s, opacity .2s, transform .1s cubic-bezier(.165, .84, .44, 1)
}
button:hover:not(:disabled):not(.cookieControl__ControlButton),
#mc-embedded-subscribe:hover {
  opacity: .6
}
button:active:not(:disabled),
#mc-embedded-subscribe:active {
  transform: scale(.96)
}
button:focus,
#mc-embedded-subscribe:focus {
  box-shadow: var(--low_shadow)
}
button:disabled,
button[disabled] {
  cursor: not-allowed;
  opacity: .6
}
button.cancel:hover {
  /* stylelint-disable-next-line */
  background-color: darkred !important
}

/* Floating help */
.floating_help {
  position: fixed;
  right: 5rem;
  bottom: 2rem;
  padding: .6rem 1rem;
  border-radius: 50px;
  background-color: var(--base_dark);
  color: var(--fore);
  font-weight: bold;
  text-decoration: none;
  z-index: 99;
  transition: .6s all cubic-bezier(.165, .84, .44, 1)
}
.floating_help:hover {
  opacity: .6
}

/* GLOBAL: NAV */
#logo--home {
  width: 8rem;
  height: auto
}
.container--nav {
  display: flex;
  margin: 0 0 6rem 0;
  justify-content: space-between;
  height: 8vh;
  animation-delay: 100ms
}
.container--nav > div {
  display: flex
}
.container--nav > div > * {
  margin: auto
}
.container--nav > div > *:last-child {
  margin-left: 1.6rem
}
.wrapper--nav-items {
  display: grid;
  text-align: right;
  position: fixed;
  top: 6vh;
  right: 8%;
  width: 100%;
  z-index: 2
}
.wrapper--nav-items > svg {
  margin-left: auto
}
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: var(--overlay);
  z-index: 1
}

/* Nav Hover Animation */
.nav-button {
  cursor: pointer;
  transition: opacity .6s, transform .1s cubic-bezier(.165, .84, .44, 1)
}
.nav-button:hover {
  opacity: .6
}
.nav-button:active {
  transform: scale(.9)
}
.input--option {
  position: relative;
  margin: 1rem 0;
  text-decoration: none;
  color: var(--base_dark);
  transition: 300ms
}
.input--option:hover {
  opacity: .4
}
nav a.nuxt-link-exact-active {
  font-weight: bold
}

/* GLOBAL: FOOTER */
.social-icon {
  width: 25px;
  height: 25px;
  margin: 0 1rem 2rem 0;
  cursor: pointer;
  opacity: 1;
  transition: opacity .4s, transform .1s cubic-bezier(.165, .84, .44, 1)
}
.social-icon:hover {
  opacity: .6
}
.social-icon:active {
  transform: scale(.9)
}

/* Cookie bar */
.cookieControl__BarContainer {
  display: grid;
  grid-gap: 1rem;
  margin: auto;
  padding: 2rem 6rem
}
.cookieControl__BarContainer :is(p, button) {
  font-size: .8rem
}
div.cookieControl__Bar {
  background-color: var(--base_dark)
}
.cookieControl__Bar p {
  color: var(--fore);
  margin-top: 0
}
.cookieControl__Bar a.input--option b {
  color: var(--fore)
}
.cookieControl__BarButtons > button {
  /* stylelint-disable-next-line */
  background-color: var(--fore) !important;
  /* stylelint-disable-next-line */
  color: var(--base_dark) !important
}

/* Cookie button */
.cookieControl__ControlButton {
  bottom: 2rem;
  background-color: var(--base_dark);
  /* stylelint-disable-next-line */
  transition: .6s all cubic-bezier(.165, .84, .44, 1) !important
}
.cookieControl__ControlButton:hover {
  opacity: .6
}
.cookieControl__ControlButton svg > path:not(.transparent) {
  fill: var(--fore)
}

/* Cookie modal */
.cookieControl__ModalContent {
  background-color: var(--fore)
}
div.cookieControl__ModalContent *:not(button) {
  color: var(--base_dark)
}

/* Footer */
footer {
  padding: 2rem 0;
  border-top: 3px solid var(--base_dark)
}
footer p {
  font-size: .8rem
}
footer a.input--option {
  font-size: .8rem;
  margin: 0 1rem 0 0
}

/* Misc. */
.spacer--small {
  height: 6vh
}
.spacer {
  height: 10vh
}
.spacer--large {
  height: 20vh
}

/* Scroll-bar */
::-webkit-scrollbar {
  width: 10px;
  height: 10px
}
::-webkit-scrollbar-track {
  background: #181E2520
}
::-webkit-scrollbar-thumb {
  border-radius: 3px;
  background: var(--base_dark)
}
::-webkit-scrollbar-thumb:hover {
  background: var(--base_light)
}

/* Responsiveness */
@media (max-width: 992px) {
  button:hover {
    background-color: transparent;
    color: var(--base_dark)
  }
  .input--option.nuxt-link-exact-active:before {
    transform: scaleX(1);
    opacity: 1
  }
}
@media (max-width: 768px) {
  .cookieControl__BarContainer {
    padding: 2rem
  }

  /* GLOBAL: CONTENT */
  .text--xlarge {
    font-size: 2.4rem
  }
  .text--large {
    width: 100%;
    font-size: 2rem
  }
  .text--small {
    font-size: 1.4rem
  }

  /* Misc. */
  .input--option:hover {
    opacity: 1
  }
  .social-icon:hover {
    opacity: 1
  }
  button:disabled:hover {
    color: rgba(16, 16, 16, .3)
  }
}
@media (max-width: 576px) {
  /* Containers */
  .container--nav > div > button {
    display: none
  }
  .container--features {
    grid-gap: 2rem
  }

  /* Misc. */
  div.ql-editor {
    width: 300px
  }
  button {
    font-size: .8rem
  }
}
@media (max-width: 360px) {
  body {
    font-size: 14px
  }
  .main-title {
    font-size: 1.5rem
  }
}
</style>

<template>
  <div id="app">
    <div v-if="openNav" class="overlay" />
    <nav>
      <transition enter-active-class="fadeIn">
        <div v-show="openNav" class="wrapper--nav-items">
          <inline-svg class="nav-button" :src="require('../assets/svg/close.svg')" @click="openNav = false" />
          <a class="text--large input--option log-in" href="https://app.traininblocks.com" @click="openNav = false">
            Log In
          </a>
          <nuxt-link class="text--large input--option" to="/" @click.native="openNav = false">
            Home
          </nuxt-link>
          <a
            href="javascript:void(0)"
            class="text--large input--option"
            @click="openNav = false, scroll()"
          >
            Pricing
          </a>
          <nuxt-link class="text--large input--option" to="/blog/" @click.native="openNav = false">
            Blog
          </nuxt-link>
          <!-- News
          <nuxt-link class="text--large input--option" to="/dev/" @click.native="openNav = false">
            News
          </nuxt-link>
          -->
          <nuxt-link class="text--large input--option" to="/help/" @click.native="openNav = false">
            Help
          </nuxt-link>
        </div>
      </transition>
    </nav>
    <div id="nav--top" class="spacer--small" />
    <div class="container--nav">
      <nuxt-link to="/">
        <inline-svg id="logo--home" class="nav-button" :src="require('../assets/svg/LogoV12.svg')" />
      </nuxt-link>
      <div>
        <darkmode-toggle />
        <inline-svg
          class="nav-button"
          :src="require('../assets/svg/hamburger.svg')"
          @click="openNav = true"
        />
      </div>
    </div>
    <div>
      <nuxt />
    </div>
    <div class="spacer" />
    <nuxt-link
      v-if="$route.name !== 'help'"
      class="floating_help"
      to="/help/"
    >
      I need help
    </nuxt-link>
    <footer>
      <CookieControl>
        <template #bar>
          <p>
            We use cookies and other tracking technologies to improve your browsing experience on our site, analyze site traffic, and understand where our audience is coming from. To find out more, please read our
            <nuxt-link class="input--option" to="/legal/cookies-policy/">
              <b>Cookies Policy</b>.
            </nuxt-link>
          </p>
        </template>
      </CookieControl>
      <div class="nav--footer">
        <div class="social-bar">
          <a
            target="_blank"
            href="https://www.facebook.com/traininblocks"
          >
            <inline-svg class="social-icon" :src="require('../assets/svg/socials/Facebook.svg')" />
          </a>
          <a
            target="_blank"
            href="https://www.instagram.com/traininblocks"
          >
            <inline-svg class="social-icon" :src="require('../assets/svg/socials/Instagram.svg')" />
          </a>
        </div>
      </div>
      <form
        id="mc-embedded-subscribe-form"
        action="https://traininblocks.us8.list-manage.com/subscribe/post?u=a2c4d1f0522fa78cbfc518fc0&amp;id=73101450d0"
        method="post"
        name="mc-embedded-subscribe-form"
        class="validate"
        target="_blank"
        novalidate
      >
        <label for="mce-EMAIL">
          Sign up to our newsletter
        </label><br><br>
        <input
          id="mce-EMAIL"
          type="email"
          value=""
          name="EMAIL"
          class="email small_border_radius width_300"
          placeholder="Email"
          required
        ><br><br>
        <div style="position: absolute; left: -5000px" aria-hidden="true">
          <input type="text" name="b_a2c4d1f0522fa78cbfc518fc0_73101450d0" tabindex="-1" value="">
        </div>
        <div class="clear">
          <input id="mc-embedded-subscribe" type="submit" value="Subscribe" name="subscribe" class="button">
        </div>
      </form><br>
      <div>
        <nuxt-link class="input--option" to="/legal/privacy-and-data-policy/">
          Privacy and Data Policy
        </nuxt-link>
        <nuxt-link class="input--option" to="/legal/cookies-policy/">
          Cookies Policy
        </nuxt-link>
        <nuxt-link class="input--option" to="/legal/terms-of-use/">
          Terms of Use
        </nuxt-link>
        <a class="input--option" href="https://status.traininblocks.com">
          Status
        </a>
      </div>
      <p>
        <b>Train In Blocks Ltd</b><br>
        12515717<br>
        Wallingford, OX10 8AD, United Kingdom<br>
        Registered in England & Wales
      </p>
    </footer>
  </div>
</template>

<script>
import InlineSvg from 'vue-inline-svg'
import DarkmodeToggle from '../components/DarkmodeToggle.vue'

export default {
  name: 'App',
  components: {
    InlineSvg,
    DarkmodeToggle
  },
  data () {
    return {
      theme: 'Light',
      openNav: false,
      metaHelper: {
        title: 'Train In Blocks',
        description: 'Over-delivering doesn\'t have to cost you. Impress your clients and help them reach their health and fitness goals.',
        image: 'https://traininblocks.com/android-chrome-512x512.png',
        url: 'https://traininblocks.com'
      }
    }
  },
  head () {
    return {
      title: this.metaHelper.title,
      meta: [
        { hid: 'description', name: 'description', content: this.metaHelper.description },
        { hid: 'og:title', name: 'og:title', content: this.metaHelper.title },
        { hid: 'og:description', name: 'og:description', content: this.metaHelper.description },
        { hid: 'og:image', name: 'og:image', content: this.metaHelper.img },
        { hid: 'twitter:title', name: 'twitter:title', content: this.metaHelper.title },
        { hid: 'twitter:description', name: 'twitter:description', content: this.metaHelper.description },
        { hid: 'twitter:img', name: 'twitter:img', content: this.metaHelper.image }
      ],
      link: [
        { hid: 'canonical', rel: 'canonical', href: this.metaHelper.url }
      ]
    }
  },
  methods: {
    scroll () {
      document.getElementById('pricing').scrollIntoView({ behavior: 'smooth' })
    }
  }
}
</script>
