<style>
.juicer-feed {
  margin-top: 1rem!important;
}
.j-overlay-content {
  @apply rounded-lg;
}
.j-overlay-content .j-meta {
  @apply hidden;
}
.juicer-feed li.feed-item {
  @apply cursor-pointer mr-4 mb-4;
  width: calc(100% - 1rem);
}
.feed-item.juicer.image-post.juicer-about {
  @apply hidden;
}
.juicer-feed.image-grid li.feed-item:hover .j-text {
  @apply rounded-lg;
}
.juicer-feed h1.referral {
  display: none!important
}
</style>

<template>
  <div>
    <txt type="title" class="pt-8">Follow our journey</txt>
    <ul class="juicer-feed" data-feed-id="traininblocks" />
  </div>
</template>

<script>
import Txt from "~/components/elements/Txt";

export default {
  components: {
    Txt,
  },
};
</script>
