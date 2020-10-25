<style scoped>
  a {
    text-decoration: none;
    color: #282828
  }
</style>

<template>
  <div>
    <p class="text--large">
      Thank you!
    </p>
    <p class="text--large grey">
      You will receive an email to finish your sign-up
    </p>
    <div class="spacer" />
    <p class="text--small">
      It can take up to an hour for the email to arrive. Be sure to check your inbox and spam mail.
    </p>
    <p class="text--small grey">
      Meanwhile, click <a href="https://traininblocks.atlassian.net/servicedesk/customer/portal/3/topic/479be3f0-30e6-49ed-aa9c-c944d2f6b0a9">here</a> to learn how to use the app.
    </p>
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
