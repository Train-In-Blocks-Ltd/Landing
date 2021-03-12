<template>
  <div id="app">
    <inline-svg id="logo--home" class="animated bounceInLeft" :src="require('../assets/svg/LogoV12.svg')" />
    <div class="countdown--wrapper animated fadeIn">
      <div class="container--countdown">
        <p class="sub-title">
          01.08.20
        </p>
        <Countdown end="August 1, 2020" />
        <p>
          <b>BETA RELEASE</b>
        </p>
      </div>
    </div>
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
