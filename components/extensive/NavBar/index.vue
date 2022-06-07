<template>
  <div class="flex justify-between items-center mb-16">
    <nuxt-link to="/" title="Home">
      <img
        id="logo--home"
        class="h-12 w-auto hover:opacity-60 transition-opacity duration-300 rounded-none"
        :src="require('../../../assets/svg/LogoV12.svg?inline')"
        height="48"
        width="117.469"
      />
    </nuxt-link>
    <div
      style="z-index: 60"
      class="flex bg-white dark:bg-gray-800 fixed top-14 right-4 md:right-8 p-4 rounded-lg shadow-lg"
    >
      <darkmode-toggle />
      <img
        :src="require('../../../assets/svg/hamburger.svg?inline')"
        class="cursor-pointer hover:opacity-60 transition-all rounded-none"
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
