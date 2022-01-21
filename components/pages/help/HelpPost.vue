<template>
  <div class="flex">
    <txt type="title" class="mr-8">
      {{ post.id }}
    </txt>
    <div>
      <txt type="large-body" bold>
        {{ post.title }}
      </txt>
      <txt class="my-4">
        {{ post.postDesc }}
      </txt>
      <nuxt-link
        class="flex items-center hover:opacity-60 transition-opacity"
        :to="`/help/${post.slug}/`"
      >
        <txt class="mr-4">Continue reading</txt>
        <inline-svg :src="require('../../../assets/svg/Arrow.svg')" />
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import Txt from "../../elements/Txt";

export default {
  components: {
    Txt,
  },
  props: {
    post: Object,
  },
};
</script>
