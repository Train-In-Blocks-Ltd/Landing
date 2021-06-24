<style scoped>
  .dev_container {
    display: grid;
    grid-gap: 8rem;
    margin: 4rem 0
  }
  .dev_post {
    display: grid;
    grid-gap: 1rem;
    border: 3px solid var(--base_dark);
    border-radius: var(--border_rad_large);
    padding: 2rem
  }
  .dev_post__content {
    display: flex;
    flex-direction: column
  }
  .dev_post__link {
    display: grid;
    grid-template-columns: 100px 24px;
    grid-gap: .4rem;
    margin-top: 1rem;
    transition: grid-gap .4s, opacity .1s cubic-bezier(.165, .84, .44, 1)
  }
  .dev_post__link_text {
    color: var(--base_dark);
    margin: auto 0;
    text-decoration: none
  }
  .dev_post__link:hover {
    grid-gap: 1rem;
    opacity: .8
  }
  .dev_post__link:active {
    opacity: .4
  }

  /* Responsiveness */
  @media (max-width: 992px) {
    .dev_post {
      grid-template-columns: .8fr 1fr
    }
    .dev_post > img {
      filter: grayscale(0)
    }
    .dev_post__content {
      padding: 0
    }
    .dev_post__link:hover {
      grid-gap: .4rem;
      opacity: 1
    }
  }
  @media (max-width: 768px) {
    .dev_post {
      grid-template-columns: 1fr;
      grid-gap: 2rem
    }
  }
</style>

<template>
  <div>
    <h1>
      Join our development journey
    </h1>
    <div class="dev_container">
      <div v-for="(post, index) in posts" :key="`dev_${index}`" class="dev_post">
        <h3 class="no_margin">
          {{ post.show ? post.date : 'Update currently in the making' }}
        </h3>
        <div v-if="post.show" class="dev_post__content">
          <div>
            <h3 class="no_margin">
              {{ post.title }}
            </h3>
            <p>
              {{ post.postDesc }}
            </p>
          </div>
          <div class="dev_post__link">
            <nuxt-link class="dev_post__link_text" :to="`/dev/${post.slug}/`">
              Read more
            </nuxt-link>
            <inline-svg class="svg--read-more" :src="require('../../assets/svg/Arrow.svg')" />
          </div>
        </div>
        <h3 v-else class="accent_text no_margin">
          Check again soon...
        </h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData ({ $content }) {
    const posts = await $content('dev').fetch()
    posts.sort((b, a) => {
      return a.id - b.id
    })
    return { posts }
  },
  beforeCreate () {
    this.$parent.$parent.metaHelper.title = 'Development Log'
    this.$parent.$parent.metaHelper.description = 'We are extremely active and always developing the most elegant solution for you. Follow our journey here.'
    this.$parent.$parent.metaHelper.url = 'https://traininblocks.com/dev/'
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
        }
      ]
    }
  }
}
</script>
