<style>
  @import '../node_modules/animate.css';

  /* GLOBAL */
  html {
    scroll-behavior: smooth
  }
  #app {
    font-family: Arial, Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: left;
    color: #282828
  }
  body {
    margin: 0;
    font-size: 16px;
    padding: 0 8%;
    background-color: #F9F9F9
  }
  p {
    line-height: 1.4;
    margin: 1rem 0
  }
  li {
    margin: 1rem 0
  }
  .vm--modal {
    padding: 1rem 1.6rem
  }

  /* IOS Disable Corners */
  textarea, input.text, input[type='text'], input[type='button'], input[type='button']:hover, input[type='button']:active, input[type='submit'], .input-checkbox, #mce-EMAIL, input:active, input:focus {
    -webkit-appearance: none;
    outline-width: 0
  }

  /* GLOBAL: TO TOP */
  .to-top {
    z-index: 99;
    opacity: 0;
    position: fixed;
    right: 20px;
    bottom: 5rem;
    background-color: #28282815;
    border-radius: 5px;
    width: fit-content;
    padding: .6rem;
    cursor: pointer;
    transition: all .2s cubic-bezier(.165, .84, .44, 1);
    animation: showIn 1.2s cubic-bezier(.165, .84, .44, 1) forwards
  }
  .to-top:active {
    transform: scale(.9)
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
  .grey {
    color: #28282890
  }
  .tapered {
    width: 70%
  }
  .no-margin {
    margin: 0
  }
  .back_text {
    color: #282828;
    transition: .6s all cubic-bezier(.165, .84, .44, 1)
  }
  .back_text:hover {
    opacity: .6
  }

  /* GLOBAL: BUTTONS */
  button, #mc-embedded-subscribe, .typeform-share.button {
    height: fit-content;
    width: fit-content;
    user-select: none;
    cursor: pointer;
    border-radius: 3px;
    opacity: 1;
    text-transform: capitalize;
    outline-width: 0;
    border: none;
    padding: .6rem 1.6rem;
    font-size: .8rem;
    letter-spacing: .1rem;
    color: white;
    background-color: #282828;
    transition: opacity .2s, transform .1s cubic-bezier(.165, .84, .44, 1)
  }
  button:hover, #mc-embedded-subscribe:hover, .typeform-share.button:hover {
    opacity: .6
  }
  button:active, #mc-embedded-subscribe:active, .typeform-share.button:active {
    transform: scale(.96)
  }
  button:focus, #mc-embedded-subscribe:focus, .typeform-share.button:focus {
    box-shadow: 0 0 0 4px rgba(76, 91, 106, .5)
  }
  button:disabled, button[disabled] {
    opacity: .6;
    cursor: default
  }

  /* GLOBAL: INPUTS */
  input {
    background-color: transparent
  }
  select {
    cursor: pointer;
    background-color: transparent;
    border: none;
    border-radius: 3px;
    padding: .2rem .6rem;
    width: fit-content;
    font-size: 1rem;
    letter-spacing: .1rem;
    margin: 0
  }

  /* GLOBAL: NAV */
  #logo--home {
    width: 10rem;
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
    background-color: #FFFFFF99;
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

  /* GLOBAL: EMAIL */
  #mce-EMAIL {
    opacity: .6;
    padding: .4rem;
    font-size: 1rem;
    width: 40%;
    margin: 1rem 0;
    outline-width: 0;
    border: none;
    border-bottom: 1px solid #282828;
    border-radius: 0;
    transition: all .6s cubic-bezier(.165, .84, .44, 1)
  }
  #mce-EMAIL:hover, #mce-EMAIL:focus {
    width: 45%;
    opacity: 1
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
  .cookieControl__BarContainer {
    padding: 2rem 6rem
  }
  .cookieControl__BarContainer p, .cookieControl__BarContainer button {
    font-size: .8rem
  }
  .cookieControl__Bar p {
    margin-top: 0
  }
  .cookieControl__Bar.cookieControl__Bar--bottom-full div {
    margin: auto
  }
  iframe#jsd-widget {
    left: 0
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
  .modal--format p {
    margin: 0
  }
  .spacer--small {
    height: 6vh
  }
  .spacer {
    height: 10vh
  }
  .spacer--large {
    height: 20vh
  }

  /* Quill */
  div.ql-toolbar.ql-snow {
    border: none
  }
  .ql-header, .ql-bold, .ql-italic, .ql-underline, .ql-script, .ql-list, .ql-indent, .ql-link, .ql-clean {
    box-shadow: none
  }
  div.ql-container.ql-snow {
    border: none
  }
  div.ql-snow .ql-stroke {
    stroke: #282828
  }
  div.ql-editor {
    color: #282828;
    overflow-y: auto
  }
  div.ql-editor ul li:not(.ql-direction-rtl), div.ql-editor, div.ql-snow.ql-toolbar {
    padding: 0
  }
  .ql-snow.ql-toolbar button:hover, .ql-snow .ql-toolbar button:hover, .ql-snow.ql-toolbar button.ql-active, .ql-snow .ql-toolbar button.ql-active, .ql-snow.ql-toolbar .ql-picker-label:hover, .ql-snow .ql-toolbar .ql-picker-label:hover, .ql-snow.ql-toolbar .ql-picker-label.ql-active, .ql-snow .ql-toolbar .ql-picker-label.ql-active, .ql-snow.ql-toolbar .ql-picker-item:hover, .ql-snow .ql-toolbar .ql-picker-item:hover, .ql-snow.ql-toolbar .ql-picker-item.ql-selected, .ql-snow .ql-toolbar .ql-picker-item.ql-selected {
    color: #28282899
  }
  .ql-snow.ql-toolbar button:hover .ql-stroke, .ql-snow .ql-toolbar button:hover .ql-stroke, .ql-snow.ql-toolbar button.ql-active .ql-stroke, .ql-snow .ql-toolbar button.ql-active .ql-stroke, .ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke, .ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke, .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke, .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke, .ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke, .ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke, .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke, .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke, .ql-snow.ql-toolbar button:hover .ql-stroke-miter, .ql-snow .ql-toolbar button:hover .ql-stroke-miter, .ql-snow.ql-toolbar button.ql-active .ql-stroke-miter, .ql-snow .ql-toolbar button.ql-active .ql-stroke-miter, .ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke-miter, .ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke-miter, .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter, .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter, .ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke-miter, .ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke-miter, .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter, .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter {
    stroke: #28282899
  }
  .ql-snow.ql-toolbar button:hover .ql-fill, .ql-snow .ql-toolbar button:hover .ql-fill, .ql-snow.ql-toolbar button.ql-active .ql-fill, .ql-snow .ql-toolbar button.ql-active .ql-fill, .ql-snow.ql-toolbar .ql-picker-label:hover .ql-fill, .ql-snow .ql-toolbar .ql-picker-label:hover .ql-fill, .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-fill, .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-fill, .ql-snow.ql-toolbar .ql-picker-item:hover .ql-fill, .ql-snow .ql-toolbar .ql-picker-item:hover .ql-fill, .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-fill, .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-fill, .ql-snow.ql-toolbar button:hover .ql-stroke.ql-fill, .ql-snow .ql-toolbar button:hover .ql-stroke.ql-fill, .ql-snow.ql-toolbar button.ql-active .ql-stroke.ql-fill, .ql-snow .ql-toolbar button.ql-active .ql-stroke.ql-fill, .ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill, .ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill, .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill, .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill, .ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill, .ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill, .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill, .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill {
    fill: #28282899
  }

  /* Scroll-bar */
  ::-webkit-scrollbar {
    width: 10px;
    height: 10px
  }
  ::-webkit-scrollbar-track {
    background: transparent
  }
  ::-webkit-scrollbar-thumb {
    background: #00000020
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #00000030
  }

  /* Workout state */
  .show-workout {
    overflow-wrap: break-word;
    color: #282828;
    line-height: 1.42;
    overflow-y: auto;
    font-size: .8rem
  }
  .show-workout a {
    color: blue
  }
  .show-workout h2 {
    font-size: 1.5rem
  }
  .show-workout p {
    text-decoration: none;
    margin: 0;
    padding: 0
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
    #mce-EMAIL {
      width: 60%
    }
    #mce-EMAIL:hover, #mce-EMAIL:focus {
      width: 65%
    }
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
    #mce-EMAIL {
      width: 80%
    }
    #mce-EMAIL:hover {
      width: 80%
    }
    #mce-EMAIL:focus {
      width: 85%
    }
    div.ql-editor {
      width: 400px
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
    <script data-jsd-embedded data-key="200dadd3-915c-4769-ba8d-ec7792145827" data-base-url="https://jsd-widget.atlassian.com" src="https://jsd-widget.atlassian.com/assets/embed.js" />
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
          <nuxt-link class="text--large input--option" to="/blog/" @click.native="openNav = !openNav">
            Blog
          </nuxt-link>
          <nuxt-link class="text--large input--option" to="/help/" @click.native="openNav = !openNav">
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
              <nuxt-link v-scroll-to="{ el: '#nav--top', duratiob: 1200, easing: 'ease' }" class="input--option" to="/cookie-policy/">
                <b>Cookies Policy</b>.
              </nuxt-link>
            </p>
          </template>
        </CookieControl>
        <div class="social-bar">
          <a target="_blank" href="https://www.facebook.com/traininblocks"><inline-svg class="social-icon" :src="require('../assets/svg/socials/Facebook.svg')" /></a>
          <a target="_blank" href="https://www.instagram.com/traininblocks"><inline-svg class="social-icon" :src="require('../assets/svg/socials/Instagram.svg')" /></a>
          <a target="_blank" href="https://www.twitter.com/traininblocks"><inline-svg class="social-icon" :src="require('../assets/svg/socials/Twitter.svg')" /></a>
          <a target="_blank" href="https://www.linkedin.com/company/train-in-blocks"><inline-svg class="social-icon" :src="require('../assets/svg/socials/LinkedIn.svg')" /></a>
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
        <label for="mce-EMAIL">Sign up to our newsletter</label><br>
        <input
          id="mce-EMAIL"
          type="email"
          value=""
          name="EMAIL"
          class="email"
          placeholder="Email"
          required
        >
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
        21 Sinodun Road, Wallingford, OX10 8AD, United Kingdom<br>
        Registered in England & Wales
      </p>
    </footer>
    <a
      v-if="scrollpx > 800"
      v-scroll-to="{
        el: '#nav--top',
        duration: 600,
        easing: 'ease'
      }"
      class="to-top"
    >
      <inline-svg id="to-top__icon" :src="require('../assets/svg/Top.svg')" />
    </a>
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
      descSub: 'Newsletter',
      scrollpx: 0,
      metaHelper: {
        title: 'Train In Blocks',
        description: 'Over-delivering doesn\'t have to cost you. Impress your clients and help them reach their health and fitness goals.',
        image: 'https://traininblocks.com/android-chrome-512x512.png',
        url: 'https://traininblocks.com'
      }
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll () {
      this.scrollpx = window.scrollY
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
