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
  button.signUp {
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
  .container--comparison h1 {
    margin: auto
  }
  .container--comp {
    display: grid
  }
  .list__name {
    font-weight: bold;
    font-size: 2rem;
    margin: 1rem 0
  }
  .list__desc {
    margin: 1rem 0;
    list-style-type: square
  }
  .list--overview, .tib {
    display: grid;
    grid-template-columns: 44px 1fr;
    grid-gap: 2rem
  }
  .icon {
    height: 44px;
    width: 44px;
    margin: 1rem 0 0 0
  }
  .tib {
    margin: 0 0 2rem 0
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
      font-size: 1.6rem
    }
    .title--compare {
      text-align: left
    }
    .container--comparison {
      grid-template: repeat(3, .2fr) / 1fr
    }
  }
  @media (max-width: 576px) {
    .pricing__plans {
      background-color: transparent;
      box-shadow: none
    }
  }
</style>

<template>
  <div>
    <h1 class="paper--title">
      Yes. That's It.
    </h1>
    <div id="pricing">
      <div class="pricing__plans">
        <div>
          <img class="icon--gif" src="../assets/gif/deadlift.gif">
          <h2 class="sub-title">
            Basic - Monthly
          </h2>
          <h3 class="pricing__cost">
            £10
          </h3>
        </div>
        <client-only>
          <stripe-checkout
            ref="checkoutRef0"
            :pk="publishableKey"
            :items="monthly"
            :success-url="successUrl"
            :cancel-url="cancelUrl"
          >
            <template slot="checkout-button">
              <button @click="checkout0">
                Start Saving!
              </button>
            </template>
          </stripe-checkout>
        </client-only>
      </div>
      <div class="pricing__plans">
        <div>
          <img class="icon--gif" src="../assets/gif/trophy.gif">
          <h2 class="sub-title pro">
            Pro - Yearly
          </h2>
          <h3 class="pricing__cost">
            £102
          </h3>
          <p>
            Save 15% on the annual plan,<br><b>that's £8.50/month</b>
          </p>
          <br>
          <br>
        </div>
        <client-only>
          <stripe-checkout
            ref="checkoutRef1"
            :pk="publishableKey"
            :items="yearly"
            :success-url="successUrl"
            :cancel-url="cancelUrl"
          >
            <template slot="checkout-button">
              <button @click="checkout1">
                Wow! Sign Me Up.
              </button>
            </template>
          </stripe-checkout>
        </client-only>
      </div>
    </div>
    <div class="spacer" />
    <div>
      <h1 class="title--compare main-title">
        How do we compare?
      </h1><br>
      <div class="container--comparison">
        <div class="container--tib">
          <div class="tib">
            <inline-svg class="icon" :src="require('../assets/svg/Icon.svg')" />
            <p class="list__name">
              Train In Blocks
            </p>
          </div>
          <ul>
            <li class="list__desc">
              <b>£10 per month</b> for unlimited clients, that's it!
            </li>
            <li class="list__desc">
              Have a say in our development and vote for features and add-ons.
            </li>
            <li class="list__desc">
              Free high-quality content our social media and our blog.
            </li>
            <li class="list__desc">
              Great future add-ons to boost your business in the right direction (we'll still be more affordable).
            </li>
            <li class="list__desc">
              Fast and functional, build a completely bespoke programme in a matter of minutes - not hours.
            </li>
            <li class="list__desc">
              Visualise your client's exercise programme before the first session.
            </li>
            <li class="list__desc">
              Save time and re-invest it into generating new leads and prospects.
            </li>
            <li class="list__desc">
              Great technical support and we're more than happy to book in a demo with you.
            </li>
          </ul>
        </div>
        <h1 class="main-title">
          vs.
        </h1>
        <div class="container--comp">
          <div v-for="item in overview" :key="item.id" class="list--overview">
            <img class="icon" :src="require('../assets/comp/' + item.icon)">
            <div>
              <p class="list__name">
                {{ item.name }}
              </p>
              <p class="list__desc">
                {{ item.desc }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="spacer" />
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
      loading: false,
      publishableKey: 'pk_live_shgxQjmTIkJSJjVJpi8N1RQO00aJHHNIWX',
      monthly: [
        {
          plan: 'price_1GtvcPBYbiJubfJM2voqpLIo',
          quantity: 1
        }
      ],
      yearly: [
        {
          plan: 'price_1GtvcPBYbiJubfJM7nWmNywN',
          quantity: 1
        }
      ],
      successUrl: 'https://traininblocks.com/success',
      cancelUrl: 'https://traininblocks.com/pricing',
      overview: [
        { id: 1, name: 'TrueCoach', icon: 'truecoach.jpg', desc: '$99 per month for 50 clients' },
        { id: 2, name: 'My PT Hub', icon: 'mypthub.jpg', desc: '£49 per month for full access' },
        { id: 3, name: 'PTminder', icon: 'ptminder.jpg', desc: 'Cheapest plan for £25 per month' }
      ]
    }
  },
  beforeCreate () {
    this.$parent.$parent.metaHelper.title = 'Affordable Personal Trainer Software'
    this.$parent.$parent.metaHelper.description = 'You can\'t beat our pricing. All with no restriction on the number of clients and programmes. Get instant access now!'
    this.$parent.$parent.metaHelper.url = 'https://traininblocks.com/pricing/'
  },
  methods: {
    checkout0 () {
      this.$refs.checkoutRef0.redirectToCheckout()
    },
    checkout1 () {
      this.$refs.checkoutRef1.redirectToCheckout()
    }
  }
}
</script>
