<template>
  <div>
    <h1>My blog posts</h1>
    <ul>
      <li v-for="post in posts" :key="post.attributes.title">
        <nuxt-link :to="getPermalink(post)">
          <h2>{{ post.attributes.title }}</h2>
          <img :src="'/blog-img/' + post.attributes.img" loading="lazy">
          <p>{{ post.attributes.excerpt }}</p>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>
<script>
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
      title: 'Learn',
      meta: [
        { hid: 'description', name: 'description', content: 'Free high-quality content to improve your knowledge in all-things health, fitness and wellbeing related.' },
        { hid: 'og:title', content: 'Learn' },
        { hid: 'twitter:title', content: 'Learn' },
        { hid: 'og:url', content: '/blog' }
      ]
    }
  }
}
</script>
