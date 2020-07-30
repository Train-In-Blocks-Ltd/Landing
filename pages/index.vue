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
    grid-gap: 10rem;
    height: auto
  }
  #container--2c3r > div {
    margin: 5vh 0
  }
  #container--2c3r > h1 {
    margin: auto
  }

  /* Countdown */
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

  /* Misc. */
  .text--center {
    text-align: center
  }
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
  @media (max-width: 576px) {
    /* Countdown */
    .container--countdown h2 {
      font-size: 1rem
    }
    .container--countdown p {
      font-size: .8rem;
      margin: .6rem 0
    }
  }
  @media (max-width: 360px) {
    /* Containers */
    .container--countdown p {
      font-size: .5rem;
      margin: .4rem 0
    }

    /* Misc */
    svg {
      width: 80%
    }
  }
</style>

<template>
  <div>
    <div id="container--1c">
      <div class="countdown--wrapper">
        <div class="container--countdown">
          <h2 class="sub-title text--center">
            01.08.20
          </h2>
          <Countdown end="August 1, 2020" />
          <p class="countdown--desc text--center">
            <b>BETA RELEASE</b>
          </p>
        </div>
      </div>
      <div>
        <p><b>Why should you <i>Train In Blocks</i>?</b></p>
        <p>Over-delivering doesn't have to cost you. Impress your clients and help them reach their health and fitness goals.</p>
        <p>There's no standard way to use this app. Find your flare a cater it towards your clientele. For example, use it for coaching, tracking treatments, therapy sessions and more.</p>
      </div><br>
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
      <img id="img--deviceTablet" style="grid-area: bI" src="../assets/DeviceTablet.png" alt="Device Tablet">
      <h1 class="main-title" style="grid-area: cT">
        Save more time and get more clients.
      </h1>
      <inline-svg style="grid-area: cI" :src="require('../assets/svg/FlyArrow.svg')" />
    </div>
    <div class="spacer" />
  </div>
</template>

<script>
import InlineSvg from 'vue-inline-svg'
import Countdown from '../components/Countdown'

export default {
  components: {
    InlineSvg,
    Countdown
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
