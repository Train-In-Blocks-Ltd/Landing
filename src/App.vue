<template>
  <div id="app">
    <div id="top">
      <router-link to="/">
        <inline-svg id="logo--home" class="animated bounceInDown" :src="require('./assets/svg/LogoC.svg')"/>
      </router-link>
      <nav id='nav--main' class="animated bounceInDown">
        <router-link class="input--option" to="/">Welcome</router-link>
        <router-link class="input--option" to="/features">Demo</router-link>
        <router-link class="input--option" to="/pricing">Pricing</router-link>
        <router-link class="input--option" to="/roadmap">Roadmap</router-link>
        <router-link class="input--option" to="/Explore">Explore</router-link><br>
        <button class="darkmode" @click="darkThemeSwitch()">{{toMode}} Mode</button>
      </nav>
      <hamMenu id="hamMenu"></hamMenu>
    </div>
    <inline-svg :src="require('./assets/svg/Paper.svg')" id="back--two" class="paper--back animated fadeInUp"/>
    <inline-svg :src="require('./assets/svg/Paper.svg')" id="back--one" class="paper--back animated fadeInUp"/>
    <div class="animated fadeInUp">
      <div class="paper">
        <transition enter-active-class="animated fadeInUp delay-1s" leave-active-class="animated fadeOutDown">
          <router-view></router-view>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
  import InlineSvg from 'vue-inline-svg'
  import hamMenu from './components/Hamburger.vue'

  export default {
    name: 'App',
    components: {
      hamMenu,
      InlineSvg
    },
    data() {
      return {
        toMode: 'Night'
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
      }
    }
  }
</script>

<style>
  @import '../node_modules/animate.css';

  /* GLOBAL */
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
    overflow: hidden;
    letter-spacing: .1rem;
    font-size: 16px
  }
  h1 {
    font-size: 3rem
  }
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
  button:hover {
    background-color: #282828;
    color: white
  }
  button:active {
    transform: scale(.9)
  }
  .desc {
    padding: .4rem;
    margin: .4rem 0
  }
  .spacer {
    width: 100%;
    height: 10vh
  }
  #top {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: auto;
    margin: 10vh 0
  }
  #nav--main {
    animation-delay: 100ms
  }
  #hamMenu {
    display: none
  }

  /* Logo */
  #logo--home {
    width: 10rem;
    height: auto
  }
  #logo--home > path {
    opacity: 1;
    transition: all .2s cubic-bezier(.165, .84, .44, 1)
  }
  #logo--home:hover > path {
    opacity: .8
  }
  #logo--home:active > path {
    opacity: .6
  }
  .darkmode {
    font-size: .8rem;
    padding: .4rem 1rem;
    display: block;
    margin: 1rem 0 0 0;
    float: right
  }

  /* Nav Hover Animation */
  .input--option {
    position: relative;
    margin-left: 2vw;
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
    transition: all 300ms;
    transition-timing-function: cubic-bezier(.165, .84, .44, 1)
  }
  .input--option:hover:before {
    transform: scaleX(1);
    opacity: .7
  }
  nav a.router-link-exact-active {
    font-weight: bold
  }

  /* Paper and Child Element */
  .paper {
    overflow-y: auto;
    vertical-align: bottom;
    height: 60vh;
    margin: auto;
    padding: 5.9277rem;
    box-shadow: 0 20px 40px 12px rgba(0, 0, 0, .1);
    background-color: white;
    transition: 500ms;
    transition-timing-function: cubic-bezier(.165, .84, .44, 1)
  }
  .paper:hover {
    transform: translateY(-3vh)
  }
  .paper--back {
    position: absolute;
    width: 50%;
    height: auto;
    z-index: -1;
    transition: 500ms;
    transition-timing-function: cubic-bezier(.165, .84, .44, 1)
  }
  #back--one {
    top: 35vh;
    left: 0;
    animation-delay: 400ms
  }
  #back--two {
    top: 40vh;
    right: 0;
    animation-delay: 200ms
  }
  .paper--title {
    margin: 0 0 .6rem 0
  }
  p {
    font-size: 1rem;
    line-height: 1.5rem;
    margin: 3rem 0
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

  /* Misc. */
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

  /* Responsiveness */
  @media (min-width: 1440px) {
    h1 {
      font-size: 3.5rem
    }
  }
  @media (max-width: 1200px) {
    .paper {
      padding: 5rem
    }
  }
  @media (max-width: 992px) {
    body {
      padding: 0 6%
    }
    .paper {
      padding: 4rem
    }
    .paper--back {
      height: 80vh
    }
  }
  @media (max-width: 768px) {
    body {
      padding: 0
    }
    h1 {
      font-size: 2rem
    }
    .spacer {
      height: 5vh
    }
    .paper {
      padding: 3rem;
      height: 80vh
    }
    .paper--back {
      display: none
    }
    #top {
      display: grid;
      grid-template-columns: 1fr .1fr;
      padding: 0 1rem;
      margin: 5vh 0
    }
    #nav--main {
      display: none
    }
    #hamMenu {
      display: grid
    }
    .input--option {
      margin: .2rem 0;
      width: fit-content
    }
    .input--option:hover {
      opacity: 1
    }
  }
  @media (max-width: 576px) {
    #logo--home {
      width: 8rem
    }
    .spacer {
      height: 5vh
    }
    #top {
      margin: 5vh 0
    }
    .paper {
      padding: 2rem
    }
  }
  @media (max-width: 360px) {
    body {
      font-size: 14px
    }
    h1 {
      font-size: 1.5rem
    }
  }
</style>
