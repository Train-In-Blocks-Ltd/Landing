<template>
  <div>
    <div
      v-if="$parent.openNav"
      style="z-index: 70"
      class="fixed top-0 left-0 bg-white dark:bg-slate h-full w-full"
    />
    <nav style="z-index: 80" class="fixed right-12 top-8 z-20">
      <transition enter-active-class="fadeIn">
        <div v-show="$parent.openNav" class="flex flex-col items-end">
          <a
            class="mb-6 cursor-pointer hover:opacity-60 transition-all rounded-none"
            href="#"
            @click.prevent="$parent.openNav = false"
            v-html="require('../../../assets/svg/close.svg?include')"
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
          <nav-menu-link
            link-to="/dev/"
            name="News"
            :on-click="() => ($parent.openNav = false)"
          />
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
  props: {
    openNav: Boolean
  },
  watch: {
    openNav() {
      setTimeout(() => {
        if (this.openNav) {
          // add all the elements inside modal which you want to make focusable
          const  focusableElements =
              'button:not(:disabled), [href], input:not(:disabled), select, textarea, [tabindex]:not([tabindex="-1"])';
          const nav = this.$el; // select the navigation

          const firstFocusableElement = nav.querySelectorAll(focusableElements)[0]; // get first element to be focused inside modal
          const focusableContent = nav.querySelectorAll(focusableElements);
          const lastFocusableElement = focusableContent[focusableContent.length - 1]; // get last element to be focused inside modal

          document.addEventListener('keydown', function(e) {
            const isTabPressed = e.key === 'Tab' || e.keyCode === 9;

            if (!isTabPressed) {
              return;
            }

            if (e.shiftKey) { // if shift key pressed for shift + tab combination
              if (document.activeElement === firstFocusableElement) {
                lastFocusableElement.focus(); // add focus for the last focusable element
                e.preventDefault();
              }
            } else if (document.activeElement === lastFocusableElement) { // if focused has reached to last focusable element then focus first focusable element after pressing tab
              firstFocusableElement.focus(); // add focus for the first focusable element
              e.preventDefault();
            }
          });

          firstFocusableElement.focus();
        }
      }, 100);
    }
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
