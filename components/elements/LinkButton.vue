<template>
  <a :href="link" :target="newTab && '_blank'" rel="noreferrer" :class="`link-button inline-block font-bold text-white dark:text-slate px-6 py-3 bg-slate dark:bg-white rounded hover:opacity-60 focus:opacity-60 active:scale-95 transition-all w-fit ${buttonClass}`">
    <slot />
  </a>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      default: "",
    },
    newTab: {
      type: Boolean,
      default: true,
    },
    buttonClass: {
      type: String,
      default: "",
    },
  },
};
</script>
