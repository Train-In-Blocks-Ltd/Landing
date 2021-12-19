<template>
  <div>
    <div
      v-if="$parent.openNav"
      style="z-index: 70"
      class="fixed top-0 left-0 bg-white dark:bg-gray-800 h-full w-full"
    />
    <nav style="z-index: 80" class="fixed right-12 top-8 z-20">
      <transition enter-active-class="fadeIn">
        <div v-show="$parent.openNav" class="flex flex-col items-end">
          <inline-svg
            :src="require('../../../assets/svg/close.svg')"
            class="mb-6 cursor-pointer hover:opacity-60 transition-all"
            @click="$parent.openNav = false"
          />
          <nav-menu-link
            link-to="https://app.traininblocks.com"
            name="Log In"
            :on-click="() => ($parent.openNav = false)"
            new-tab
            a-element
          />
          <nav-menu-link
            link-to="/"
            name="Home"
            :on-click="() => ($parent.openNav = false)"
          />
          <nav-menu-link
            link-to="javascript:void(0)"
            name="Features"
            :on-click="
              () => {
                $parent.openNav = false;
                scroll('features');
              }
            "
            a-element
          />
          <nav-menu-link
            link-to="javascript:void(0)"
            name="Pricing"
            :on-click="
              () => {
                $parent.openNav = false;
                scroll('pricing');
              }
            "
            a-element
          />
          <nav-menu-link
            link-to="/blog/"
            name="Blog"
            :on-click="() => ($parent.openNav = false)"
          />
          <!-- <nav-menu-link
            link-to="/dev/"
            name="News"
            :on-click="() => ($parent.openNav = false)"
          /> -->
          <!-- <nav-menu-link
            link-to="/help/"
            name="Help"
            :on-click="() => ($parent.openNav = false)"
          /> -->
        </div>
      </transition>
    </nav>
  </div>
</template>

<script>
import NavMenuLink from "./components/NavMenuLink";

export default {
  components: {
    NavMenuLink,
  },
  methods: {
    scroll(link) {
      this.$router.push("/");
      setTimeout(
        () => {
          document.getElementById(link).scrollIntoView({ behavior: "smooth" });
        },
        this.$nuxt.$route.path === "/" ? 0 : 1000
      );
    },
  },
};
</script>
