<template>
  <div>
    <h1 class="paper--title">{{title}}</h1>
    <div class="spacer"></div>
    <h2>What's with our obsession with paper?</h2>
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
  import Subscribe from './Subscribe'

  export default {
    components: {
      Subscribe
    },
    data() {
      return {
        title: 'Our Philosophy'
      }
    }
  }
</script>

<style scoped>
  .container--2c {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 3rem
  }
  .desc--subscribe > h1 {
    margin: 0
  }

  /* Responsiveness */
  @media (max-width: 992px) {
    .container--2c {
      grid-template-columns: 1fr
    }
  }
</style>