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
    <txt type="large-body">
      Meanwhile, click
      <nuxt-link to="/help/" class="underline">here</nuxt-link> to learn how to
      use the app.
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
      meta: [{ hid: "robots", name: "robots", content: "noindex" }],
    };
  },
  beforeCreate() {
    this.$parent.$parent.metaHelper.title = "Success";
  },
};
</script>
