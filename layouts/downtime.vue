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
    <form
      id="mc-embedded-subscribe-form"
      action="https://traininblocks.us8.list-manage.com/subscribe/post?u=a2c4d1f0522fa78cbfc518fc0&amp;id=73101450d0"
      method="post"
      name="mc-embedded-subscribe-form"
      class="validate animated fadeInLeft"
      target="_blank"
      novalidate
    >
      <label for="mce-EMAIL">Get Notified When We Launch!</label><br>
      <input
        id="mce-EMAIL"
        type="email"
        value=""
        name="EMAIL"
        class="email"
        placeholder="Email"
        required
      >
      <div style="position: absolute; left: -5000px" aria-hidden="true">
        <input type="text" name="b_a2c4d1f0522fa78cbfc518fc0_73101450d0" tabindex="-1" value="">
      </div>
      <div class="clear">
        <input id="mc-embedded-subscribe" type="submit" value="Subscribe" name="subscribe" class="button">
      </div>
    </form>
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
