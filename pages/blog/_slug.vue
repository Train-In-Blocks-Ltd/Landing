<style scoped>
  @media (min-width: 1440px) {
    .blog--body {
      padding: 0 20rem
    }
  }
  @media (max-width: 992px) {
    .blog--body {
      padding: 0 6rem
    }
  }
  @media (max-width: 768px) {
    .blog--body {
      padding: 0 4rem
    }
  }
  @media (max-width: 567px) {
    .blog--body {
      padding: 0;
      background-color: white
    }
  }
</style>

<template>
  <div class="blog--body">
    <!--eslint-disable-next-line-->
    <a href="http://localhost:3000/blog" class="back_text">Back</a>
    <br><br>
    <div class="container--content" v-html="html" />
  </div>
</template>

<script>
export default {
  async asyncData ({ params }) {
    try {
      const post = await require(`~/content/blog/${params.slug}.md`)
      return {
        html: post.html,
        excerpt: post.attributes.excerpt,
        title: post.attributes.title,
        img: post.attributes.img
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
    this.$parent.$parent.metaHelper.image = this.img
    this.$parent.$parent.metaHelper.url = 'https://traininblocks.com/blog/' + this.$route.params.slug + '/'
  }
}
</script>
