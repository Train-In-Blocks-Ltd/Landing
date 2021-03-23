<style>
  @import '../node_modules/animate.css';

  /* GLOBAL */
  :root {
    --low_shadow: 0 0 20px 10px #181E2510;
    --border_rad_large: 10px;
    --back: #F9F9F9;
    --fore: white;
    --base_dark: #181E25;
    --base_light: #63676C;
    --base_accent: white
  }
  body {
    font-family: Arial, Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: var(--base_light);
    font-size: 16px;
    margin: 0;
    padding: 0 8%;
    background-color: var(--back);
    scroll-behavior: smooth
  }
  svg path {
    fill: var(--base_dark)
  }
  img, video, iframe {
    user-select: none;
    outline: none;
    border-radius: var(--border_rad_large);
    box-shadow: var(--low_shadow);
    max-width: 100%
  }
  h1 {
    font-size: 2rem;
    color: var(--base_dark)
  }
  h2 {
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

  /* MCE */
  #mc-embedded-subscribe-form label {
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
    width: 100%;
    padding: .6rem;
    resize: none;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1rem;
    border: 1px solid #28282840;
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
    border: 1px solid #282828
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
    color: #28282899;
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
  .accent_text {
    color: var(--base_light)
  }
  .no_margin {
    margin: 0
  }
  .back_text {
    color: #282828;
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
    box-shadow: 0 0 0 4px rgba(76, 91, 106, .5)
  }
  button:disabled,
  button[disabled] {
    cursor: not-allowed;
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
  .wrapper--nav-items {
    display: grid;
    text-align: right;
    position: fixed;
    top: 6vh;
    right: 8%;
    width: 100%;
    z-index: 2
  }
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(255, 255, 255, .95);
    z-index: 1
  }

  /* Nav Hover Animation */
  .nav-button {
    cursor: pointer;
    transition: opacity .6s, transform .1s cubic-bezier(.165, .84, .44, 1);
    margin-left: auto;
    margin-bottom: 2rem
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
    color: #282828;
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

  /* GLOBAL: FOOTER */
  .cookieControl__ControlButton:hover svg path {
    fill: white
  }
  .cookieControl__BarContainer {
    display: grid;
    grid-gap: 1rem;
    margin: auto;
    padding: 2rem 6rem
  }
  .cookieControl__BarContainer p, .cookieControl__BarContainer button {
    font-size: .8rem
  }
  .cookieControl__Bar p {
    margin-top: 0
  }
  footer {
    padding: 2rem 0;
    border-top: 1px solid #28282820
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

  /* Animimations */
  @keyframes showIn {
    to {
      opacity: 1
    }
  }

  /* Responsiveness */
  @media (min-width: 1440px) {
    .paper--title {
      font-size: 3.5rem
    }
  }
  @media (max-width: 992px) {
    button:hover {
      background-color: transparent;
      color: #282828
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
    .text--large {
      width: 100%;
      font-size: 2rem
    }
    .text--small {
      font-size: 1.4rem
    }

    /* Misc. */
    .paper--title {
      font-size: 3rem
    }
    footer a.input--option {
      display: grid;
      margin: 1rem 0
    }
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
    .container--features {
      grid-gap: 2rem
    }

    /* Misc. */
    #logo--home {
      width: 8rem
    }
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
      <transition enter-active-class="animated fadeIn faster">
        <div v-show="openNav" class="wrapper--nav-items">
          <inline-svg class="nav-button" :src="require('../assets/svg/close.svg')" @click="openNav = false" />
          <a class="text--large input--option log-in" href="https://app.traininblocks.com" @click="openNav = false">
            Log In
          </a>
          <nuxt-link class="text--large input--option" to="/" @click.native="openNav = false">
            Welcome
          </nuxt-link>
          <nuxt-link class="text--large input--option" to="/blog/" @click.native="openNav = false">
            Blog
          </nuxt-link>
          <nuxt-link class="text--large input--option" to="/dev/" @click.native="openNav = false">
            News
          </nuxt-link>
          <a
            href="javascript:void(0)"
            class="text--large input--option"
            @click="openNav = false, scroll()"
          >
            Subscribe
          </a>
          <nuxt-link class="text--large input--option" to="/help/" @click.native="openNav = false">
            Help
          </nuxt-link>
        </div>
      </transition>
    </nav>
    <div id="nav--top" class="spacer--small" />
    <div class="container--nav animated fadeIn">
      <nuxt-link to="/">
        <inline-svg id="logo--home" class="nav-button" :src="require('../assets/svg/LogoV12.svg')" />
      </nuxt-link>
      <transition enter-active-class="animated fadeIn faster delay-1s" leave-active-class="animated fadeOut faster">
        <inline-svg v-show="!openNav" class="nav-button" :src="require('../assets/svg/hamburger.svg')" @click="openNav = true" />
      </transition>
    </div>
    <div class="animated fadeIn">
      <transition enter-active-class="animated fadeIn delay-1s" leave-active-class="animated fadeOut">
        <nuxt />
      </transition>
    </div>
    <div class="spacer" />
    <footer>
      <div class="nav--footer">
        <CookieControl>
          <template v-slot:bar>
            <p>
              We use cookies and other tracking technologies to improve your browsing experience on our site, analyze site traffic, and understand where our audience is coming from. To find out more, please read our
              <nuxt-link class="input--option" to="/cookie-policy/">
                <b>Cookies Policy</b>.
              </nuxt-link>
            </p>
          </template>
        </CookieControl>
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
        class="validate animated fadeInLeft"
        target="_blank"
        novalidate
      >
        <label for="mce-EMAIL">Sign up to our newsletter</label><br><br>
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
        <nuxt-link class="input--option" to="/gdpr/">
          GDPR Statement
        </nuxt-link>
        <nuxt-link class="input--option" to="/privacy-policy/">
          Privacy Policy
        </nuxt-link>
        <nuxt-link class="input--option" to="/cookie-policy/">
          Cookie Policy
        </nuxt-link>
        <nuxt-link class="input--option" to="/terms-conditions/">
          Terms & Conditions
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

export default {
  name: 'App',
  components: {
    InlineSvg
  },
  data () {
    return {
      openNav: false,
      metaHelper: {
        title: 'Train In Blocks',
        description: 'Over-delivering doesn\'t have to cost you. Impress your clients and help them reach their health and fitness goals.',
        image: 'https://traininblocks.com/android-chrome-512x512.png',
        url: 'https://traininblocks.com'
      }
    }
  },
  methods: {
    scroll () {
      document.getElementById('mc-embedded-subscribe-form').scrollIntoView({ behavior: 'smooth' })
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
  }
}
</script>
