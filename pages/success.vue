<template>
  <div>
    <txt type="title" is-main>Thank you!</txt>
    <txt type="large-body" class="mt-4 mb-16">
      You will receive an email to finish your sign-up
    </txt>
    <txt type="large-body">
      It can take up to an hour for the email to arrive. Be sure to check your
      inbox and spam mail.
    </txt>
    <txt type="large-body" class="mb-8">
      Meanwhile, click
      <nuxt-link to="/help/" class="underline">here</nuxt-link> to learn how to
      use the app.
    </txt>
    <txt type="large-body">
      Also, head over to our
      <nuxt-link to="/blog/" class="underline">blog</nuxt-link> to learn
      something new and find power in knowledge.
    </txt>
    <nuxt-link to="/">
      <txt type="large-body" class="underline mt-16" bold>Return Home</txt>
    </nuxt-link>
  </div>
</template>

<script>
import Txt from "~/components/elements/Txt.vue";

export default {
  components: {
    Txt,
  },
  head() {
    return {
      title: "Success",
      meta: [
        { hid: "robots", name: "robots", content: "noindex" },
        { hid: "og:title", name: "og:title", content: "Success" },
        { hid: "twitter:title", name: "twitter:title", content: "Success" },
      ],
      link: [
        {
          hid: "canonical",
          rel: "canonical",
          href: "https://traininblocks.com/success/",
        },
      ],
    };
  },
  mounted() {
    if (this.$route.query.value) {
      if (this.$cookies.isEnabled('Google Analytics')) {
        window.dataLayer.push("event", "conversion", {
          send_to: "AW-407043956/vgkJCLzAlLkDEPT-i8IB",
          value: this.$route.query.value,
          currency: "GBP",
        });
      }
      if (this.$cookies.isEnabled('Facebook Pixel')) {
        // eslint-disable-next-line no-undef
        fbq("track", "Purchase", {
          currency: "GBP",
          value: this.$route.query.value,
        });
      }
    }
  },
};
</script>
