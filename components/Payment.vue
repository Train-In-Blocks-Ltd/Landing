<style scoped>
.container--pricing {
  display: grid;
  grid-template-columns: 1fr 1fr
}
</style>

<template>
  <div>
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
