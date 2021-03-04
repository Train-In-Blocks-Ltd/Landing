<style>
  .blog_html h2 {
    margin-top: 3rem
  }
</style>

<style scoped>
  .blog_body {
    padding: 0 6rem
  }
  .blog_body > img {
    display: flex;
    margin: auto;
    width: 60%;
    border-radius: 10px;
    box-shadow: 0 0 20px 10px #28282810
  }
  .back_text {
    position: fixed;
    top: 50vh;
    left: 2rem;
    transform: rotate(-90deg);
    text-decoration: none
  }

  /* Responsiveness */
  @media (max-width: 768px) {
    .blog_body > img {
      width: 100%
    }
    .blog_body {
      padding: 0 2.4rem
    }
  }
  @media (max-width: 567px) {
    .blog_body {
      padding: 0
    }
    .blog_body > img {
      margin-top: 2rem
    }
    .back_text {
      top: 0;
      left: 0;
      font-size: 1.6rem;
      position: static
    }
  }
</style>

<template>
  <div class="blog_body">
    <!--eslint-disable-next-line-->
    <nuxt-link to="/blog/" class="back_text">
      Back
    </nuxt-link>
    <img :src="require(`../../static/blog-img${img}`)">
    <br><br>
    <h1>{{ title }}</h1>
    <div class="blog_html" v-html="html" />
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
