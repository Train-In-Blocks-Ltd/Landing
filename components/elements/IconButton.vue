<template>
  <div
    class="flex items-center cursor-pointer hover:opacity-60 transition-opacity"
    @click="
      () => {
        if (onClick) onClick();
      }
    "
  >
    <span
      :class="svgClass + ' rounded-none'"
      :style="{ height: `${iconSize}px`, width: `${iconSize}px` }"
      v-html="require(`@/assets/svg/${svg}.svg?include`)"
    />
  </div>
</template>

<script>
export default {
  props: {
    svg: String,
    svgClass: String,
    iconSize: Number,
    onClick: Function,
  },
};
</script>
