<style scoped>
.nav-link {
  @apply mb-6 hover:opacity-60 transition-all;
}
</style>

<template>
  <nuxt-link
    v-if="!aElement"
    :to="linkTo"
    class="nav-link"
    @click.native="onClick"
  >
    <txt type="title">{{ name }}</txt>
  </nuxt-link>
  <a v-else :href="linkTo" target="_blank" class="nav-link" @click="onClick">
    <txt type="title">{{ name }}</txt>
  </a>
</template>

<script>
import Txt from "../../../elements/Txt";

export default {
  components: {
    Txt,
  },
  props: {
    linkTo: {
      type: String,
      default: "/",
    },
    name: {
      type: String,
      default: "",
    },
    onClick: {
      type: Function,
      default: () => null,
    },
    aElement: Boolean,
  },
};
</script>
