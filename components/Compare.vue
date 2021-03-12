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
    <h1>
      How do we compare against <b>{{ details.name }}?</b>
    </h1>
    <h1 class="accent_text">
      Here's a breakdown...
    </h1>
    <div class="spacer" />
    <div class="container--compare">
      <div class="compare_item">
        <h2>
          Train In Blocks
        </h2>
        <h2 class="accent_text">
          £10 per month. Simple right?
        </h2>
        <h2 class="accent_text">
          No limits on clients or programmes
        </h2>
      </div>
      <div class="compare_item">
        <h2>
          {{ details.name }}
        </h2>
        <h2 class="accent_text">
          {{ details.price }}
        </h2>
        <h2 class="accent_text">
          {{ details.price_desc }}
        </h2>
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
