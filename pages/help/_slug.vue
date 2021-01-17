<style scoped>
  @media (min-width: 2560px) {
    .help--body {
      padding: 0 20rem
    }
  }
  @media (max-width: 992px) {
    .help--body {
      padding: 0 6rem
    }
  }
  @media (max-width: 768px) {
    .help--body {
      padding: 0 4rem
    }
  }
  @media (max-width: 567px) {
    .help--body {
      padding: 0;
      background-color: white
    }
  }
</style>

<template>
  <div class="help--body">
    <!--eslint-disable-next-line-->
    <a href="http://localhost:3000/help" class="back_text">Back</a>
    <br><br>
    <div class="container--content" v-html="html" />
  </div>
</template>

<script>
export default {
  async asyncData ({ params }) {
    try {
      const post = await require(`~/content/help/${params.slug}.md`)
      return {
        html: post.html,
        excerpt: post.attributes.excerpt,
        title: post.attributes.title
      }
    } catch (err) {
      // eslint-disable-next-line
      console.debug(err)
      return false
    }
  },
  mounted () {
    this.$parent.$parent.metaHelper.title = this.title
    this.$parent.$parent.metaHelper.description = this.excerpt
    this.$parent.$parent.metaHelper.url = 'https://traininblocks.com/help/' + this.$route.params.slug + '/'
  }
}
</script>
