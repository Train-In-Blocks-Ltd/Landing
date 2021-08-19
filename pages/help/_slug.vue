<style>
.help_html h2 {
  font-size: 1.4rem;
  margin-top: 3rem
}
.help_html h3 {
  font-size: 1rem;
  margin-top: 2rem
}
</style>

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
    <a href="http://www.traininblocks.com/help" class="back_text">Back</a>
    <nuxt-content class="help_html" :document="post" />
  </div>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const post = await $content('help', params.slug).fetch()
    return { post }
  },
  mounted () {
    this.$parent.$parent.metaHelper.title = this.post.title
    this.$parent.$parent.metaHelper.description = this.post.postDesc
    this.$parent.$parent.metaHelper.url = `https://traininblocks.com/help/${this.$route.params.slug}/`
  },
  head () {
    return {
      __dangerouslyDisableSanitizers: ['script'],
      script: [
        {
          innerHTML: `{
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [{
              "@type": "ListItem",
              "position": 2,
              "name": "Help",
              "item": "https://traininblocks.com/help/"
            }]
          }`,
          type: 'application/ld+json'
        },
        {
          innerHTML: `{
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [{
              "@type": "ListItem",
              "position": 3,
              "name": "${this.post.title}",
              "item": "https://traininblocks.com/legal/${this.$route.params.slug}/"
            }]
          }`,
          type: 'application/ld+json'
        }
      ]
    }
  }
}
</script>
