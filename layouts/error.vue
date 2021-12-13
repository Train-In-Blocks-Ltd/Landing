<template>
  <div class="container">
    <p v-if="error.statusCode === 404" class="text--large">Page not found</p>
    <p v-else class="text--large">An error occurred</p>
    <nuxt-link to="/"> Home page </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  computed: {
    statusCode() {
      return (this.error && this.error.statusCode) || 500;
    },
  },
  mounted() {
    // eslint-disable-next-line
    console.error(this.error);
  },
};
</script>
