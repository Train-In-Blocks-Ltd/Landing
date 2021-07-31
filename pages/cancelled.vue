<style scoped>
  a {
    text-decoration: none;
    color: var(--base_dark)
  }
</style>

<template>
  <div>
    <h1>
      The checkout was cancelled...
    </h1>
    <h2 class="accent_text">
      Save big and spend less time managing your business and programmes.
    </h2>
    <div class="spacer" />
    <payment />
    <div class="spacer" />
    <benefits />
    <div class="spacer" />
  </div>
</template>

<script>
import Payment from '~/components/Payment'
import Benefits from '~/components/Benefits'

export default {
  components: {
    Payment,
    Benefits
  },
  beforeCreate () {
    this.$parent.$parent.metaHelper.title = 'Cancelled'
  },
  head () {
    return {
      meta: [
        { hid: 'robots', name: 'robots', content: 'noindex' }
      ]
    }
  }
}
</script>
