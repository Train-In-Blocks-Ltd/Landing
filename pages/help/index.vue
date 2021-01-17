<style scoped>
  /* Contact form */
  .contact_form {
    display: grid;
    grid-gap: 1rem;
    margin: 8rem 0;
    max-width: 768px
  }
  .contact_form input {
    padding: .6rem;
    opacity: .6;
    border: 1px solid #28282840;
    border-radius: 8px;
    transition: .6s all cubic-bezier(.165, .84, .44, 1)
  }
  .contact_form input:focus {
    border: 1px solid #282828;
    opacity: 1
  }
  .click_here {
    cursor: pointer;
    transition: .6s all cubic-bezier(.165, .84, .44, 1)
  }
  .click_here:hover {
    opacity: .6
  }
  .incomplete_form {
    color: red
  }

  /* Articles */
  .container--help {
    display: grid;
    grid-gap: 8rem;
    margin: 4rem 0
  }
  .number_text {
    line-height: 1
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
      <u
        v-scroll-to="{
          el: '#contact',
          duration: 600,
          easing: 'ease'
        }"
        class="click_here"
      > Click here</u>
      to get in touch or browse our guides
    </p>
    <div class="container--help">
      <div v-for="post in posts" :key="post.attributes.title" class="help-post">
        <div>
          <p class="text--xlarge no-margin number_text">
            {{ post.attributes.id }}
          </p>
        </div>
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
    <form id="contact" class="contact_form" @submit.prevent="send_message()">
      <div>
        <p class="text--large">
          Need something more specific?
        </p>
        <p class="text--large grey">
          We'll get back to you as soon as possible
        </p>
      </div>
      <input
        v-model="contactForm.name"
        name="name"
        type="text"
        placeholder="Name"
        class="text--small"
        required
      >
      <input
        v-model="contactForm.email"
        name="email"
        type="email"
        placeholder="Email"
        class="text--small"
        required
      >
      <input
        v-model="contactForm.confirm"
        name="confirm_email"
        type="email"
        placeholder="Verify email"
        class="text--small"
        required
      >
      <input
        v-model="contactForm.message"
        name="message"
        type="text"
        placeholder="Message"
        class="text--small"
        required
      >
      <div>
        <button
          :disabled="contactForm.email !== contactForm.confirm || contactForm.name === '' || contactForm.email === '' || contactForm.message === ''"
          type="submit"
        >
          Send
        </button>
        <p v-if="contactForm.email !== contactForm.confirm" class="incomplete_form">
          Email does not match
        </p>
      </div>
    </form>
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
  data () {
    return {
      contactForm: {
        name: '',
        email: '',
        confirm: '',
        message: ''
      }
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
        return new Date(a.attributes.id) - new Date(b.attributes.id)
      })
    },
    send_message () {
      console.log('Sent')
    }
  }
}
</script>
