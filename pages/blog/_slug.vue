<style scoped>
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

  @media (max-width: 768px) {
    .container--share a:hover:before {
      opacity: 0
    }
  }
</style>

<template>
  <div>
    <component :is="singlePostComponent" />
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
        twitterUser="traininblocks"
      >
      Twitter
      </ShareNetwork>
    </div>
  </div>
</template>

<script>
export default {
  head () {
    return {
      title: this.title,
      meta: [
        { hid: 'description', name: 'description', content: this.excerpt },
        { hid: 'og:title', content: this.title },
        { hid: 'twitter:title', content: this.title },
        { hid: 'og:url', content: '/blog/' + this.$route.params.slug}
      ]
    }
  },
  async asyncData({ params }) {
    try {
      console.info(params.slug);
      let post = await import(`~/content/${params.slug}.md`);
      return {
        title: post.attributes.title,
        desc: post.attributes.excerpt,
        singlePostComponent: post.vue.component
      };
    } catch (err) {
      console.debug(err);
      return false;
    }
  }
};
</script>