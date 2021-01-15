<style scoped>
  .container--help {
    display: grid;
    grid-gap: 8rem;
    margin: 4rem 0
  }
  .help-post {
    display: flex
  }
  .help-post__top-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0 2rem
  }
  .help-post__img {
    background-size: cover;
    background-position: center;
    width: auto;
    height: 25vw
  }
  .help-post__link {
    display: grid;
    grid-template-columns: 100px 24px;
    grid-gap: .4rem;
    margin: 2rem 0 0 0;
    transition: grid-gap .4s, opacity .1s cubic-bezier(.165, .84, .44, 1)
  }
  .help-post__link-text {
    color: #282828;
    margin: auto 0;
    text-decoration: none
  }
  .help-post__link:hover {
    grid-gap: 1rem;
    opacity: .8
  }
  .help-post__link:active {
    opacity: .4
  }

  /* Responsiveness */
  @media (max-width: 768px) {
    .help-post {
      display: grid;
      grid-gap: 2rem
    }
    .help-post__top-wrapper {
      padding: 0
    }
    .help-post__img {
      height: auto;
      width: 100%
    }
    .help-post__link:hover {
      grid-gap: .4rem;
      opacity: 1
    }
  }
</style>

<template>
  <div>
    <p class="text--large">
      Need help with something?
    </p>
    <p class="text--large grey">
      We are here for you
    </p>
    <div class="container--help">
      <div v-for="post in posts" :key="post.attributes.title" class="help-post">
        <img class="help-post__img" :src="require(`../../static/help-img${post.attributes.img}`)">
        <div class="help-post__top-wrapper">
          <div>
            <p class="text--small no-margin">
              {{ post.attributes.title }}
            </p>
            <p class="text--small grey">
              {{ post.attributes.excerpt }}
            </p>
          </div>
          <div class="help-post__link">
            <nuxt-link class="help-post__link-text" :to="'/help/' + post.attributes.slug + '/'">
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
    const resolve = require.context('~/content/help/', true, /\.md$/)
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
    this.$parent.$parent.metaHelper.title = 'Support Desk'
    this.$parent.$parent.metaHelper.description = 'Need help with something? We are happy to help with anything.'
    this.$parent.$parent.metaHelper.url = 'https://traininblocks.com/help/'
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
