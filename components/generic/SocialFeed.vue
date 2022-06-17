<style>
.j-overlay-content {
  @apply rounded-lg;
}
.j-overlay-content .j-meta {
  @apply hidden;
}
.feed-item.juicer.image-post.juicer-about {
  display: none;
}
h1.referral {
  opacity: 0;
}
</style>

<template>
  <div>
    <txt type="title" class="pt-8">Follow our journey</txt>

    <script
      src="https://assets.juicer.io/embed.js"
      type="text/javascript"
    ></script>
    <link
      href="https://assets.juicer.io/embed.css"
      media="all"
      rel="stylesheet"
      type="text/css"
    />
    <ul class="juicer-feed" data-feed-id="traininblocks">
      <h1 class="referral">
        <a href="https://www.juicer.io">Powered by Juicer.io</a>
      </h1>
    </ul>
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
