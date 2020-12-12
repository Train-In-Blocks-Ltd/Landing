<style scoped>
.container--compare {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem
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

/* Repsonsive */
@media (max-width: 992px) {
  .container--compare {
    grid-template-columns: 1fr
  }
}
</style>

<template>
  <div>
    <p class="text--large">
      How do we compare against <b>{{ details.name }}?</b>
    </p>
    <p class="text--large grey">
      Here's a breakdown...
    </p>
    <div class="spacer" />
    <div class="container--compare">
      <div class="compare_item">
        <p class="text--small">
          Train In Blocks
        </p>
        <p class="text--small grey">
          £10 per month. Simple right?
        </p>
        <p class="text--small grey">
          No limits on clients or programmes
        </p>
      </div>
      <div class="compare_item">
        <p class="text--small">
          {{ details.name }}
        </p>
        <p class="text--small grey">
          {{ details.price }}
        </p>
        <p class="text--small grey">
          {{ details.price_desc }}
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
  </div>
</template>

<script>
export default {
  props: {
    details: Object
  },
  data () {
    return {
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
