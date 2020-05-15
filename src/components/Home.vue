<template>
  <div>
    <h1 id="text--good" class="desc">Good Trainers Make Programmes,</h1>
    <h1 id="text--exceptional" class="desc">Exceptional Trainers Design Them.</h1>
    <div class="spacer"/>
    <div class="container--countdown">
      <h2>01.08.20</h2>
      <Countdown end="August 1, 2020"/>
    </div>
    <div class="spacer"/>
    <Subscribe/>
    <div class="spacer"/>
    <div id="container--2c">
      <h1>Save more time and get more clients.</h1>
      <img id="img--DevicePC" src="../assets/DevicePC.png" alt="Device"/>
    </div>
    <div class="spacer"/>
    <div id="container--2c3r">
      <h1 style="grid-area: aT">We've taken exercise programming to the next level.</h1>
      <inline-svg style="grid-area: aI" :src="require('../assets/svg/Arrow.svg')"/>
      <h1 class="text--right" style="grid-area: bT">Speed, simplicity and functionality is our philosophy.</h1>
      <inline-svg style="grid-area: bI" :src="require('../assets/svg/FlyArrow.svg')"/>
      <h1 style="grid-area: cT">Use features that you only need, save your money and expand.</h1>
      <inline-svg id="svg--3" style="grid-area: cI" :src="require('../assets/svg/Custom.svg')"/>
    </div>
    <div class="spacer"/>
  </div>
</template>

<script>
  import InlineSvg from 'vue-inline-svg'
  import Countdown from './parts/Countdown'
  import Subscribe from './parts/Subscribe'

  export default {
    components: {
      InlineSvg,
      Countdown,
      Subscribe
    },
    data() {
      return {
        title: 'Want to train more clients effectively?',
        descSub: 'Get Notified When We Launch'
      }
    }
  } 
</script>

<style scoped>
  .container--countdown {
    text-align: center;
    letter-spacing: .4rem;
    font-size: 1.5rem
  }
  svg {
    margin: auto
  }
  #container--2c {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;
    height: auto;
    width: 100%
  }
  #container--2c > h1 {
    margin: auto
  }
  #container--2c3r {
    display: grid;
    grid-template: repeat(3, 1fr) / 1fr 1fr;
    grid-template-areas:
      'aI aT'
      'bT bI'
      'cI cT';
    grid-gap: 3rem 1rem;
    height: auto
  }
  #container--2c3r > div {
    margin: 5vh 0
  }
  #container--2c3r > h1 {
    margin: auto
  }
  #text--good {
    margin: 2rem 0 0 0;
    border: 2px solid #282828
  }
  #text--exceptional {
    background-color: #282828;
    border: 2px solid #282828;
    color: white
  }
  #img--DevicePC {
    width: 100%
  }
  .text--right {
    text-align: right
  }
  #svg--3 {
    width: 30vw
  }

  /* Responsiveness */
  @media (max-width: 768px) {
    h1 {
      margin: 0
    }
    #container--2c {
      grid-template-columns: 1fr;
      grid-gap: 0
    }
    #container--2c3r {
      grid-template: repeat(3, .4fr 1fr) / 1fr;
      grid-template-areas: 'aT' 'aI' 'bT' 'bI' 'cT' 'cI';
      grid-gap: 0
    }
    #laptop {
      width: 70vw;
      margin: auto
    }
    #svg--3 {
      width: auto
    }
  }

  @media (max-width: 992px) {
    .container--2c3r {
      grid-gap: 10vh
    }
  }
  @media (max-width: 360px) {
    #container--2c3r {
      grid-gap: 2rem 0
    }
    svg {
      width: 80%
    }
  }
</style>