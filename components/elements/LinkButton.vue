<template>
  <a :href="link" :target="newTab && '_blank'">
    <div
      :class="`font-bold text-white dark:text-gray-800 px-6 py-3 bg-gray-800 dark:bg-white rounded hover:opacity-60 transition-all w-fit ${buttonClass}`"
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
