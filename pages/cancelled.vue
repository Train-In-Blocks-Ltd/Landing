<template>
  <div>
    <txt type="title" is-main>Want to select a different plan?</txt>
    <txt type="large-body" class="mt-4 mb-16">
      Save big and spend less time managing your business and programmes.
    </txt>
    <payment class="mb-24" />
    <benefits />
  </div>
</template>

<script>
import Payment from "~/components/pages/Payment";
import Benefits from "~/components/pages/Benefits";
import Txt from "~/components/elements/Txt.vue";

export default {
  components: {
    Txt,
    Payment,
    Benefits,
  },
  head() {
    return {
      meta: [{ hid: "robots", name: "robots", content: "noindex" }],
    };
  },
  beforeCreate() {
    this.$parent.$parent.metaHelper.title = "Cancelled";
  },
};
</script>
