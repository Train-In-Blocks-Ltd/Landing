<style>
.blog_html h2 {
  font-size: 1.4rem;
  margin-top: 2rem
}
.blog_html h3 {
  font-size: 1rem;
  margin-top: 3rem
}
</style>

<style scoped>
  .blog_body > img {
    display: flex;
    margin: auto;
    width: 60%;
    border-radius: 10px;
    box-shadow: var(--low_shadow)
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
    .back_text {
      left: .8rem
    }
  }
  @media (max-width: 567px) {
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
    <nuxt-link to="/blog" class="back_text">
      Back
    </nuxt-link>
    <img :src="require(`../../static/blog-img/${post.img}`)">
    <br><br>
    <h1>
      {{ post.title }}
    </h1>
    <nuxt-content class="blog_html" :document="post" />
  </div>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const post = await $content('blog', params.slug).fetch()
    return { post }
  },
  mounted () {
    this.$parent.$parent.metaHelper.title = this.post.title
    this.$parent.$parent.metaHelper.description = this.post.postDesc
    this.$parent.$parent.metaHelper.image = this.post.img
    this.$parent.$parent.metaHelper.url = `https://traininblocks.com/blog/${this.$route.params.slug}`
  }
}
</script>
