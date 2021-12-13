<template>
  <div
    :class="[
      {
        'hover:shadow-lg': !noHover,
        'shadow': hasShadow,
        'border-4 border-gray-800': !noBorder,
      },
    ]"
    class="rounded-lg text-gray-800 bg-white transition-all"
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
  },
};
</script>
