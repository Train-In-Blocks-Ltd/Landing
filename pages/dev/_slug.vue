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
    <nuxt-link to="/dev/" class="back_text">
      Back
    </nuxt-link>
    <h1>
      {{ post.title }}
    </h1>
    <nuxt-content class="dev_html" :document="post" />
  </div>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const post = await $content('dev', params.slug).fetch()
    return { post }
  },
  mounted () {
    this.$parent.$parent.metaHelper.title = this.post.title
    this.$parent.$parent.metaHelper.description = this.post.postDesc
    this.$parent.$parent.metaHelper.image = this.post.img
    this.$parent.$parent.metaHelper.url = `https://traininblocks.com/dev/${this.$route.params.slug}/`
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
              "name": "Dev Blog",
              "item": "https://traininblocks.com/dev/"
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
