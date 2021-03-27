<style scoped>
  a {
    text-decoration: none;
    color: var(--base_dark)
  }
</style>

<template>
  <div>
    <h1>
      Thank you!
    </h1>
    <h1 class="accent_text">
      You will receive an email to finish your sign-up
    </h1>
    <div class="spacer" />
    <h2>
      It can take up to an hour for the email to arrive. Be sure to check your inbox and spam mail.
    </h2>
    <h2 class="accent_text">
      Meanwhile, click <a href="https://traininblocks.atlassian.net/servicedesk/customer/portal/3/topic/479be3f0-30e6-49ed-aa9c-c944d2f6b0a9">here</a> to learn how to use the app.
    </h2>
    <div class="spacer" />
  </div>
</template>

<script>
export default {
  beforeCreate () {
    this.$parent.$parent.metaHelper.title = 'Success'
  },
  head () {
    return {
      meta: [
        { hid: 'robots', name: 'robots', content: 'noindex' }
      ]
    }
  }
}
</script>
