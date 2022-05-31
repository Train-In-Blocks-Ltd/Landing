<template>
  <div
    class="flex items-center cursor-pointer hover:opacity-60 transition-opacity"
    @click="
      () => {
        if (onClick) onClick();
      }
    "
  >
    <img
      :class="svgClass + ' rounded-none'"
      :style="{ height: `${iconSize}px`, width: `${iconSize}px` }"
      :src="require(`@/assets/svg/${svg}.svg?inline`)"
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
