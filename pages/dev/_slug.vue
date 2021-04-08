<style>
.dev_html h2 {
  font-size: 1.4rem;
  margin-top: 3rem
}
.dev_html h3 {
  font-size: 1rem;
  margin-top: 2rem
}
</style>

<style scoped>
.dev_body > img {
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
  .dev_body > img {
    width: 100%
  }
  .back_text {
    left: .8rem
  }
}
@media (max-width: 567px) {
  .dev_body > img {
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
  <div class="dev_body">
    <!--eslint-disable-next-line-->
    <nuxt-link to="/dev/" class="back_text">
      Back
    </nuxt-link>
    <h1>
      {{ title }}
    </h1>
    <div class="dev_html" v-html="html" />
  </div>
</template>

<script>
export default {
  async asyncData ({ params }) {
    try {
      const post = await require(`~/content/dev/${params.slug}.md`)
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
    this.$parent.$parent.metaHelper.url = 'https://traininblocks.com/dev/' + this.$route.params.slug + '/'
  }
}
</script>
