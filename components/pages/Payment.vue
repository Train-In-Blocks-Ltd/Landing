<template>
  <div id="pricing">
    <txt type="title" class="mb-16 pt-8">Pricing</txt>
    <div class="grid lg:grid-cols-2 gap-8">
      <card-wrapper id="demo" class="p-4" no-shadow no-hover>
        <div class="flex justify-between">
          <txt type="title"> Free </txt>
          <link-button
            link="https://app.traininblocks.com?utm=landingPricing"
            new-tab
            >Select</link-button
          >
        </div>
        <txt type="large-body" class="my-2" bold> Demo </txt>
        <txt>
          Sign in to our demo account to see how our services can benefit you.
          You can find the details on the log-in page.
        </txt>
      </card-wrapper>
      <card-wrapper
        v-for="(product, index) in products"
        :id="product.name.toLowerCase()"
        :key="`product_${index}`"
        class="p-4"
        no-shadow
        no-hover
      >
        <div class="flex justify-between">
          <txt type="title">
            {{ product.price }}
          </txt>
          <default-button :on-click-prevent="() => checkout(product.stripe)"
            >Select</default-button
          >
        </div>
        <txt type="large-body" class="my-2" bold>
          {{ product.name }}
        </txt>
        <ul>
          <li
            v-for="(point, pointIndex) in product.points"
            :key="`point_${pointIndex}`"
          >
            {{ point }}
          </li>
        </ul>
      </card-wrapper>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Txt from "../elements/Txt";
import LinkButton from "../elements/LinkButton";
import DefaultButton from "../elements/DefaultButton";
import CardWrapper from "../generic/CardWrapper";

export default {
  components: {
    Txt,
    LinkButton,
    DefaultButton,
    CardWrapper,
  },
  data() {
    return {
      products: [
        {
          name: "Yearly",
          price: "£102",
          timeframe: "per year",
          points: [
            "Save 15% when you sign up on this plan",
            "Unlimited clients",
            "Unlimited plans",
            "Unlimited sessions",
            "Create session templates",
            "Client-access",
            "Session bookings",
          ],
          stripe: { price: "price_1GtvcPBYbiJubfJM7nWmNywN", quantity: 1 },
        },
        {
          name: "Monthly",
          price: "£10",
          timeframe: "per month",
          points: [
            "Unlimited clients",
            "Unlimited plans",
            "Unlimited sessions",
            "Create session templates",
            "Client-access",
            "Session bookings",
          ],
          stripe: { price: "price_1GtvcPBYbiJubfJM2voqpLIo", quantity: 1 },
        },
        {
          name: "Supporter",
          price: "£15",
          timeframe: "per month",
          points: [
            "Extra karma for helping us out",
            "Unlimited clients",
            "Unlimited plans",
            "Unlimited sessions",
            "Create session templates",
            "Client-access",
            "Session bookings",
          ],
          stripe: { price: "price_1IFGHBBYbiJubfJMNHoR9viV", quantity: 1 },
        },
      ],
    };
  },
  methods: {
    async checkout(item) {
      const response = await axios.post("/.netlify/functions/checkout", {
        line_items: [item],
      });
      // eslint-disable-next-line no-undef
      const stripe = await Stripe("pk_live_shgxQjmTIkJSJjVJpi8N1RQO00aJHHNIWX");
      stripe.redirectToCheckout({ sessionId: response.data });
    },
  },
};
</script>
