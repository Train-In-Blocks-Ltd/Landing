<template>
  <div class="flex flex-col md:flex-row">
    <div class="w-full md:w-6/12 lg:w-7/12 md:mr-8 my-auto">
      <txt type="title" is-main>
        We've taken exercise programming to the next level.
      </txt>
      <txt type="large-body" class="mt-6 mb-8">
        A personal training software to fuel your growth and build deeper
        relationships with your clients.
      </txt>
      <div class="w-fit inline-block">
        <link-button link="#pricing"
          >Sign up for our 14 day free trial</link-button
        >
        <txt type="tiny" class="mt-2 text-center">
          Cancel Anytime
        </txt>
      </div>
    </div>
    <img
      height="auto"
      width="auto"
      :src="
        require('../../assets/images/trainer.jpg?resize&size=700&format=webp&inline')
      "
      class="hidden md:block md:w-6/12 lg:w-5/12 h-auto z-0 object-cover"
      alt="Training people"
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
