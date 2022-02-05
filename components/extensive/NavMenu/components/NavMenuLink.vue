<style scoped>
.nav-link {
  @apply mb-6 text-4xl font-bold hover:opacity-60 transition-all;
}
</style>

<template>
  <nuxt-link
    v-if="!aElement"
    :to="linkTo"
    class="nav-link"
    @click.native="onClick"
  >
    {{ name }}
  </nuxt-link>
  <a
    v-else-if="newTab"
    :href="linkTo"
    class="nav-link"
    target="_blank"
    rel="noreferrer"
  >
    {{ name }}
  </a>
  <a
    v-else
    :href="linkTo"
    class="nav-link"
    rel="noreferrer"
    @click.prevent="onClick"
  >
    {{ name }}
  </a>
</template>

<script>
export default {
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
    newTab: Boolean,
    aElement: Boolean,
  },
};
</script>
