<template>
  <div>
    <div id="container--2c">
      <h1>Save more time and get more clients.</h1>
      <img id="img--DevicePC" src="../assets/DevicePC.png" alt="Device">
    </div>
    <div class="spacer" />
    <div id="container--2c3r">
      <h1 style="grid-area: aT">
        We've taken exercise programming to the next level.
      </h1>
      <inline-svg style="grid-area: aI" :src="require('../assets/svg/Arrow.svg')" />
      <h1 class="text--right" style="grid-area: bT">
        Speed, simplicity and functionality is our philosophy.
      </h1>
      <inline-svg style="grid-area: bI" :src="require('../assets/svg/FlyArrow.svg')" />
      <h1 style="grid-area: cT">
        Use features that you only need, save your money and expand.
      </h1>
      <inline-svg id="svg--3" style="grid-area: cI" :src="require('../assets/svg/Custom.svg')" />
    </div>
    <div class="spacer" />
  </div>
</template>

<script>
import InlineSvg from 'vue-inline-svg'

export default {
  components: {
    InlineSvg
  },
  data () {
    return {
      title: 'Want to train more clients effectively?'
    }
  },
  head () {
    return {
      title: 'Programming for Personal Trainers',
      meta: [
        { hid: 'description', name: 'description', content: 'Over-delivering doesn\'t have to cost you. Impress your clients and help them reach their health and fitness goals.' },
        { hid: 'og:title', content: 'Programming for Personal Trainers' },
        { hid: 'twitter:title', content: 'Programming for Personal Trainers' },
        { hid: 'og:url', content: '/' }
      ]
    }
  }
}
</script>

<style scoped>
  /* Containers */
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

  /* Misc. */
  #img--DevicePC {
    width: 100%
  }
  .text--right {
    text-align: right
  }
  svg {
    margin: auto
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
