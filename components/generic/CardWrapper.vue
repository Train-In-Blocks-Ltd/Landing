<template>
  <div
    :class="[
      {
        'hover:shadow-lg': !noHover,
        shadow: hasShadow,
        'border-3 border-slate dark:border-white':
          !noBorder && !(theme === 'green' || theme === 'red'),
        'border-3 border-pine dark:border-white':
          !noBorder && theme === 'green',
        'border-3 border-tomato dark:border-white':
          !noBorder && theme === 'red',
      },
    ]"
    class="rounded-lg text-slate dark:text-white bg-white dark:bg-slate transition-all"
  >
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    noHover: Boolean,
    noBorder: Boolean,
    hasShadow: Boolean,
    theme: String,
  },
};
</script>
