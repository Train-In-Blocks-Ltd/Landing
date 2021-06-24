<style scoped>
.blog_container {
  display: grid;
  grid-gap: 8rem;
  margin: 4rem 0
}
.blog_post {
  display: grid;
  grid-template-columns: .5fr 1fr;
  grid-gap: 2rem
}
.blog_post > img {
  width: 100%;
  border-radius: 10px;
  box-shadow: var(--low_shadow);
  filter: grayscale(100%);
  transition: .6s all cubic-bezier(.165, .84, .44, 1)
}
.blog_post__content {
  display: flex;
  flex-direction: column;
  padding-top: 2rem
}
.blog_post__link {
  display: grid;
  grid-template-columns: 100px 24px;
  grid-gap: .4rem;
  margin: 2rem 0 0 0;
  transition: grid-gap .4s, opacity .1s cubic-bezier(.165, .84, .44, 1)
}
.blog_post__link_text {
  color: var(--base_dark);
  margin: auto 0;
  text-decoration: none
}
.blog_post__link:hover {
  grid-gap: 1rem;
  opacity: .8
}
.blog_post__link:active {
  opacity: .4
}
.focused_post img {
  filter: grayscale(0)
}

/* Responsiveness */
@media (max-width: 992px) {
  .blog_post {
    grid-template-columns: .8fr 1fr
  }
  .blog_post__content {
    padding: 0
  }
  .blog_post__link:hover {
    grid-gap: .4rem;
    opacity: 1
  }
}
@media (max-width: 768px) {
  .blog_post {
    grid-template-columns: 1fr;
    grid-gap: 2rem
  }
}
</style>

<template>
  <div>
    <h1>
      Find power in knowledge
    </h1>
    <div class="blog_container">
      <div v-for="post in posts" :key="post.title" class="blog_post">
        <img :src="require(`../../static/blog-img/${post.img}`)">
        <div class="blog_post__content">
          <div>
            <h3 class="no_margin">
              {{ post.title }}
            </h3>
            <p>
              {{ post.postDesc }}
            </p>
          </div>
          <div class="blog_post__link">
            <nuxt-link class="blog_post__link_text" :to="`/blog/${post.slug}/`">
              Read more
            </nuxt-link>
            <inline-svg class="svg--read-more" :src="require('../../assets/svg/Arrow.svg')" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData ({ $content }) {
    const posts = await $content('blog').fetch()
    posts.sort((b, a) => {
      return a.id - b.id
    })
    return { posts }
  },
  beforeCreate () {
    this.$parent.$parent.metaHelper.title = 'Free Content for Personal Trainers'
    this.$parent.$parent.metaHelper.description = 'Use our high-quality content to improve your knowledge in all-things health, fitness and wellbeing related.'
    this.$parent.$parent.metaHelper.url = 'https://traininblocks.com/blog/'
  },
  mounted () {
    const OBSERVER = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        entry.target.setAttribute('class', entry.isIntersecting ? 'blog_post focused_post' : 'blog_post')
      })
    }, { threshold: 1 })
    document.querySelectorAll('.blog_post').forEach((svgItem) => {
      OBSERVER.observe(svgItem)
    })
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
              "name": "Blog",
              "item": "https://traininblocks.com/blog/"
            }]
          }`,
          type: 'application/ld+json'
        }
      ]
    }
  }
}
</script>
