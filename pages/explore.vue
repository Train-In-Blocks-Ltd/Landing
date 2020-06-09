<template>
  <div>
    <h1 class="paper--title">
      {{ title }}
    </h1>
    <div class="spacer" />
    <div class="container--2c intro">
      <div class="container--paper-text">
        <h2 class="sub-title">It supports the process of creation.</h2>
        <p>Don't forget, exercise programming is an art-form. Every great health and fitness professional needs a fresh, new and contemporary software to be their canvas.</p>
        <inline-svg class="svg--paper" :src="require('../assets/svg/PaperStack.svg')" />
      </div>
      <div class="container--desc-text">
        <h1 class="main-title">Flexible</h1>
        <h1 class="main-title">Customisable</h1>
        <h1 class="main-title">Affordable</h1>
        <h1 class="main-title">Minimal</h1>
      </div>
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
      title: 'What\'s with our obsession with paper?',
      descSub: 'Get More From Our Emails'
    }
  },
  head () {
    return {
      title: 'Free Content for Personal Trainers',
      meta: [
        { hid: 'description', name: 'description', content: 'We offer so much more than just software for fitness trainers and coaches. Access our free content on health and fitness related topics.' },
        { hid: 'og:title', content: 'Free Content for Personal Trainers' },
        { hid: 'twitter:title', content: 'Free Content for Personal Trainers' },
        { hid: 'og:url', content: '/explore' }
      ]
    }
  }
}
</script>

<style scoped>
  /* Container */
  .container--2c {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: 'a b';
    grid-gap: 3rem
  }
  .container--paper-text {
    text-align: right;
    grid-area: a;
    padding: 2rem 0
  }
  .container--desc-text {
    grid-area: b
  }

  /* Responsiveness */
  @media (max-width: 992px) {
    .container--2c, .container--2c.subscribe, .container--2c.intro {
      grid-template-columns: 1fr;
      grid-template-areas: 'b' 'a';
      grid-gap: 0
    }
    .container--desc-text h1 {
      font-size: 2rem;
      margin: 1rem 0
    }
  }
</style>
