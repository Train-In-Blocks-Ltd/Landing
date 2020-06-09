<template>
  <div>
    <h1 class="paper--title">
      {{ title }}
    </h1>
    <div id="pricing">
      <div class="pricing__plans">
        <div>
          <img class="icon--gif" src="../assets/gif/deadlift.gif">
          <h2 class="sub-title">Basic - Monthly</h2>
          <h1 class="pricing__cost">
            £10
          </h1>
        </div>
        <button class="signUp" :disabled="isOpen">
          {{ btn1 }}
        </button>
      </div>
      <div class="pricing__plans">
        <div>
          <img class="icon--gif" src="../assets/gif/trophy.gif">
          <h2 class="sub-title pro" href="https://trolley.link/p/" data-trolley="true" data-tpk="">
            Pro - Yearly
          </h2>
          <h1 class="pricing__cost">
            £102
          </h1>
          <p>Save 15% on the annual plan,<br><b>that's £8.50/month</b></p><br><br>
        </div>
        <button class="signUp" :disabled="isOpen">
          {{ btn2 }}
        </button>
      </div>
    </div>
    <div class="spacer" />
    <div>
      <h1 class="title--compare">How do we compare to...</h1><br>
      <div class="container--comparison">
        <div class="container--tib">
          <p class="list__name">Train In Blocks</p>
          <p class="list__desc">£10 per month for unlimited clients</p>
        </div>
        <h1 class="main-title">vs.</h1>
        <div class="container--comp">
          <div v-for="item in overview" :key="item.id" class="list--overview">
            <p class="list__name">{{ item.name }}</p>
            <p class="list__desc">{{ item.desc }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="spacer" />
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'Yes. That\'s It.',
      btn1: 'We\'re almost there...',
      btn2: 'It will be out soon...',
      isOpen: true,
      tibInfo: 'Train In Blocks',
      overview: [
        { id: 1, name: 'TrueCoach', desc: '$99 per month for 50 clients' },
        { id: 2, name: 'My PT Hub', desc: '£49 per month for full access' },
        { id: 3, name: 'PTminder', desc: 'Cheapest plan for £25 per month' },
        { id: 4, name: 'PT Distinction', desc: '$80 for 50 clients' }
      ]
    }
  },
  head () {
    return {
      title: 'Train In Blocks | Affordable Personal Trainer Software',
      meta: [
        { hid: 'description', name: 'description', content: 'You can\'t beat our pricing. All with no restriction on the number of clients and programmes. Get instant access now!' },
        { hid: 'og:title', content: 'Affordable Personal Trainer Software' },
        { hid: 'twitter:title', content: 'Affordable Personal Trainer Software' },
        { hid: 'og:url', content: '/pricing' }
      ]
    }
  }
}
</script>

<style scoped>
  #pricing {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1vw;
    margin-top: 3rem
  }
  .pricing__plans {
    display: grid;
    grid-template-rows: 1fr .1fr;
    height: auto;
    min-height: fit-content;
    box-shadow: 0 20px 40px 12px rgba(0, 0, 0, .05);
    background-color: white;
    padding: 6rem 2rem;
    text-align: center
  }
  .pricing__plans > div > p {
    margin: 0
  }
  .pricing__cost {
    font-size: 4rem;
    margin: 1rem 0
  }
  .signUp {
    width: 70%;
    height: auto;
    margin: auto;
    padding: 1rem .5rem
  }
  h2 {
    width: fit-content;
    margin: auto
  }
  .subtitle {
    margin: 0;
    font-size: 2rem
  }
  .pro {
    background-color: #282828;
    color: white;
    padding: 0 1rem
  }

  /* Competition */
  .title--compare {
    text-align: center
  }
  .container--comparison {
    display: grid;
    grid-template-columns: 1fr .4fr 1fr;
    grid-gap: 4rem
  }
  .container--tib {
    text-align: right
  }
  .container--comparison h1 {
    margin: auto
  }
  .container--comp {
    display: grid;
    grid-gap: 3rem
  }
  .list__name {
    font-weight: bold;
    font-size: 1.8rem;
    margin: 1rem 0
  }
  .list__desc {
    margin: 0
  }

  /* Other */
  .icon--gif {
    margin: 3rem;
    border-radius: 5px
  }
  @media (max-width: 992px) {
    #pricing {
      grid-template-columns: 1fr;
      margin: 0 0 4rem 0
    }
    .container--comparison {
      grid-gap: 2rem
    }
  }
  @media (max-width: 768px) {
    .list__name {
      font-size: 1.4rem
    }
  }
  @media (max-width: 576px) {
    .pricing__plans {
      background-color: transparent;
      box-shadow: none
    }
    .title--compare {
      text-align: left
    }
    .container--comparison {
      grid-template: repeat(3, .2fr) / 1fr
    }
  }
</style>
