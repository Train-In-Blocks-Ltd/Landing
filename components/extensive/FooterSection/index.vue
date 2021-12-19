<style scoped>
#mc-embedded-subscribe-form {
  @apply mb-8;
}
#mc-embedded-subscribe-form label {
  @apply font-bold text-gray-800 dark:text-white;
}
#mc-embedded-subscribe {
  @apply select-none cursor-pointer self-center rounded border-none px-6 py-2 font-bold text-white dark:text-gray-800 text-sm bg-gray-800 dark:bg-white transition-all hover:opacity-60 active:scale-95;
}
#mce-EMAIL {
  @apply w-full px-2 py-3 font-sans outline-none text-base bg-transparent text-gray-800 dark:text-white border-2 border-gray-400 dark:border-gray-200 rounded-lg hover:border-gray-800 focus:border-gray-800 dark:hover:border-white dark:focus:border-white transition-all;
}
</style>

<template>
  <footer
    class="flex flex-col items-center border-t-4 border-gray-800 dark:border-white py-12"
  >
    <CookieControl>
      <template #bar>
        <txt type="tiny">
          We use cookies and other tracking technologies to improve your
          browsing experience on our site, analyze site traffic, and understand
          where our audience is coming from. To find out more, please read our
          <nuxt-link to="/legal/cookies-policy/">
            <txt type="tiny" bold>Cookies Policy</txt>.
          </nuxt-link>
        </txt>
      </template>
    </CookieControl>
    <div class="flex">
      <a
        target="_blank"
        href="https://www.facebook.com/traininblocks"
        title="Facebook"
        class="mr-4"
      >
        <inline-svg
          class="w-8"
          :src="require('../../../assets/svg/socials/Facebook.svg')"
        />
      </a>
      <a
        target="_blank"
        href="https://www.instagram.com/traininblocks"
        title="Instagram"
      >
        <inline-svg
          class="w-8"
          :src="require('../../../assets/svg/socials/Instagram.svg')"
        />
      </a>
    </div>
    <form
      id="mc-embedded-subscribe-form"
      action="https://traininblocks.us8.list-manage.com/subscribe/post?u=a2c4d1f0522fa78cbfc518fc0&amp;id=73101450d0"
      method="post"
      name="mc-embedded-subscribe-form"
      class="validate flex flex-col items-center w-full sm:w-1/2 lg:w-1/3 my-12"
      target="_blank"
      novalidate
    >
      <label for="mce-EMAIL" class="mb-4">Sign up to our newsletter</label>
      <input
        id="mce-EMAIL"
        type="email"
        value=""
        name="EMAIL"
        class="email"
        placeholder="Email"
        required
      />
      <div style="position: absolute; left: -5000px" aria-hidden="true">
        <input
          type="text"
          name="b_a2c4d1f0522fa78cbfc518fc0_73101450d0"
          tabindex="-1"
          value=""
        />
      </div>
      <div class="clear mt-4">
        <input
          id="mc-embedded-subscribe"
          type="submit"
          value="Subscribe"
          name="subscribe"
          class="button"
        />
      </div>
    </form>
    <txt type="tiny" class="mt-4" bold>Train In Blocks Ltd</txt>
    <txt type="tiny">12515717</txt>
    <txt type="tiny">Wallingford, OX10 8AD, United Kingdom</txt>
    <txt type="tiny">Registered in England & Wales</txt>
    <div class="flex mt-6">
      <nuxt-link class="mr-4" to="/legal/privacy-and-data-policy/">
        <txt type="tiny">Privacy and Data Policy</txt>
      </nuxt-link>
      <nuxt-link class="mr-4" to="/legal/cookies-policy/">
        <txt type="tiny">Cookies Policy</txt>
      </nuxt-link>
      <nuxt-link class="mr-4" to="/legal/terms-of-use/">
        <txt type="tiny">Terms of Use</txt>
      </nuxt-link>
      <a href="https://status.traininblocks.com">
        <txt type="tiny">Status</txt>
      </a>
    </div>
  </footer>
</template>

<script>
import Txt from "../../elements/Txt";

export default {
  components: {
    Txt,
  },
};
</script>
