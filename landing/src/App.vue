<template>
  <div id="app">
    <div id="top">
      <img id="logo--home" class="animated bounceInDown" src="./assets/svg/LogoC.svg">
      <nav id='nav--main' class="animated bounceInDown">
        <router-link class="input--option" to="/">Welcome</router-link>
        <router-link class="input--option" to="/features">Demo</router-link>
        <router-link class="input--option" to="/pricing">Pricing</router-link>
        <router-link class="input--option" to="/roadmap">Roadmap</router-link>
        <router-link class="input--option" to="/philosophy">Our Philosophy</router-link>
      </nav>
    </div>
    <img src="./assets/svg/Paper.svg" id="back--two" class="paper--back animated fadeInUp">
    <img src="./assets/svg/Paper.svg" id="back--one" class="paper--back animated fadeInUp"/>
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

  export default {
    name: 'App',
    components: {

    },
  }
</script>

<style>
  @import "../node_modules/animate.css";

  #app {
    font-family: Arial, Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: left;
    color: #282828;
  }
  #logo--home {
    width: 15%;
    height: auto;
  }
  body {
    margin: 0;
    padding: 0 8%;
    overflow-y: hidden;
    letter-spacing: 0.10em;
    font-size: 16px;
  }
  h1 {
    font-size: 3rem;
  }
  .desc {
    padding: 0.4rem;
    margin: 0.4rem 0;
  }
  .spacer {
    width: 100%;
    height: 10vh;
  }
  #top {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: auto;
    margin: 10vh 0;
  }
  #nav--main {
    animation-delay: 100ms;
  }

  /* Nav Hover Animation */
  .input--option {
    position: relative;
    margin-left: 2vw;
    text-decoration: none;
    color: #282828;

    transition: 300ms;
  }
  .input--option:hover {
    opacity: 70%;
  }
  .input--option:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 1px;
    bottom: 0;
    left: 0;
    background-color: #282828;
    opacity: 0;
    transform: scaleX(0);
    transition: all 300ms;
    transition-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
  }
  .input--option:hover:before {
    transform: scaleX(1);
    opacity: 70%;
  }
  nav a.router-link-exact-active {
    font-weight: bold;
  }

  /* Paper and Child Element */
  .paper {
    overflow-y: auto;
    vertical-align: bottom;
    height: 60vh;
    margin: auto;
    padding: 5.9276575395915rem;
    box-shadow: 0px 20px 40px 12px rgba(0,0,0,0.1);
    background-color: #fff;

    transition: 500ms;
    transition-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
  }
  .paper:hover {
    transform: translateY(-3vh);
  }
  .paper--back {
    position: absolute;
    width: 50%;
    height: auto;
    z-index: -1;

    transition: 500ms;
    transition-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
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
    margin: 0 0 0.6rem 0;
  }
  p {
    font-size: 1rem;
    line-height: 1.5rem;
    margin: 3rem 0;
  }

  /* Scroll-bar */
  ::-webkit-scrollbar {
      width: 10px;
      height: 10px;
  }
  ::-webkit-scrollbar-track {
      background: transparent; 
  }
    
  ::-webkit-scrollbar-thumb {
      background: #00000020; 
  }
    
  ::-webkit-scrollbar-thumb:hover {
      background: #00000030;
  }

  /* Misc. */
  .ref--icons8 {
    position: relative;
    font-size: 1rem;
    color: #282828;
    text-decoration: none;
    
    transition: 300ms;
  }
  .ref--icons8:hover {
    opacity: 70%;
  }
  .ref--icons8:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 1px;
    bottom: 0;
    left: 0;
    background-color: #282828;
    opacity: 0;
    transform: scaleX(0);
    transition: all 300ms;
    transition-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
  }
  .ref--icons8:hover:before {
    transform: scaleX(1);
    opacity: 70%;
  }

  /* Responsiveness */
  @media (min-width: 1440px) {
    h1 {
      font-size: 3.5rem;
    }
  }
  @media (max-width: 1200px) {
    .paper {
      padding: 5rem;
    }
  }
  @media (max-width: 992px) {
    body {
      padding: 0 6%;
    }
    .paper {
      padding: 4rem;
    }
    .paper--back {
      height: 80vh;
    }
  }
  @media (max-width: 768px) {
    h1 {
      font-size: 2rem;
    }
    .paper {
      padding: 3rem;
    }
    .paper--back {
      display: none;
    }
    #nav--main {
      display: grid;
      grid-template-columns: 1fr;
      justify-items: right;
    }
    .input--option {
      margin: 0.2em 0;
      width: fit-content;
    }
    .input--option:hover {
      opacity: 100%;
    }
  }
  @media (max-width: 576px) {
    body {
      padding: 0 5%;
    }
    #top {
      margin: 5vh 0;
    }
    .paper {
      padding: 2rem;
      height: 70vh;
    }
  }
</style>
