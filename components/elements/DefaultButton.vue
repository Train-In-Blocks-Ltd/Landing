<style scoped>
.default-button {
  @apply select-none cursor-pointer self-center rounded border-none px-6 py-3 font-bold text-white bg-gray-800 transition-all hover:opacity-75 active:scale-95;
}
</style>

<template>
  <button
    v-if="onClickPrevent"
    :class="theme"
    :disabled="isDisabled"
    class="default-button"
    @click.prevent="
      () => {
        if (onClickPrevent) onClickPrevent();
      }
    "
  >
    <slot />
  </button>
  <button
    v-else
    :class="theme"
    :disabled="isDisabled"
    class="default-button"
    @click="
      () => {
        if (onClick) onClick();
      }
    "
  >
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    theme: {
      type: String,
      default: "normal"
    },
    onClick: {
      type: [Function, Promise],
      default: () => {}
    },
    onClickPrevent: {
      type: [Function, Promise],
      default: () => {}
    },
    isDisabled: Boolean,
  },
};
</script>
