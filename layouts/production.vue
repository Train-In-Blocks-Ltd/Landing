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
    line-height: 1.5rem;
    margin: 3rem 0
  }
  .vm--modal {
    padding: 1rem 1.6rem
  }

  /* GLOBAL: Email */
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

  /* GLOBAL: Footer */
  footer {
    padding: 2rem 0;
    background-color: white;
    border-top: 1px solid #28282820
  }
  footer p {
    margin-left: 2rem;
    font-size: .8rem
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
    margin: 8rem 0;
    animation-delay: 600ms
  }
  .container--countdown {
    letter-spacing: .4rem;
    font-size: 1.5rem
  }

  /* GLOBAL: Nav */
  .container--nav {
    display: flex;
    margin: 0 0 6rem 0;
    justify-content: space-between;
    height: 10vh;
    animation-delay: 100ms
  }
  .social-icon {
    width: 25px;
    height: 25px;
    margin: 0 1rem;
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
    h1 {
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
  @media (max-width: 992px) {
    .input--option {
      margin: 0 0 0 1rem
    }
    .social-icon {
      margin: 0 .4rem
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
    .social-icon {
      display: grid;
      margin: 1rem 0
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
    <div class="countdown--wrapper animated fadeIn delay-1s">
      <div class="container--countdown">
        <h2>01.08.20</h2>
        <Countdown end="August 1, 2020" />
        <p><b>BETA RELEASE</b></p>
      </div>
    </div>
    <div id="nav--top" class="spacer--small" />
    <div class="container--nav animated bounceInLeft">
      <div class="social-bar">
        <a target="_blank" href="https://www.facebook.com/traininblocks"><inline-svg class="social-icon" :src="require('../assets/svg/socials/Facebook.svg')" /></a>
        <a target="_blank" href="https://www.instagram.com/traininblocks"><inline-svg class="social-icon" :src="require('../assets/svg/socials/Instagram.svg')" /></a>
        <a target="_blank" href="https://www.twitter.com/traininblocks"><inline-svg class="social-icon" :src="require('../assets/svg/socials/Twitter.svg')" /></a>
        <a target="_blank" href="https://www.linkedin.com/company/train-in-blocks"><inline-svg class="social-icon" :src="require('../assets/svg/socials/LinkedIn.svg')" /></a>
      </div>
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
        </nuxt-link>
        <nuxt-link class="input--option" to="/blog">
          Blog
        </nuxt-link>
        <br>
      </nav>
    </div>
    <div class="animated fadeInUp">
      <transition enter-active-class="animated fadeInRight delay-1s" leave-active-class="animated fadeOutLeft">
        <nuxt />
      </transition>
    </div>
    <footer>
      <nuxt-link class="input--option" to="/gdpr">
        GDPR Statement
      </nuxt-link>
      <nuxt-link class="input--option" to="/privacy-policy">
        Privacy Policy
      </nuxt-link>
      <nuxt-link class="input--option" to="/cookie-policy">
        Cookie Policy
      </nuxt-link>
      <nuxt-link class="input--option" to="/terms-conditions">
        Terms & Conditions
      </nuxt-link>
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
      scrollpx: 0
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
  }
}
</script>
