<style scoped>
  .blog-post {
    display: grid;
    box-shadow: 0 0 20px 10px #28282810;
    margin: 4rem auto;
    max-width: 80%
  }
  .blog-post__top-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 4rem
  }
  .blog-post__img {
    background-size: cover;
    background-position: center;
    height: 300px;
    width: 100%
  }
  .blog-post__link {
    display: grid;
    grid-template-columns: 100px 24px;
    grid-gap: .4rem;
    margin: 2rem 0 0 0;
    transition: grid-gap .4s, opacity .1s cubic-bezier(.165, .84, .44, 1)
  }
  .blog-post__link-text {
    color: #282828;
    margin: auto 0;
    text-decoration: none
  }
  .blog-post__link:hover {
    grid-gap: 1rem;
    opacity: .8
  }
  .blog-post__link:active {
    opacity: .4
  }

  /* Responsiveness */
  @media (max-width: 1200px) {
    .blog-post__top-wrapper {
      padding: 2rem
    }
  }
  @media (max-width: 768px) {
    .blog-post {
      max-width: 100%
    }
    .blog-post__image {
      height: auto;
      width: 100%
    }
    .blog-post__link:hover {
      grid-gap: .4rem;
      opacity: 1
    }
  }
</style>

<template>
  <div>
    <p class="text--large">
      Find power in knowledge
    </p>
    <p class="text--large grey">
      Let's learn something new
    </p>
    <div class="container--blog">
      <div v-for="post in posts" :key="post.attributes.title" class="blog-post">
        <div class="blog-post__img" :style="{ backgroundImage: `url(/blog-img/${post.attributes.img})` }" />
        <div class="blog-post__top-wrapper">
          <div>
            <p class="text--small">
              {{ post.attributes.title }}
            </p>
            <p class="text--small grey">
              {{ post.attributes.excerpt }}
            </p>
          </div>
          <div class="blog-post__link">
            <nuxt-link class="blog-post__link-text" :to="'/blog/' + post.attributes.slug + '/'">
              Read more
            </nuxt-link>
            <inline-svg class="svg--read-more" :src="require('../../assets/svg/blog/Arrow.svg')" />
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
    const resolve = require.context('~/content/', true, /\.md$/)
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
