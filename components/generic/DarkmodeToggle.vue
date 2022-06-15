<style>
.mode_icon {
  @apply w-5 h-5 m-auto mr-4;
}
.mode_icon :is(.sun, .moon) {
  @apply transition-all;
}
.mode_icon .moon,
.darkmode .sun {
  @apply opacity-0;
}
.darkmode .moon {
  @apply opacity-100;
}
.switch {
  @apply relative inline-block w-12 h-7;
}
.switch input {
  @apply opacity-0 w-0 h-0;
}
.slider {
  @apply absolute cursor-pointer inset-0 bg-slate dark:bg-white rounded-full transition-all;
}
.slider:before {
  content: "";
  @apply absolute h-5 w-5 left-1 bottom-1 bg-white dark:bg-slate rounded-full transition-all;
}
input:checked + .slider {
  background-color: var(--base_dark);
  @apply bg-slate dark:bg-white;
}
input:checked + .slider:before {
  @apply translate-x-5;
}
</style>

<template>
  <div class="flex items-center mr-6">
    <span
      :class="{ darkmode: $parent.$parent.darkmodeOn }"
      class="mode_icon rounded-none"
      v-html="require('../../assets/svg/darkmode.svg?include')"
    />
    <label class="switch">
      <input
        v-model="$parent.$parent.darkmodeOn"
        type="checkbox"
        aria-label="Darkmode"
      />
      <span :class="{ darkmode: $parent.$parent.darkmodeOn }" class="slider" />
    </label>
  </div>
</template>
