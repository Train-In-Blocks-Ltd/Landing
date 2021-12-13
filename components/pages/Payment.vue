<style scoped>
.pricing-container {
  display: grid;
  grid-template: 1fr 1fr / 1fr 1fr;
  grid-gap: 2rem;
}

@media (max-width: 992px) {
  .pricing-container {
    grid-template-columns: 1fr;
  }
}
</style>

<template>
  <div>
    <txt type="title" class="mb-16">Pricing</txt>
    <div class="pricing-container">
      <card-wrapper class="p-4" no-shadow no-hover>
        <div class="flex justify-between">
          <txt type="title">
            Free
          </txt>
          <link-button
            link="https://app.traininblocks.com?utm=landingPricing"
            new-tab
            >Select</link-button
          >
        </div>
        <txt type="large-body" class="my-2" bold>
          Demo
        </txt>
        <txt>
          Sign in to our demo account to see how our services can benefit you.
          You can find the details on the log-in page.
        </txt>
      </card-wrapper>
      <card-wrapper
        v-for="(product, index) in products"
        :key="`product_${index}`"
        class="p-4"
        no-shadow
        no-hover
      >
        <div class="flex justify-between">
          <txt type="title">
            {{ product.price }}
          </txt>
          <default-button :on-click="product.func">Select</default-button>
        </div>
        <txt type="large-body" class="my-2" bold>
          {{ product.name }}
        </txt>
        <txt>
          {{ product.desc }}
        </txt>
      </card-wrapper>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Txt from '../elements/Txt'
import LinkButton from '../elements/LinkButton'
import DefaultButton from '../elements/DefaultButton'
import CardWrapper from '../generic/CardWrapper';

export default {
  components: {
    Txt,
    LinkButton,
    DefaultButton,
    CardWrapper
  },
  data() {
    return {
      products: [
        {
          name: "Yearly",
          price: "£102",
          timeframe: "per year",
          desc: "Save 15% when you sign up to our annual plan — an even better deal.",
          func: this.checkout([{ price: "price_1GtvcPBYbiJubfJM7nWmNywN", quantity: 1 }]),
        },
        {
          name: "Monthly",
          price: "£10",
          timeframe: "per month",
          desc: "Gets you full access to the app for a amazing price on a recurring payment.",
          func: this.checkout([{ price: "price_1GtvcPBYbiJubfJM2voqpLIo", quantity: 1 }]),
        },
        {
          name: "Supporter",
          price: "£15",
          timeframe: "per month",
          desc: "Show some love and help us deliver an outstanding service to you. It's the same as the monthly plan, but with an added bonus of good karma.",
          func: this.checkout([{ price: "price_1IFGHBBYbiJubfJMNHoR9viV", quantity: 1 }]),
        },
      ],
    };
  },
  methods: {
    async checkout(item) {
      const response = await axios.post("/.netlify/functions/checkout", {
        line_items: item,
      });
      // eslint-disable-next-line no-undef
      const stripe = await Stripe("pk_live_shgxQjmTIkJSJjVJpi8N1RQO00aJHHNIWX");
      stripe.redirectToCheckout({ sessionId: response.data });
    },
  },
};
</script>
