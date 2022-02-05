<template>
  <div class="flex flex-col xl:flex-row">
    <div class="md:w-7/12 md:mr-8 my-auto">
      <txt type="title" is-main>
        We've taken exercise programming to the next level.
      </txt>
      <txt type="large-body" class="mt-6 mb-8">
        A personal training software to fuel your growth and build deeper
        relationships with your clients.
      </txt>
      <link-button link="#pricing">Try it now</link-button>
    </div>
    <img
      height="auto"
      width="auto"
      :src="require('../../assets/images/home/trainer.jpg')"
      class="gray ml-auto md:w-8/12 mt-16 xl:mt-0 xl:w-5/12 xl:ml-0 h-auto z-0"
    />
  </div>
</template>

<script>
import Txt from "../elements/Txt";
import LinkButton from "../elements/LinkButton";

export default {
  components: {
    Txt,
    LinkButton,
  },
};
</script>
