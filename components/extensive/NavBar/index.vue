<template>
  <div class="flex justify-between items-center mb-16">
    <nuxt-link to="/" title="Home">
      <inline-svg
        id="logo--home"
        class="h-12 w-auto hover:opacity-60 transition-opacity"
        :src="require('../../../assets/svg/LogoV12.svg')"
      />
    </nuxt-link>
    <div
      style="z-index: 60"
      class="flex bg-white dark:bg-gray-800 fixed top-8 right-6 p-4 rounded-lg shadow-lg sm:bg-transparent sm:relative sm:top-0 sm:right-0 sm:shadow-none"
    >
      <darkmode-toggle />
      <inline-svg
        :src="require('../../../assets/svg/hamburger.svg')"
        class="cursor-pointer hover:opacity-60 transition-all"
        @click="$parent.openNav = true"
      />
    </div>
  </div>
</template>

<script>
import DarkmodeToggle from "../../generic/DarkmodeToggle";

export default {
  components: {
    DarkmodeToggle,
  },
};
</script>
