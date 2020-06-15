<style scoped>
  .blog--body {
    padding: 6rem;
    background-color: #F6F6F6
  }
  .container--share {
    display: grid;
    grid-gap: 1rem;
    margin: 2rem 0
  }
  .container--share h3 {
    margin: 0
  }
  .container--share a {
    cursor: pointer;
    position: relative;
    width: fit-content;
    border: 0
  }
  .container--share a:before {
    content: '';
    position: absolute;
    width: 0%;
    height: 2px;
    bottom: -8px;
    left: 0;
    background-color: #282828;
    opacity: 0;
    transition: all .6s cubic-bezier(.075, .82, .165, 1)
  }
  .container--share a:hover:before {
    opacity: 1;
    width: 100%
  }
  .container--share a:active {
    opacity: .6
  }
  @media (min-width: 1440px) {
    .blog--body {
      padding: 6rem 20rem
    }
  }
  @media (max-width: 992px) {
    .blog--body {
      padding: 6rem
    }
  }
  @media (max-width: 768px) {
    .container--share a:hover:before {
      opacity: 0
    }
    .blog--body {
      padding: 4rem
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
    <div v-html="html" />
    <div class="container--share">
      <h3>Share on:</h3>
      <ShareNetwork
        network="facebook"
        :title="title"
        :url="'https://www.traininblocks.com/blog/'"
      >
        Facebook
      </ShareNetwork>
      <ShareNetwork
        network="twitter"
        :title="title"
        :url="'https://www.traininblocks.com/blog/' + this.$route.params.slug"
        twitter-user="traininblocks"
      >
        Twitter
      </ShareNetwork>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData ({ params }) {
    try {
      const post = await require(`~/content/${params.slug}.md`)
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
  }
}
</script>
