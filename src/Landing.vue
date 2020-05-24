<template>
  <div id="app">
    <inline-svg id="logo--home" class="animated bounceInLeft" :src="require('./assets/svg/LogoV12.svg')"/>
    <div class="countdown--wrapper animated fadeIn">
      <div class="container--countdown">
        <h2>01.08.20</h2>
        <Countdown end="August 1, 2020"/>
        <p><b>BETA RELEASE</b></p><br>
        <q style="font-size: 1rem; letter-spacing: .2rem">You can't buy more time to train your clients, but you can use it better.</q>
      </div>
    </div>
    <div class="container--signup animated fadeInLeft">
      <form action="https://traininblocks.us8.list-manage.com/subscribe/post?u=a2c4d1f0522fa78cbfc518fc0&amp;id=73101450d0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
        <label for="mce-EMAIL">Get Notified When We Launch!</label><br>
        <input type="email" value="" name="EMAIL" class="email" id="mce-EMAIL" placeholder="Email" required>
        <div style="position: absolute; left: -5000px" aria-hidden="true"><input type="text" name="b_a2c4d1f0522fa78cbfc518fc0_73101450d0" tabindex="-1" value=""></div>
        <div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button"></div>
      </form>
      <button class="darkmode animated fadeInRight" @click="darkThemeSwitch()">{{toMode}} Mode</button>
    </div>
  </div>
</template>

<script>
  import InlineSvg from 'vue-inline-svg'
  import Countdown from './components/parts/Countdown'

  export default {
    name: 'App',
    components: {
      InlineSvg,
      Countdown
    },
    data() {
      return {
        toMode: 'Night',
        descSub: 'Get Notified When We Launch',
        scrollpx: 0
      }
    },
    methods: {
      _addDarkTheme() {
        let darkThemeLinkEl = document.createElement("link");
        darkThemeLinkEl.setAttribute("rel", "stylesheet");
        darkThemeLinkEl.setAttribute("href", "/css/darktheme.css");
        darkThemeLinkEl.setAttribute("id", "dark-theme-style");

        let docHead = document.querySelector("head");
        docHead.append(darkThemeLinkEl);
      },
      _removeDarkTheme() {
        let darkThemeLinkEl = document.querySelector("#dark-theme-style");
        let parentNode = darkThemeLinkEl.parentNode;
        parentNode.removeChild(darkThemeLinkEl);
      },
      darkThemeSwitch() {
        let darkThemeLinkEl = document.querySelector("#dark-theme-style");
        if (!darkThemeLinkEl) {
          this._addDarkTheme()
          this.toMode = 'Day'
        } else {
          this._removeDarkTheme()
          this.toMode = 'Night'
        }
      },
      handleScroll() {
        this.scrollpx = window.scrollY;
      }
    },
    created() {
      window.addEventListener('scroll', this.handleScroll);
    },
    destroyed() {
      window.removeEventListener('scroll', this.handleScroll);
    }
  }
</script>

<style>
  @import '../node_modules/animate.css';

  /* TEMPORARY: Email */
  #mc-embedded-subscribe-form label {
    font-weight: bold;
    font-size: 2rem
  }
  #mce-EMAIL {
    opacity: .6;
    padding: .4rem;
    font-size: 1rem;
    width: 95%;
    margin: 1rem 0;
    outline-width: 0;
    border: none;
    border-bottom: 1px solid #282828;
    transition: all .6s cubic-bezier(.165, .84, .44, 1)
  }
  #mce-EMAIL:hover, #mce-EMAIL:focus {
    width: 100%;
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
  .container--signup {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 5rem
  }

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
    font-size: 16px
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
    height: 2rem;
    width: fit-content;
    font-size: .8rem;
    padding: .4rem 1rem;
    margin: 0 0 auto auto
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
  nav a.router-link-exact-active {
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
    .input--option.router-link-exact-active:before {
      transform: scaleX(1);
      opacity: 1
    }
    .container--signup {
      grid-gap: 4rem
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
    h1 {
      font-size: 2rem
    }
    .spacer {
      height: 5vh
    }
    .input--option:hover {
      opacity: 1
    }
    .container--signup {
      grid-gap: 3rem
    }
    #mc-embedded-subscribe-form label {
      font-size: 1.6rem
    }
    .darkmode:hover {
      background-color: transparent
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
    .container--signup {
      grid-gap: 2rem
    }
    #mc-embedded-subscribe-form label {
      font-size: 1.2rem
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
    .container--signup {
      grid-gap: 1rem
    }
    #mc-embedded-subscribe-form label {
      font-size: 1rem
    }
  }
</style>
