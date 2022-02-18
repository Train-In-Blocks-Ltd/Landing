<template>
  <div class="container">
    <div class="mb-8">
      <txt v-if="error.statusCode === 404" type="title" is-main
        >404 Page not found</txt
      >
      <txt v-else type="title" grey>An error occurred</txt>
    </div>
    <nuxt-link to="/">
      <txt type="large-body" class="hover:opacity-60 transition-opacity"
        >Return to home page</txt
      >
    </nuxt-link>
  </div>
</template>

<script>
import Txt from "../components/elements/Txt";

export default {
  components: {
    Txt,
  },
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
