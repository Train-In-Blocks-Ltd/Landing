<template>
  <nuxt-link :to="link" class="sm:fixed sm:left-6 sm:top-1/2">
    <txt class="mb-8 sm:mb-0 hover:opacity-60 transition-all sm:-rotate-90" bold
      >Back</txt
    >
  </nuxt-link>
</template>

<script>
import Txt from "../elements/Txt";

export default {
  components: {
    Txt,
  },
  props: {
    link: {
      type: String,
      default: "",
    },
  },
};
</script>
