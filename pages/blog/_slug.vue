<style scoped>
  .container--share {
    display: grid;
    grid-gap: 1rem;
    margin: 2rem 0
  }
  .container--share h3 {
    margin: 0
  }
</style>

<template>
  <div>
    <component :is="singlePostComponent" />
    <div class="container--share">
      <h3>Share on:</h3>
      <ShareNetwork
        network="facebook"
        :url="'https://www.traininblocks.com' + this.$route.fullPath"
      >
      Facebook
      </ShareNetwork>
      <ShareNetwork
        network="twitter"
        :url="'https://www.traininblocks.com' + this.$route.fullPath"
      >
      Twitter
      </ShareNetwork>
      <ShareNetwork
        network="linkedin"
        :url="'https://www.traininblocks.com' + this.$route.fullPath"
      >
      LinkedIn
      </ShareNetwork>
    </div>
  </div>
</template>

<script>
export default {
  head () {
    return {
      title: 'Learn',
      meta: [
        { hid: 'description', name: 'description', content: 'We love for you to get involved in our development. Vote for new features and join our community of health and fitness professionals.' },
        { hid: 'og:title', content: 'Here’s Our Journey, Join Us' },
        { hid: 'twitter:title', content: 'Here’s Our Journey, Join Us' },
        { hid: 'og:url', content: '/learn' }
      ]
    }
  },
  async asyncData({ params }) {
    try {
      console.info(params.slug);
      let post = await import(`~/content/${params.slug}.md`);
      return {
        title: post.attributes.title,
        singlePostComponent: post.vue.component
      };
    } catch (err) {
      console.debug(err);
      return false;
    }
  }
};
</script>