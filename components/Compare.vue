<style scoped>
.container--compare {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem
}
.container--compare > div {
  padding: 2rem;
  border: 3px solid var(--base_dark);
  border-radius: var(--border_rad_large)
}
.container--features {
  display: grid;
  grid-template-columns: repeat(auto-fill, 280px);
  grid-gap: 4rem
}
.app_name,
.app_price:not(.grey) {
  font-weight: bold;
  color: var(--base_dark)
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
    <h2 class="accent_text">
      Here's a breakdown...
    </h2>
    <div class="spacer" />
    <div class="container--compare">
      <div class="compare_item">
        <p class="app_name">
          Train In Blocks
        </p>
        <p class="text--small app_price">
          £10 per month
        </p>
        <ul>
          <li>No limits on clients or programmes</li>
          <li>Cancel anytime and with ease</li>
          <li>No complicated pricing structure</li>
          <li>Instant access</li>
          <li>Client can access their programmes easily</li>
          <li>Minimal and easy to use with features that are relevant</li>
        </ul>
      </div>
      <div class="compare_item">
        <p class="app_name">
          {{ details.name }}
        </p>
        <p class="text--small app_price grey">
          {{ details.price }}
        </p>
        <ul>
          <li
            v-for="(desc, descIndex) in details.price_desc"
            :key="`desc_${descIndex}`"
          >
            {{ desc }}
          </li>
        </ul>
      </div>
    </div>
    <div class="spacer--large" />
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
