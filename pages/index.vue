<template>
  <div>
    <div id="container--1c">
      <h1 class="main-title">
        Save more time and get more clients.
      </h1>
      <img id="img--DevicePC" src="../assets/DevicePC.png" alt="Device PC">
    </div>
    <div class="spacer" />
    <div id="container--2c3r">
      <h1 class="main-title" style="grid-area: aT">
        We've taken exercise programming to the next level.
      </h1>
      <inline-svg style="grid-area: aI" :src="require('../assets/svg/Arrow.svg')" />
      <h1 class="text--right main-title" style="grid-area: bT">
        Speed, simplicity and functionality is our philosophy.
      </h1>
      <img id="img--deviceTablet" style="grid-area: bI" src="../assets/DeviceTablet.png" />
      <h1 class="main-title" style="grid-area: cT">
        Use features that you only need, save your money and expand.
      </h1>
      <inline-svg style="grid-area: cI" :src="require('../assets/svg/FlyArrow.svg')" />
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
  mounted () {
    this.$parent.$parent.metaHelper.title = 'Programming for Personal Trainers'
    this.$parent.$parent.metaHelper.description = 'Over-delivering doesn\'t have to cost you. Impress your clients and help them reach their health and fitness goals.'
  }
}
</script>

<style scoped>
  /* Containers */
  #container--1c {
    display: grid;
    grid-gap: 4rem;
    height: auto;
    width: 100%
  }
  #container--1c h1 {
    text-align: center
  }
  #container--2c3r {
    display: grid;
    grid-template: repeat(3, 1fr) / 1fr 1fr;
    grid-template-areas:
      'aI aT'
      'bT bI'
      'cI cT';
    grid-gap: 4rem;
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
  #img--deviceTablet {
    width: 40vw;
    margin: auto
  }
  .text--right {
    text-align: right
  }
  svg {
    margin: auto
  }

  /* Responsiveness */
  @media (max-width: 992px) {
    .container--2c3r {
      grid-gap: 2rem
    }
  }
  @media (max-width: 768px) {
    h1 {
      margin: 0
    }
    #container--2c {
      grid-template-columns: 1fr;
      grid-gap: 4rem;
      margin: 0 0 4rem 0
    }
    #container--2c3r {
      grid-template: repeat(3, .4fr 1fr) / 1fr;
      grid-template-areas: 'aT' 'aI' 'bT' 'bI' 'cT' 'cI'
    }
    #svg--3 {
      width: auto
    }
    #img--deviceTablet {
      width: 90vw
    }
  }
  @media (max-width: 360px) {
    svg {
      width: 80%
    }
  }
</style>
