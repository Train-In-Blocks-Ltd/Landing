
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
  h1 {
    font-size: 3rem;
    margin: 0 0 2rem 0
  }
  h2 {
    font-size: 2rem;
    margin: 0 0 1.5rem 0
  }
  p {
    font-size: 1rem;
    line-height: 1.5rem;
    margin: 3rem 0
  }
  .vm--modal {
    padding: 1rem 1.6rem
  }

  /* GLOBAL: To Top */
  .to-top {
    opacity: 0;
    position: fixed;
    right: 8%;
    bottom: 3rem;
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

  /* GLOBAL: nprogress */
  #nprogress .bar {
    background: #282828;
    height: 3px
  }
  #nprogress .peg {
    box-shadow: 0 0 10px #282828, 0 0 5px #282828
  }
  #nprogress .spinner {
    display: none
  }

  /* GLOBAL: Inputs and Buttons */
  input, button {
    background-color: transparent
  }
  button {
    outline-width: 0;
    border: 1px solid #282828;
    font-size: 1rem;
    font-weight: bold;
    letter-spacing: .15rem;
    cursor: pointer;
    transition: all 400ms cubic-bezier(.165, .84, .44, 1)
  }
  button:hover, #mc-embedded-subscribe:hover {
    background-color: #282828;
    color: white
  }
  button:active, #mc-embedded-subscribe:active {
    transform: scale(.9)
  }
  button:disabled:hover {
    background: transparent;
    color: gray;
    cursor: default
  }
  select {
    background-color: transparent;
    border: 1px solid #282828;
    padding: .1rem;
    letter-spacing: .05rem;
    margin: 2rem 0
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
  .darkmode {
    font-size: .8rem;
    padding: .4rem 1rem;
    display: block;
    margin: 1.5rem 0 0 0;
    float: right
  }
  .countdown--wrapper {
    display: grid;
    margin: 8rem 0;
    animation-delay: 600ms
  }
  .container--countdown {
    text-align: center;
    letter-spacing: .4rem;
    font-size: 1.5rem
  }
  .container--nav {
    display: flex;
    flex-direction: row-reverse;
    height: 10vh;
    animation-delay: 100ms
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
    opacity: .7
  }
  .input--option:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 1px;
    bottom: 0;
    left: 0;
    background-color: #282828;
    opacity: 0;
    transform: scaleX(0);
    transition: all 200ms;
    transition-timing-function: cubic-bezier(.165, .84, .44, 1)
  }
  .input--option:hover:before {
    transform: scaleX(1);
    opacity: .7
  }
  .input--option:active {
    transform: scale(.9)
  }
  nav a.nuxt-link-exact-active {
    font-weight: bold
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
    font-size: 1rem;
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
    h1 {
      font-size: 3.5rem
    }
  }
  @media (max-width: 992px) {
    body {
      padding: 0 6%
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
    .darkmode {
      margin: 0
    }

    /* Misc. */
    h1 {
      font-size: 2rem
    }
    .spacer {
      height: 5vh
    }
    .input--option:hover {
      opacity: 1
    }
  }
  @media (max-width: 576px) {
    /* Containers */
    .container--countdown h2 {
      font-size: 1.5rem
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
  }
  @media (max-width: 360px) {
    body {
      font-size: 14px
    }
    h1 {
      font-size: 1.5rem
    }

    /* Containers */
    .container--countdown h2 {
      font-size: 1rem
    }
    .container--countdown p {
      font-size: .5rem;
      margin: .4rem 0
    }
  }
</style>

<template>
  <div id="app">
    <inline-svg id="logo--home" class="animated bounceInLeft" :src="require('../assets/svg/LogoV12.svg')" />
    <div class="countdown--wrapper animated fadeIn">
      <div class="container--countdown">
        <h2>01.08.20</h2>
        <Countdown end="August 1, 2020" />
        <p><b>BETA RELEASE</b></p>
      </div>
    </div>
    <div id="nav--top" class="spacer--small" />
    <div class="container--nav animated bounceInRight">
      <nav id="nav--main">
        <nuxt-link class="input--option" to="/">
          Welcome
        </nuxt-link>
        <nuxt-link class="input--option" to="/features">
          Demo
        </nuxt-link>
        <nuxt-link class="input--option" to="/pricing">
          Pricing
        </nuxt-link>
        <nuxt-link class="input--option" to="/roadmap">
          Roadmap
        </nuxt-link>
        <nuxt-link class="input--option" to="/explore">
          Explore
        </nuxt-link><br>
        <button class="darkmode" @click="darkThemeSwitch()">
          {{ toMode }} Mode
        </button>
      </nav>
    </div>
    <div class="animated fadeInUp">
      <transition enter-active-class="animated fadeInRight delay-1s" leave-active-class="animated fadeOutLeft">
        <nuxt />
      </transition>
    </div>
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
    <client-only>
      <modal class="modal--format" name="format" height="auto" :adaptive="true">
        <p>
          <b>Just learn the format:</b><br>
          A) Back Squat: 3 x 6 at 70/80/90kg<br>
          B) Bench Press: 2 x 20/15 at 50/55kg
        </p>
      </modal>
    </client-only>
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
      toMode: 'Night',
      descSub: 'Get Notified When We Launch',
      scrollpx: 0,
      color: '#282828'
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    _addDarkTheme () {
      const darkThemeLinkEl = document.createElement('link')
      darkThemeLinkEl.setAttribute('rel', 'stylesheet')
      darkThemeLinkEl.setAttribute('href', '/css/darktheme.css')
      darkThemeLinkEl.setAttribute('id', 'dark-theme-style')

      const docHead = document.querySelector('head')
      docHead.append(darkThemeLinkEl)
      this.color = '#FFFFFF'
      this.$forceUpdate()
    },
    _removeDarkTheme () {
      const darkThemeLinkEl = document.querySelector('#dark-theme-style')
      const parentNode = darkThemeLinkEl.parentNode
      parentNode.removeChild(darkThemeLinkEl)
      this.color = '#282828'
      this.$forceUpdate()
    },
    darkThemeSwitch () {
      const darkThemeLinkEl = document.querySelector('#dark-theme-style')
      if (!darkThemeLinkEl) {
        this._addDarkTheme()
        this.toMode = 'Day'
      } else {
        this._removeDarkTheme()
        this.toMode = 'Night'
      }
    },
    handleScroll () {
      this.scrollpx = window.scrollY
    }
  }
}
</script>
