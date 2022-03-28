<template>
  <card-wrapper class="p-4" no-hover>
    <txt type="large-body" class="mb-4" bold
      >Let's save you time and money so you can focus on what matters!</txt
    >
    <txt>1. Select <b>demo account details</b></txt>
    <txt>2. Enter the details into the log-in form</txt>
    <txt>3. Start exploring</txt>
    <link-button
      link="https://app.traininblocks.com"
      :button-class="'mt-4'"
      new-tab
      >Check out our demo</link-button
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
