<template>
  <div>
    <div
      class="flex justify-between items-center cursor-pointer hover:opacity-60 transition"
      @click="show = !show"
    >
      <txt type="large-body" bold>
        {{ item.title }}
      </txt>
      <span
        class="transition"
        :class="show ? 'rotate-180' : 'rotate-0'"
        v-html="require('../../../assets/svg/chevron-down.svg?include')"
      />
    </div>

    <txt v-if="show" class="mt-4">
      {{ item.content }}
    </txt>
  </div>
</template>

<script>
import Txt from "../../elements/Txt";

export default {
  components: {
    Txt,
  },
  props: {
    item: Object,
  },
  data() {
    return {
      show: false,
    };
  },
};
</script>
