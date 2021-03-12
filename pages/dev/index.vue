<style scoped>
  .dev_container {
    display: grid;
    grid-gap: 8rem;
    margin: 4rem 0
  }
  .dev_post {
    display: grid;
    grid-gap: 1rem;
    background: var(--fore);
    box-shadow: var(--low_shadow);
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
    color: #282828;
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
        <h2 class="no_margin">
          {{ post.attributes.show ? post.attributes.date : 'Update currently in the making' }}
        </h2>
        <div v-if="post.attributes.show" class="dev_post__content">
          <div>
            <h2 class="no_margin">
              {{ post.attributes.title }}
            </h2>
            <p>
              {{ post.attributes.excerpt }}
            </p>
          </div>
          <div class="dev_post__link">
            <nuxt-link class="dev_post__link_text" :to="`/dev/${post.attributes.slug}/`">
              Read more
            </nuxt-link>
            <inline-svg class="svg--read-more" :src="require('../../assets/svg/Arrow.svg')" />
          </div>
        </div>
        <h2 v-else class="accent_text no_margin">
          Check again soon...
        </h2>
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
    const resolve = require.context('~/content/dev/', true, /\.md$/)
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
    this.$parent.$parent.metaHelper.title = 'Development Log'
    this.$parent.$parent.metaHelper.description = 'We are extremely active and always developing the most elegant solution for you. Follow our journey here.'
    this.$parent.$parent.metaHelper.url = 'https://traininblocks.com/dev/'
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
