<template>
  <div>
    <h1 class="paper--title">
      {{ title }}
    </h1>
    <div id="pricing">
      <div class="pricing__plans dark">
        <div>
          <img class="icon--gif" src="../assets/gif/deadlift.gif">
          <h2>Basic - Monthly</h2>
          <h1 class="pricing__cost">
            £10
          </h1>
        </div>
        <button class="signUp" :disabled="isOpen">
          {{ btn1 }}
        </button>
      </div>
      <div class="pricing__plans dark">
        <div>
          <img class="icon--gif" src="../assets/gif/trophy.gif">
          <h2 class="pro dark" href="https://trolley.link/p/" data-trolley="true" data-tpk="">
            Pro - Yearly
          </h2>
          <h1 class="pricing__cost">
            £90
          </h1>
          <p>Save 25% on the annual plan,<br><b>that's £7.50/month</b></p><br><br>
        </div>
        <button class="signUp" :disabled="isOpen">
          {{ btn2 }}
        </button>
      </div>
    </div>
    <div class="spacer" />
    <div>
      <h1>How do we compare to...</h1><br>
      <div v-for="item in overview" :key="item.id" class="list--overview">
        <p class="list__desc">
          <b>{{ item.name }}</b> - {{ item.desc }}
        </p>
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
        { id: 1, name: 'TrueCoach', desc: '$19 per month for 5 clients' },
        { id: 2, name: 'My PT Hub', desc: '£20 per month for 5 clients' },
        { id: 3, name: 'PTminder', desc: 'Cheapest plan for £25 per month' }
      ]
    }
  },
  head () {
    return {
      title: 'Affordable Personal Trainer Software',
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
    margin-bottom: 0
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
  .link {
    margin: 0
  }
  .icon--gif {
    margin: 3rem;
    border-radius: 5px
  }
  @media (max-width: 992px) {
    #pricing {
      grid-template-columns: 1fr
    }
  }
  @media (max-width: 576px) {
    .pricing__plans {
      background-color: transparent;
      box-shadow: none
    }
  }
</style>
