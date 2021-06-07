<style scoped>
/* Home Intro */
.home_intro {
  margin: 0 auto;
  width: 70%
}
iframe {
  display: flex;
  margin: auto
}

@media (max-width: 992px) {
  .home_intro {
    width: 100%
  }
}
</style>

<template>
  <div id="home">
    <div class="home_intro">
      <h1 class="center_text text--xlarge">
        We've taken health and fitness programming to the next level.
      </h1>
      <div class="spacer" />
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/2vwnB1fnxqI"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </div>
    <div class="spacer--large" />
    <showcase />
    <div class="spacer" />
    <benefits />
    <div class="spacer--large" />
    <payment />
    <div class="spacer" />
  </div>
</template>

<script>
import Payment from '../components/Payment'
import Benefits from '../components/Benefits'
import Showcase from '../components/Showcase'

export default {
  components: {
    Payment,
    Benefits,
    Showcase
  },
  data () {
    return {
      title: 'Want to train more clients effectively?'
    }
  },
  beforeCreate () {
    this.$parent.$parent.metaHelper.title = 'Affordable Personal Training Software'
    this.$parent.$parent.metaHelper.description = 'Over-delivering doesn\'t have to cost you. Impress your clients and help them reach their health and fitness goals.'
    this.$parent.$parent.metaHelper.url = 'https://traininblocks.com/'
  }
}
</script>
