<style>
.default-button {
  @apply select-none cursor-pointer self-center rounded border-none px-6 py-3 font-bold text-white dark:text-slate transition-all hover:opacity-60 active:scale-95 disabled:opacity-60 disabled:cursor-default;
}
</style>

<template>
  <button
    v-if="prevent"
    :class="{
      'bg-tomato': theme === 'red',
      'bg-pine': theme === 'green',
      'bg-slate dark:bg-white ': theme === 'normal',
    }"
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
    :class="{
      'bg-tomato': theme === 'red',
      'bg-pine': theme === 'green',
      'bg-slate dark:bg-white ': theme === 'normal',
    }"
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
      default: "normal",
    },
    onClick: {
      type: [Function, Promise],
      default: () => {},
    },
    onClickPrevent: {
      type: [Function, Promise],
      default: () => {},
    },
    prevent: Boolean,
  },
};
</script>
