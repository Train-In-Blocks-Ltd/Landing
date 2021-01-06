<template>
  <div class="container">
    <p class="text--large" v-if="error.statusCode === 404">
      Page not found
    </p>
    <p class="text--large" v-else>
      An error occurred
    </p>
    <nuxt-link to="/">
      Home page
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  computed: {
    statusCode () {
      return (this.error && this.error.statusCode) || 500
    }
  },
  mounted () {
    // eslint-disable-next-line
    console.error(this.error)
  }
}
</script>
