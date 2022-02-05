<template>
  <footer class="grid gap-4 border-t-3 border-gray-800 dark:border-white py-12">
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
          :src="require('../../../assets/svg/socials/fb.svg')"
        />
      </a>
      <a
        target="_blank"
        href="https://www.instagram.com/traininblocks"
        title="Instagram"
        class="mr-4"
      >
        <inline-svg
          class="w-8"
          :src="require('../../../assets/svg/socials/ig.svg')"
        />
      </a>
      <a
        target="_blank"
        href="https://www.twitter.com/traininblocks"
        title="Twitter"
        class="mr-4"
      >
        <inline-svg
          class="w-8"
          :src="require('../../../assets/svg/socials/tw.svg')"
        />
      </a>
      <a
        target="_blank"
        href="https://www.linkedin.com/company/53423409"
        title="LinkedIn"
      >
        <inline-svg
          class="w-8"
          :src="require('../../../assets/svg/socials/lk.svg')"
        />
      </a>
    </div>
    <div>
      <txt type="tiny" class="mt-4" bold>Train In Blocks Ltd</txt>
      <txt type="tiny">12515717</txt>
      <txt type="tiny">Wallingford, OX10 8AD, United Kingdom</txt>
      <txt type="tiny">Registered in England & Wales</txt>
    </div>
    <div class="sm:flex mt-6">
      <nuxt-link class="sm:mr-4" to="/legal/privacy-and-data-policy/">
        <txt type="tiny" class="hover:opacity-60 transition-opacity"
          >Privacy and Data Policy</txt
        >
      </nuxt-link>
      <nuxt-link class="sm:mr-4" to="/legal/cookies-policy/">
        <txt type="tiny" class="hover:opacity-60 transition-opacity"
          >Cookies Policy</txt
        >
      </nuxt-link>
      <nuxt-link class="sm:mr-4" to="/legal/terms-of-use/">
        <txt type="tiny" class="hover:opacity-60 transition-opacity"
          >Terms of Use</txt
        >
      </nuxt-link>
      <a
        href="https://status.traininblocks.com"
        class="hover:opacity-60 transition-opacity text-sm"
      >
        Status
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
