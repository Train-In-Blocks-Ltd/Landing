<template>
  <div>
    <h1>
      Thank you!
    </h1>
    <h2 class="accent_text">
      You will receive an email to finish your sign-up
    </h2>
    <div class="spacer" />
    <h3>
      It can take up to an hour for the email to arrive. Be sure to check your inbox and spam mail.
    </h3>
    <h3 class="accent_text">
      Meanwhile, click <nuxt-link to="/help/" class="text--small">here</nuxt-link> to learn how to use the app.
    </h3>
    <div class="spacer" />
  </div>
</template>

<script>
export default {
  head () {
    return {
      meta: [
        { hid: 'robots', name: 'robots', content: 'noindex' }
      ]
    }
  },
  beforeCreate () {
    this.$parent.$parent.metaHelper.title = 'Success'
  }
}
</script>
