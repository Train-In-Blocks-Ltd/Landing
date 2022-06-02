<template>
  <card-wrapper class="p-4 text-center" no-hover>
    <txt type="large-body" class="mb-4" bold
      >Let's save you time and money so you can focus on what matters!</txt
    >
    <link-button link="/#yearly" :button-class="'mt-4'" new-tab
      >Sign up for our 14 day free trial</link-button
    >
  </card-wrapper>
</template>

<script>
import Txt from "../../elements/Txt";
import LinkButton from "../../elements/LinkButton";
import CardWrapper from "~/components/generic/CardWrapper";

export default {
  components: {
    Txt,
    LinkButton,
    CardWrapper,
  },
};
</script>
