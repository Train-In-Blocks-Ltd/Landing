<style>
.legal_html h2 {
  font-size: 1.4rem;
  margin-top: 3rem
}
.legal_html h3 {
  font-size: 1rem;
  margin-top: 2rem
}
.legal_html li {
  list-style-type: lower-roman
}
</style>

<style scoped>
  @media (min-width: 2560px) {
    .legal--body {
      padding: 0 20rem
    }
  }
  @media (max-width: 992px) {
    .legal--body {
      padding: 0 6rem
    }
  }
  @media (max-width: 768px) {
    .legal--body {
      padding: 0 4rem
    }
  }
  @media (max-width: 567px) {
    .legal--body {
      padding: 0;
      background-color: white
    }
  }
</style>

<template>
  <div class="legal--body">
    <nuxt-content class="legal_html" :document="post" />
  </div>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const post = await $content('legal', params.slug).fetch()
    return { post }
  },
  mounted () {
    this.$parent.$parent.metaHelper.title = this.post.title
    this.$parent.$parent.metaHelper.description = this.post.postDesc
    this.$parent.$parent.metaHelper.url = `https://traininblocks.com/legal/${this.$route.params.slug}`
  }
}
</script>
