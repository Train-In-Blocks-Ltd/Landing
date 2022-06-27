<style>
.juicer-feed {
  margin-top: 1rem!important;
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
.juicer-feed.image-grid li.feed-item {
  aspect-ratio: 1;
  overflow: hidden;
  @apply rounded-lg;
}
.juicer-feed.image-grid li.feed-item:hover .j-text {
  @apply rounded-lg;
}
.juicer-feed h1.referral, .juicer-feed li.feed-item:nth-of-type(n+2) {
  display: none!important
}
.juicer-feed.image-grid .j-text .j-message p, .juicer-feed.image-grid .j-text .j-edit p, .juicer-feed.slider .j-text .j-message p, .juicer-feed.slider .j-text .j-edit p, .juicer-feed.hip .j-text .j-message p, .juicer-feed.hip .j-text .j-edit p, .juicer-feed.image-grid .j-text .j-message a, .juicer-feed.image-grid .j-text .j-edit a, .juicer-feed.slider .j-text .j-message a, .juicer-feed.slider .j-text .j-edit a, .juicer-feed.hip .j-text .j-message a, .juicer-feed.hip .j-text .j-edit a {
  color: white;
}
</style>

<template>
  <div>
    <txt type="title" class="mb-16">Follow our journey</txt>
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
