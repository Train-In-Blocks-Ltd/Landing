<template>
  <div>
    <h1 class="paper--title">
      {{ title }}
    </h1>
    <div class="spacer" />
    <div class="container--2c intro">
      <div class="container--paper-text">
        <h2 class="sub-title">
          It supports the process of creation.
        </h2>
        <p>Don't forget, exercise programming is an art-form. Every great health and fitness professional needs a fresh, new and contemporary software to be their canvas.</p>
        <inline-svg class="svg--paper" :src="require('../assets/svg/PaperStack.svg')" />
      </div>
      <div class="container--desc-text">
        <h1 class="main-title">
          Flexible
        </h1>
        <h1 class="main-title">
          Customisable
        </h1>
        <h1 class="main-title">
          Affordable
        </h1>
        <h1 class="main-title">
          Minimal
        </h1>
      </div>
    </div>
    <div class="spacer" />
    <div class="container--social">
      <div v-for="social in socialAccounts" :key="social.id" class="wrapper--social">
        <a target="_blank" :href="social.link"><inline-svg :src="require('../assets/svg/socials/' + social.icon)" class="social-icon" /></a>
        <h2 class="text--social">
          {{ social.desc }}
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
  data () {
    return {
      title: 'What\'s our obsession with paper?',
      socialAccounts: [
        { id: 1, icon: 'Facebook.svg', desc: 'A quick overview of our services and some casual content.', link: 'https://www.facebook.com/traininblocks' },
        { id: 2, icon: 'Instagram.svg', desc: 'Casual snapshots of our team, behind-the-scenes and showing some love to our community.', link: 'https://www.instagram.com/traininblocks' },
        { id: 3, icon: 'Twitter.svg', desc: 'Get support and details of updates on the app.', link: 'https://www.twitter.com/traininblocks' },
        { id: 4, icon: 'LinkedIn.svg', desc: 'Learn more about our company and employees. We all have stories.', link: 'https://www.linkedin.com/company/train-in-blocks' }
      ]
    }
  },
  beforeCreate () {
    this.$parent.$parent.metaHelper.title = 'Our Philosophy'
    this.$parent.$parent.metaHelper.description = 'Find more about our core values and what we stand for!'
    this.$parent.$parent.metaHelper.url = 'https://traininblocks.com/about/'
  }
}
</script>

<style scoped>
  /* Container */
  .container--2c {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: 'a b';
    grid-gap: 3rem
  }
  .container--paper-text {
    text-align: right;
    grid-area: a;
    padding: 2rem 0
  }
  .container--desc-text {
    grid-area: b
  }

  /* Socials */
  .wrapper--social {
    margin: 2rem 0;
    display: grid;
    grid-template-columns: 100px 1fr;
    grid-gap: 2rem
  }
  .social-icon {
    height: 100px;
    width: 100px
  }
  .text--social {
    margin: 0
  }

  /* Responsiveness */
  @media (max-width: 992px) {
    .container--desc-text {
      padding: 1rem 0
    }
    .container--desc-text h1 {
      font-size: 2.4rem;
      margin: 1rem 0;
      text-align: right
    }
  }
  @media (max-width: 768px) {
    .container--2c, .container--2c.subscribe, .container--2c.intro {
      grid-template-columns: 1fr;
      grid-template-areas: 'b' 'a';
      grid-gap: 0
    }
  }
  @media (max-width: 576px) {
    .text--social {
      font-size: 1.2rem
    }
  }
</style>
