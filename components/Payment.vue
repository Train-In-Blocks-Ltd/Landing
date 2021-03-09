<style scoped>
.container--pricing {
  display: grid;
  grid-gap: 4rem;
  margin-top: 4rem
}
.product_container {
  padding: 2rem;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 0 20px 10px #28282808
}
.product_container > div:first-child {
  display: flex;
  justify-content: space-between
}
.product_container > div:first-child * {
  margin: auto 0
}

@media (max-width: 768px) {
  .product_container {
    max-width: 100%
  }
}
@media (max-width: 567px) {
  .product_container {
    grid-template-columns: 1fr;
    max-width: 100%;
    grid-gap: 1rem
  }
  .product_container div:first-child {
    display: flex;
    flex-direction: row
  }
  .product_container > div:first-child * {
    text-align: left
  }
  .product_container div:first-child div {
    margin: auto
  }
}
</style>

<template>
  <div>
    <p class="text--large">
      Try it with our 14-day free trial
    </p>
    <div class="container--pricing">
      <div class="product_container">
        <div>
          <p class="text--large">
            £102
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
                  Select
                </button>
              </template>
            </stripe-checkout>
          </client-only>
        </div>
        <div>
          <p class="text--small">
            Yearly
          </p>
          <p class="text--small grey">
            Save 15% when you sign up to our annual plan — an even better deal.
          </p>
        </div>
      </div>
      <div class="product_container">
        <div>
          <p class="text--large">
            £10
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
                  Select
                </button>
              </template>
            </stripe-checkout>
          </client-only>
        </div>
        <div>
          <p class="text--small">
            Monthly
          </p>
          <p class="text--small grey">
            Gets you full access to the app for a amazing price on a recurring payment.
          </p>
        </div>
      </div>
      <div class="product_container">
        <div>
          <p class="text--large">
            £15
          </p>
          <client-only>
            <stripe-checkout
              ref="checkoutRef0"
              :pk="publishableKey"
              :items="supporter"
              :success-url="successUrl"
              :cancel-url="cancelUrl"
            >
              <template slot="checkout-button">
                <button @click="checkout0()">
                  Select
                </button>
              </template>
            </stripe-checkout>
          </client-only>
        </div>
        <div>
          <p class="text--small">
            Supporter
          </p>
          <p class="text--small grey">
            Show some love and help us deliver an outstanding service to you. It's the same as the monthly plan, but with an added bonus of good karma.
          </p>
        </div>
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
      supporter: [
        {
          plan: 'price_1IFGHBBYbiJubfJMNHoR9viV',
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
