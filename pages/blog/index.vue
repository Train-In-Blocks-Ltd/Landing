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
  .blog_post:hover > img {
    filter: grayscale(0)
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

  /* Responsiveness */
  @media (max-width: 992px) {
    .blog_post {
      grid-template-columns: .8fr 1fr
    }
    .blog_post > img {
      filter: grayscale(0)
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
      <div v-for="post in posts" :key="post.attributes.title" class="blog_post">
        <img :src="require(`../../static/blog-img/${post.attributes.img}`)">
        <div class="blog_post__content">
          <div>
            <h2 class="no_margin">
              {{ post.attributes.title }}
            </h2>
            <p>
              {{ post.attributes.excerpt }}
            </p>
          </div>
          <div class="blog_post__link">
            <nuxt-link class="blog_post__link_text" :to="`/blog/${post.attributes.slug}/`">
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
import InlineSvg from 'vue-inline-svg'

export default {
  components: {
    InlineSvg
  },
  asyncData () {
    const resolve = require.context('~/content/blog/', true, /\.md$/)
    const imports = resolve.keys().map((key) => {
      key.match(/\/(.+)\.md$/)
      return resolve(key)
    })
    return {
      posts: imports
    }
  },
  created () {
    this.sortPosts()
  },
  beforeCreate () {
    this.$parent.$parent.metaHelper.title = 'Free Content for Personal Trainers'
    this.$parent.$parent.metaHelper.description = 'Use our high-quality content to improve your knowledge in all-things health, fitness and wellbeing related.'
    this.$parent.$parent.metaHelper.url = 'https://traininblocks.com/blog/'
  },
  methods: {
    sortPosts () {
      this.posts.sort((a, b) => {
        return new Date(b.attributes.id) - new Date(a.attributes.id)
      })
    }
  }
}
</script>
