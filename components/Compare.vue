<style scoped>
.container--compare {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem
}
.container--compare > div {
  padding: 2rem;
  box-shadow: var(--low_shadow);
  border-radius: var(--border_rad_large)
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
        <p>
          £10 per month. Simple right?
        </p>
        <p>
          No limits on clients or programmes
        </p>
      </div>
      <div class="compare_item">
        <h2>
          {{ details.name }}
        </h2>
        <p>
          {{ details.price }}
        </p>
        <p>
          {{ details.price_desc }}
        </p>
      </div>
    </div>
    <div class="spacer" />
    <benefits />
    <div class="spacer" />
    <payment />
  </div>
</template>

<script>
import Benefits from './Benefits.vue'
import Payment from './Payment.vue'

export default {
  components: {
    Payment,
    Benefits
  },
  props: {
    details: {
      type: Object,
      default: null
    }
  }
}
</script>
