<style>
#logo--home svg {
  height: 36px;
  width: 85.85px;
}
.menu-container {
  height: 68px;
}
@media (min-width: 400px) {
  #logo--home svg {
    height: 48px;
    width: 117.469px;
  }
  .menu-container {
    height: 80px;
  }
}
</style>

<template>
  <div
    class="flex justify-between items-center pt-16 mb-24 sticky top-0 left-4 md:left-8 right-4 md:right-8 pointer-events-none"
    style="z-index: 60"
  >
    <nuxt-link
      to="/"
      title="Home"
      class="rounded-none bg-white dark:bg-slate rounded-lg shadow-lg p-4 pointer-events-auto"
    >
      <span
        id="logo--home"
        class="w-auto hover:opacity-60 transition-opacity duration-300"
        v-html="require('../../../assets/svg/LogoV12.svg?include')"
      />
    </nuxt-link>
    <div
      class="menu-container flex bg-white dark:bg-slate p-4 rounded-lg shadow-lg items-center pointer-events-auto"
    >
      <darkmode-toggle />
      <span
        class="cursor-pointer hover:opacity-60 transition-all rounded-none"
        @click="$parent.openNav = true"
        v-html="require('../../../assets/svg/hamburger.svg?include')"
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
