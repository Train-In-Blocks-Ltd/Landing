<style scoped>
  .container--blog {
    display: block;
    margin: 2rem 0
  }
  .blog-post {
    display: grid;
    box-shadow: 0 0 20px 10px #28282810;
    grid-template-columns: 1fr .4fr;
    margin: 4rem 0
  }
  .blog-post__top-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 4rem
  }
  .blog-post__excerpt {
    margin: 0
  }
  .blog-post__image {
    margin: auto;
    height: 400px;
    width: auto
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
    font-weight: bold;
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
    .container--blog {
      grid-template-rows: repeat(auto-fill, 300px)
    }
    .blog-post__top-wrapper {
      padding: 2rem
    }
    .blog-post__image {
      height: 300px
    }
  }
  @media (max-width: 992px) {
    .blog-post__title {
      font-size: 1.4rem
    }
  }
  @media (max-width: 769px) {
    .container--blog {
      display: block
    }
    .blog-post {
      grid-template-columns: 1fr;
      margin-top: 2rem
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
    <h1 class="main-title">Learn something new</h1>
    <div class="container--blog">
      <div class="blog-post" v-for="post in posts" :key="post.attributes.title">
        <div class="blog-post__top-wrapper">
          <div>
            <h2 class="blog-post__title">{{ post.attributes.title }}</h2>
            <p class="blog-post__excerpt">{{ post.attributes.excerpt }}</p>
          </div>
          <div class="blog-post__link">
            <nuxt-link class="blog-post__link-text" :to="getPermalink(post)">Read more</nuxt-link>
            <inline-svg class="svg--read-more" :src="require('../../assets/svg/blog/Arrow.svg')" />
          </div>
        </div>
        <img class="blog-post__image" :src="'/blog-img/' + post.attributes.img" loading="lazy" />
      </div>
    </div>
  </div>
</template>

<script>
import InlineSvg from 'vue-inline-svg'

export default {
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
  components: {
    InlineSvg
  },
  data () {
    return {
      prefix: 'blog'
    }
  },
  methods: {
    getPermalink (post) {
      return this.prefix + '/' + post.attributes.slug
    }
  },
  head () {
    return {
      title: 'Train In Blocks | Free Content for Personal Trainers',
      meta: [
        { hid: 'description', name: 'description', content: 'We offer so much more than just software for fitness trainers and coaches. Access our free content on health and fitness related topics.' },
        { hid: 'og:title', content: 'Free Content for Personal Trainers' },
        { hid: 'twitter:title', content: 'Free Content for Personal Trainers' },
        { hid: 'og:url', content: '/blog' }
      ]
    }
  }
}
</script>
