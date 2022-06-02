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
  @apply absolute cursor-pointer inset-0 bg-gray-800 dark:bg-white rounded-full transition-all;
}
.slider:before {
  content: "";
  @apply absolute h-5 w-5 left-1 bottom-1 bg-white dark:bg-gray-800 rounded-full transition-all;
}
input:checked + .slider {
  background-color: var(--base_dark);
  @apply bg-gray-800 dark:bg-white;
}
input:checked + .slider:before {
  @apply translate-x-5;
}
</style>

<template>
  <div class="flex items-center mr-2 md:mr-6">
    <inline-svg
      :src="require('../../assets/svg/darkmode.svg')"
      :class="{ darkmode: darkmodeOn }"
      class="mode_icon"
    />
    <label class="switch">
      <input v-model="darkmodeOn" type="checkbox" aria-label="Darkmode" />
      <span :class="{ darkmode: darkmodeOn }" class="slider" />
    </label>
  </div>
</template>

<script>
export default {
  data() {
    return {
      darkmodeOn: false,
    };
  },
  watch: {
    darkmodeOn(state) {
      if (state) localStorage.setItem("darkmode", true);
      else localStorage.removeItem("darkmode");
      this.darkmode();
    },
  },
  beforeMount() {
    const darkModeMediaQuery = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );
    darkModeMediaQuery.addEventListener("change", (e) => {
      this.darkmodeOn = e.matches;
    });
    if (localStorage.getItem("darkmode") || darkModeMediaQuery.matches)
      this.darkmodeOn = true;
  },
  methods: {
    darkmode() {
      if (this.darkmodeOn) {
        document.documentElement.setAttribute("class", "dark");
        this.$parent.$parent.theme = "Dark";
      } else {
        document.documentElement.removeAttribute("class");
        this.$parent.$parent.theme = "Light";
      }
    },
  },
};
</script>
