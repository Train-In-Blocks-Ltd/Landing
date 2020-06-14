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
    padding: 0 8%;
    letter-spacing: .1rem;
    font-size: 16px;
    overflow-x: hidden
  }
  .main-title {
    font-size: 3rem;
    margin: 0 0 2rem 0
  }
  .sub-title {
    font-size: 2rem;
    margin: 0 0 1.5rem 0
  }
  p {
    line-height: 1.4;
    margin: 0
  }
  .vm--modal {
    padding: 1rem 1.6rem
  }

  /* IOS Disable Corners */
  textarea, input.text, input[type='text'], input[type='button'], input[type='button']:hover, input[type='button']:active, input[type='submit'], .input-checkbox, #mce-EMAIL, select {
    -webkit-appearance: none;
    outline-width: 0;
    border-radius: 0
  }

  /* GLOBAL: Email */
  #mc-embedded-subscribe-form {
    margin: 4rem 0
  }
  #mc-embedded-subscribe-form label {
    font-weight: bold;
    font-size: 2rem
  }
  #mce-EMAIL {
    opacity: .6;
    padding: .4rem;
    font-size: 1rem;
    width: 40%;
    margin: 1rem 0;
    outline-width: 0;
    border: none;
    border-bottom: 1px solid #282828;
    transition: all .6s cubic-bezier(.165, .84, .44, 1)
  }
  #mce-EMAIL:hover, #mce-EMAIL:focus {
    width: 45%;
    opacity: 1
  }
  #mc-embedded-subscribe {
    cursor: pointer;
    padding: .4rem 1rem;
    font-size: 1rem;
    font-weight: bold;
    background-color: transparent;
    border: 1px solid #282828;
    outline-width: 0;
    transition: all .2s cubic-bezier(.165, .84, .44, 1)
  }
  #mc-embedded-subscribe:hover {
    color: white;
    background-color: #282828
  }
  #mc-embedded-subscribe:active {
    transform: scale(.9)
  }

  /* GLOBAL: To Top */
  .to-top {
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

  /* GLOBAL: Inputs and Buttons */
  input, button {
    background-color: transparent
  }
  button {
    outline-width: 0;
    border: 0;
    border-radius: 3px;
    box-shadow: 0 0 20px 10px #28282815;
    font-size: 1rem;
    font-weight: bold;
    letter-spacing: .15rem;
    padding: .8rem 1rem;
    cursor: pointer;
    transition: all 400ms cubic-bezier(.165, .84, .44, 1)
  }
  button:not(:disabled):hover, #mc-embedded-subscribe:hover {
    background-color: #282828;
    color: white
  }
  button:not(:disabled):active, #mc-embedded-subscribe:active {
    transform: scale(.9)
  }
  select {
    background-color: transparent;
    border: 1px solid #282828;
    padding: .2rem .6rem;
    width: fit-content;
    font-weight: bold;
    font-size: 1rem;
    outline-width: 0;
    letter-spacing: .1rem;
    margin: 0
  }

  /* GLOBAL: Footer */
  footer {
    padding: 2rem 0;
    background-color: white;
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
    height: 5vh
  }
  .spacer {
    height: 10vh
  }
  #logo--home {
    width: 10rem;
    height: auto;
    margin: 5rem 0 0 0
  }
  .countdown--wrapper {
    display: grid;
    margin: 4rem 0;
    animation-delay: 600ms
  }
  .container--countdown {
    letter-spacing: .4rem;
    font-size: 1.5rem
  }
  .countdown--desc {
    margin: 2rem 0
  }

  /* GLOBAL: Nav */
  .container--nav {
    display: flex;
    margin: 0 0 6rem 0;
    justify-content: flex-end;
    height: 8vh;
    animation-delay: 100ms
  }
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

  /* Nav Hover Animation */
  .input--option {
    position: relative;
    margin: 0 0 0 2rem;
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

  /* Quill */
  div.ql-toolbar.ql-snow {
    border: none
  }
  div.ql-container.ql-snow {
    border: none
  }
  div.ql-snow .ql-stroke {
    stroke: #282828
  }
  div.ql-editor {
    max-height: 250px;
    height: 351px;
    color: #282828;
    overflow-y: auto
  }
  div.ql-editor ul li:not(.ql-direction-rtl) {
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

  /* References */
  .ref--icons8 {
    position: relative;
    font-weight: 700;
    color: #282828;
    text-decoration: none;
    transition: 300ms
  }
  .ref--icons8:hover {
    opacity: .7
  }
  .ref--icons8:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 1px;
    bottom: 0;
    left: 0;
    background-color: #282828;
    opacity: 0;
    transform: scaleX(0);
    transition: all 300ms cubic-bezier(.165, .84, .44, 1)
  }
  .ref--icons8:hover:before {
    transform: scaleX(1);
    opacity: .7
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
    body {
      padding: 0 6%
    }
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
    /* Nav */
    .container--nav {
      height: fit-content;
      margin-bottom: 3rem
    }
    #nav--main {
      display: grid;
      justify-items: right
    }
    .input--option {
      width: fit-content;
      margin: .4rem 0
    }

    /* Misc. */
    .paper--title {
      font-size: 3rem
    }
    .spacer {
      height: 5vh
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
    .container--countdown h2 {
      font-size: 1rem
    }
    .container--countdown p {
      font-size: .8rem;
      margin: .6rem 0
    }
    .container--features {
      grid-gap: 2rem
    }

    /* Misc. */
    .spacer {
      height: 5vh
    }
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

    /* Containers */
    .container--countdown p {
      font-size: .5rem;
      margin: .4rem 0
    }
  }
</style>

<template>
  <div id="app">
    <inline-svg id="logo--home" class="animated bounceInLeft" :src="require('../assets/svg/LogoV12.svg')" />
    <div class="countdown--wrapper animated fadeIn delay-1s">
      <div class="container--countdown">
        <h2 class="sub-title">
          01.08.20
        </h2>
        <Countdown end="August 1, 2020" />
        <p class="countdown--desc">
          <b>BETA RELEASE</b>
        </p>
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
      <label for="mce-EMAIL">Get Notified When We Launch!</label><br>
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
    </form>
    <div id="nav--top" class="spacer--small" />
    <div class="container--nav animated bounceInLeft">
      <nav id="nav--main">
        <nuxt-link v-scroll-to="{ el: '#nav--top', duratiob: 1200, easing: 'ease' }" class="input--option" to="/">
          Welcome
        </nuxt-link>
        <nuxt-link v-scroll-to="{ el: '#nav--top', duratiob: 1200, easing: 'ease' }" class="input--option" to="/features">
          Features
        </nuxt-link>
        <nuxt-link v-scroll-to="{ el: '#nav--top', duratiob: 1200, easing: 'ease' }" class="input--option" to="/pricing">
          Pricing
        </nuxt-link>
        <nuxt-link v-scroll-to="{ el: '#nav--top', duratiob: 1200, easing: 'ease' }" class="input--option" to="/roadmap">
          Roadmap
        </nuxt-link>
        <nuxt-link v-scroll-to="{ el: '#nav--top', duratiob: 1200, easing: 'ease' }" class="input--option" to="/about">
          About
        </nuxt-link>
        <nuxt-link class="input--option" to="/blog">
          Blog
        </nuxt-link>
        <br>
      </nav>
    </div>
    <div class="animated fadeInUp">
      <transition enter-active-class="animated fadeInRight delay-1s" leave-active-class="animated fadeOut">
        <nuxt />
      </transition>
    </div>
    <footer>
      <div class="nav--footer">
        <CookieControl>
          <template v-slot:bar>
            <p>We use cookies and other tracking technologies to improve your browsing experience on our site, analyze site traffic, and understand where our audience is coming from. To find out more, please read our Cookies Policy</p><br>
            <nuxt-link class="input--option" to="/cookie-policy">
              <b>Read More</b>
            </nuxt-link>
          </template>
        </CookieControl>
        <div class="social-bar">
          <a target="_blank" href="https://www.facebook.com/traininblocks"><inline-svg class="social-icon" :src="require('../assets/svg/socials/Facebook.svg')" /></a>
          <a target="_blank" href="https://www.instagram.com/traininblocks"><inline-svg class="social-icon" :src="require('../assets/svg/socials/Instagram.svg')" /></a>
          <a target="_blank" href="https://www.twitter.com/traininblocks"><inline-svg class="social-icon" :src="require('../assets/svg/socials/Twitter.svg')" /></a>
          <a target="_blank" href="https://www.linkedin.com/company/train-in-blocks"><inline-svg class="social-icon" :src="require('../assets/svg/socials/LinkedIn.svg')" /></a>
        </div>
        <div>
          <nuxt-link class="input--option" to="/gdpr">
            GDPR Statement
          </nuxt-link>
          <nuxt-link class="input--option" to="/privacy-policy">
            Privacy Policy
          </nuxt-link>
          <nuxt-link class="input--option" to="/cookie-policy">
            Cookies Policy
          </nuxt-link>
          <nuxt-link class="input--option" to="/terms-conditions">
            Terms & Conditions
          </nuxt-link>
        </div>
      </div><br>
      <p>Our friends at <a class="ref--icons8" target="_blank" href="https://icons8.com">Icons8</a> helped us out with some icons!</p>
    </footer>
    <a
      v-if="scrollpx > 800"
      v-scroll-to="{
        el: '#nav--top',
        duratiob: 1200,
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
import Countdown from '../components/Countdown'

export default {
  name: 'App',
  components: {
    InlineSvg,
    Countdown
  },
  data () {
    return {
      descSub: 'Get Notified When We Launch',
      scrollpx: 0,
      metaHelper: {
        title: 'Train In Blocks',
        description: 'Over-delivering doesn\'t have to cost you. Impress your clients and help them reach their health and fitness goals.',
        image: 'https://traininblocks.com/android-chrome-192x192.png'
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
        { hid: 'description', content: this.metaHelper.description },
        { hid: 'og:title', content: this.metaHelper.title },
        { hid: 'og:description', content: this.metaHelper.description },
        { hid: 'og:image', content: this.metaHelper.img },
        { hid: 'twitter:title', content: this.metaHelper.title },
        { hid: 'twitter:description', content: this.metaHelper.description },
        { hid: 'twitter:img', content: this.metaHelper.image }
      ]
    }
  }
}
</script>
