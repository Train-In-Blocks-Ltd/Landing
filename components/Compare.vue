<style scoped>
.container--compare {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem
}
.container--features {
  display: grid;
  grid-template-columns: repeat(auto-fill, 280px);
  grid-gap: 4rem
}

/* Repsonsive */
@media (max-width: 992px) {
  .container--compare {
    grid-template-columns: 1fr
  }
}
</style>

<template>
  <div>
    <p class="text--large">
      How do we compare against <b>{{ details.name }}?</b>
    </p>
    <p class="text--large grey">
      Here's a breakdown...
    </p>
    <div class="spacer" />
    <div class="container--compare">
      <div class="compare_item">
        <p class="text--small">
          Train In Blocks
        </p>
        <p class="text--small grey">
          £10 per month. Simple right?
        </p>
        <p class="text--small grey">
          No limits on clients or programmes
        </p>
      </div>
      <div class="compare_item">
        <p class="text--small">
          {{ details.name }}
        </p>
        <p class="text--small grey">
          {{ details.price }}
        </p>
        <p class="text--small grey">
          {{ details.price_desc }}
        </p>
      </div>
    </div>
    <div class="spacer" />
    <payment />
  </div>
</template>

<script>
import Payment from './Payment.vue'

export default {
  components: {
    Payment
  },
  props: {
    details: {
      type: Object,
      default: null
    }
  }
}
</script>
