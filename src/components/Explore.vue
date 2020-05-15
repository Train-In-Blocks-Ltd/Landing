<template>
  <div>
    <h1 class="paper--title">{{title}}</h1>
    <div class="spacer"></div>
    <div class="container--2c intro">
      <div class="container--paper-text">
        <h2>It supports the process of creation.</h2>
        <p>Don't forget, exercise programming is an art-form. Every great health and fitness professional needs a fresh, new and contemporary software to be their canvas.</p>
        <inline-svg class="svg--paper" :src="require('../assets/svg/PaperStack.svg')"/>
      </div>
      <div class="container--desc-text">
        <h1>Flexible</h1>
        <h1>Customisable</h1>
        <h1>Affordable</h1>
        <h1>Minimal</h1>
      </div>
    </div>
    <div class="spacer"/>
    <Subscribe></Subscribe>
    <div class="spacer"/>
    <div class="socials">
      
    </div>
  </div>
</template>
  
<script>
  import InlineSvg from 'vue-inline-svg'
  import Subscribe from './parts/Subscribe'

  export default {
    components: {
      Subscribe,
      InlineSvg
    },
    data() {
      return {
        title: 'What\'s with our obsession with paper?',
        descSub: 'Get More From Our Emails'
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