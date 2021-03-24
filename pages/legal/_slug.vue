<style>
  .legal_html h2 {
    margin-top: 3rem
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
    <div class="legal_html" v-html="html" />
  </div>
</template>

<script>
export default {
  async asyncData ({ params }) {
    try {
      const post = await require(`~/content/legal/${params.slug}.md`)
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
  }
}
</script>
