<template>
  <div id="pricing">
    <txt type="title" class="mb-16 pt-8">Pricing</txt>
    <div class="grid lg:grid-cols-2 gap-8">
      <card-wrapper id="demo" v-infocus="'showElement'" class="p-4 lg:col-span-2 fadeHidden" no-shadow no-hover>
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
        v-infocus="'showElement'"
        class="p-4 fadeHidden"
        no-shadow
        no-hover
        :style="`--delay: ${0.25 * index}s`"
      >
        <div class="flex justify-between">
          <txt type="title">
            {{ product.price }}
          </txt>
          <default-button
            :on-click="() => checkout(product.stripe, product.price)"
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
          price: "£99.99",
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
          stripe: { price: "price_1KuExhBYbiJubfJMQ6fAWCq8", quantity: 1 },
        },
        {
          name: "Monthly",
          price: "£9.99",
          timeframe: "per month",
          points: [
            "Unlimited clients",
            "Unlimited plans",
            "Unlimited sessions",
            "Create session templates",
            "Client-access",
            "Session bookings",
          ],
          stripe: { price: "price_1KuEwgBYbiJubfJMbeYkuXP6", quantity: 1 },
        },
      ],
    };
  },
  methods: {
    async checkout(item, price) {
      const response = await axios.post("/.netlify/functions/checkout", {
        line_items: [item],
        price: parseInt(price.replace("£", "")),
      });
      this.gtag_report_conversion({ value: parseInt(price.replace("£", "")) });
      // eslint-disable-next-line no-undef
      const stripe = await Stripe("pk_live_shgxQjmTIkJSJjVJpi8N1RQO00aJHHNIWX");
      stripe.redirectToCheckout({ sessionId: response.data });
    },
    gtag_report_conversion({ url, value }) {
      const callback = function () {
        // eslint-disable-next-line eqeqeq
        if (typeof url != "undefined") {
          window.location = url;
        }
      };
      window.dataLayer.push("event", "conversion", {
        send_to: "AW-407043956/2rv5CL35k7kDEPT-i8IB",
        value,
        currency: "GBP",
        event_callback: callback,
      });
      return false;
    },
  },
};
</script>
