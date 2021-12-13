<style scoped>
a {
  text-decoration: none;
  color: var(--base_dark);
}
</style>

<template>
  <div>
    <h1>Want to select a different plan?</h1>
    <h2 class="accent_text">
      Save big and spend less time managing your business and programmes.
    </h2>
    <div class="spacer" />
    <payment />
    <div class="spacer" />
    <benefits />
    <div class="spacer" />
  </div>
</template>

<script>
import Payment from "~/components/Payment";
import Benefits from "~/components/pages/Benefits";

export default {
  components: {
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
