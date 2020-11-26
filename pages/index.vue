<style scoped>
  /* Containers */
  #home {
    padding: 6rem 0
  }
  .container--features {
    display: grid;
    grid-template-columns: repeat(auto-fill, 280px);
    grid-gap: 4rem
  }
  .container--pricing {
    display: grid;
    grid-template-columns: 1fr 1fr
  }

  /* Content */
  .img--pc {
    max-width: 100%
  }
  .img--tablet {
    max-width: 100%;
    margin-top: 6rem
  }

  /* Embeded YT */
  .embed-container {
    position: relative;
    padding-bottom: 56.25%;
    height: 0;
    margin: auto;
    overflow: hidden;
    max-width: 80%
  }
  .embed-container iframe, .embed-container object, .embed-container embed {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 80%
  }

  @media (max-width: 768px) {
    #home {
      padding: 0
    }
    .embed-container {
      max-width: 100%
    }
  }
  @media (max-width: 567px) {
    .img--tablet {
      margin-top: 2rem
    }
  }
</style>

<template>
  <div id="home">
    <p class="text--large">
      We've taken health and fitness programming to the next level.
    </p>
    <p class="text--large grey">
      Over-delivering doesn't have to cost you. Impress your clients and help them reach their health and fitness goals.
    </p>
    <div class="spacer" />
    <img class="img--pc" src="../assets/images/device-pc.png" alt="Device PC">
    <div class="spacer" />
    <div class='embed-container'>
      <iframe src='https://www.youtube.com/embed/00UPzOCD2Y0' frameborder='0' allowfullscreen />
    </div>
    <div class="spacer" />
    <div class="container--features">
      <div v-for="feature in features" :key="feature.id">
        <p class="text--small">
          {{ feature.subtitle }}
        </p><br>
        <p class="text--small grey">
          {{ feature.desc }}
        </p>
      </div>
    </div>
    <div class="spacer" />
    <p class="text--large">
      14-day free trial
    </p>
    <p>Cancel anytime and save 15% on our annual plan.</p>
    <div class="container--pricing">
      <div>
        <p class="text--large">
          £102
        </p>
        <p class="text--large grey">
          Yearly
        </p>
        <client-only>
          <stripe-checkout
            ref="checkoutRef1"
            :pk="publishableKey"
            :items="yearly"
            :success-url="successUrl"
            :cancel-url="cancelUrl"
          >
            <template slot="checkout-button">
              <button @click="checkout1()">
                Let's go
              </button>
            </template>
          </stripe-checkout>
        </client-only>
      </div>
      <div>
        <p class="text--large">
          £10
        </p>
        <p class="text--large grey">
          Monthly
        </p>
        <client-only>
          <stripe-checkout
            ref="checkoutRef0"
            :pk="publishableKey"
            :items="monthly"
            :success-url="successUrl"
            :cancel-url="cancelUrl"
          >
            <template slot="checkout-button">
              <button @click="checkout0()">
                Sign me up
              </button>
            </template>
          </stripe-checkout>
        </client-only>
      </div>
    </div>
    <div class="spacer" />
    <img class="img--tablet" src="../assets/images/device-tablet.png" alt="Device Tablet">
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'Want to train more clients effectively?',
      features: [
        { id: 1, subtitle: 'Save Time', desc: 'Create a new long-term bespoke programme in less than 15 minutes.' },
        { id: 2, subtitle: 'Workout Builder', desc: 'A powerful workout design tool using free-form text editors. Write anything you want.' },
        { id: 3, subtitle: 'Visuals', desc: 'Analyse and visualise the programme without spending your day entering numbers into boxes. We\'ll handle that.' },
        { id: 4, subtitle: 'Cloud', desc: 'It\'s all on the internet. Access anytime and anywhere.' },
        { id: 5, subtitle: 'Easy Planning', desc: 'Copy the workouts across a set time-frame with one-click. Then make any changes required for progression.' },
        { id: 6, subtitle: 'Sleek and Minimal UI', desc: 'Minimal and easy to understand. Simplicity goes a long way.' },
        { id: 7, subtitle: 'Super Affordable', desc: 'No complicated pricing plans with different restrictions. Just pay and get instant access.' },
        { id: 8, subtitle: 'Unlimited Clients', desc: 'There is no limit on the number of clients you can have. Go out there and get more.' }
      ],
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
      cancelUrl: 'https://traininblocks.com'
    }
  },
  beforeCreate () {
    this.$parent.$parent.metaHelper.title = 'Programming for Personal Trainers'
    this.$parent.$parent.metaHelper.description = 'Over-delivering doesn\'t have to cost you. Impress your clients and help them reach their health and fitness goals.'
    this.$parent.$parent.metaHelper.url = 'https://traininblocks.com/'
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
