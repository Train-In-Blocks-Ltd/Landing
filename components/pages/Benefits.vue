<style>
.benefit-icon svg {
  @apply h-16 mx-auto;
}
</style>

<template>
  <div id="features">
    <txt type="title" class="mb-16 pt-8">Benefits and features</txt>
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <card-wrapper
        v-for="(item, index) in benefits"
        :key="`benefit_${index}`"
        v-infocus="'showElement'"
        class="p-4 fadeHidden"
        no-hover
        no-shadow
        :style="`--delay: ${0.15 * index}s`"
      >
        <span
          class="benefit-icon mb-4 rounded-none block"
          v-html="require(`../../assets/svg/features/${item.svg}.svg?include`)"
        />
        <txt type="large-body" class="mb-2" bold>
          {{ item.subtitle }}
        </txt>
        <txt>
          {{ item.desc }}
        </txt>
      </card-wrapper>
    </div>
  </div>
</template>

<script>
import Txt from "../elements/Txt";
import CardWrapper from "../generic/CardWrapper";

export default {
  components: {
    Txt,
    CardWrapper,
  },
  data() {
    return {
      benefits: [
        {
          subtitle: "Workout Builder",
          desc: "A powerful workout design tool using free-form text editors. Write anything you want.",
          svg: "editor",
        },
        {
          subtitle: "Visualise data",
          desc: "Analyse and visualise the programme without spending your entire day entering numbers into spreadsheets. We'll handle that.",
          svg: "data",
        },
        {
          subtitle: "Cloud storage",
          desc: "It's all on the internet. Access anytime and anywhere.",
          svg: "cloud",
        },
        {
          subtitle: "Quick Progression",
          desc: "Copy the sessions across a set time-frame with your changes in just a few clicks",
          svg: "progress",
        },
        {
          subtitle: "Sleek and Minimal UI",
          desc: "Minimal and easy to understand. Simplicity goes a long way.",
          svg: "design",
        },
        {
          subtitle: "Super Affordable",
          desc: "No complicated pricing plans with different restrictions. Just pay and get instant access.",
          svg: "dollar",
        },
        {
          subtitle: "Unlimited Clients",
          desc: "There is no limit on the number of clients you can have. Go out there and grow your business.",
          svg: "infinity",
        },
        {
          subtitle: "Portfolio",
          desc: "Edit your portfolio to share important information with your clients.",
          svg: "payment",
        },
        // {
        //   subtitle: "Portfolio and Payments",
        //   desc: "Edit your portfolio to share important information with your clients and collect payments.",
        //   svg: "payment",
        // },
        {
          subtitle: "Templates",
          desc: "Create your own pre-made templates to help you programme faster.",
          svg: "template",
        },
      ],
    };
  },
};
</script>
