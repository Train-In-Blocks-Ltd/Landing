<template>
  <a :href="link" :target="newTab && '_blank'" rel="noreferrer">
    <div
      :class="`inline-block font-bold text-white dark:text-slate px-6 py-3 bg-slate dark:bg-white rounded hover:opacity-60 transition-all w-fit ${buttonClass}`"
    >
      <slot />
    </div>
  </a>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      default: "",
    },
    newTab: Boolean,
    buttonClass: String,
  },
};
</script>
