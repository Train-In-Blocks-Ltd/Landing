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
    <div class="spacer"></div>
    <div class="spacer"></div>
    <div class="container--2c">
      <div class="desc--subscribe">
        <h1>Get More From Our Emails</h1>
      </div>
      <Subscribe></Subscribe>
    </div>
    <div class="socials">
      
    </div>
  </div>
</template>
  
<script>
  import InlineSvg from 'vue-inline-svg'
  import Subscribe from './Subscribe'

  export default {
    components: {
      Subscribe,
      InlineSvg
    },
    data() {
      return {
        title: 'What\'s with our obsession with paper?'
      }
    }
  }
</script>

<style scoped>
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
  .desc--subscribe > h1 {
    margin: 0;
    text-align: right
  }
  .svg--paper {
    height: 25vh;
    width: auto
  }

  /* Responsiveness */
  @media (max-width: 992px) {
    .container--2c {
      grid-template-columns: 1fr
    }
    .container--2c.intro {
      grid-template-areas: 'b' 'a';
      grid-gap: 0
    }
    .container--desc-text h1 {
      font-size: 2rem;
      margin: 1rem 0
    }
  }
</style>