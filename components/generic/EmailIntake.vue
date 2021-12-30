<style scoped>
#mc-embedded-subscribe-form {
  @apply mb-8;
}
#mc-embedded-subscribe-form label {
  @apply font-bold text-gray-800 dark:text-white;
}
#mc-embedded-subscribe {
  @apply select-none cursor-pointer self-center rounded border-none px-6 py-2 font-bold text-white dark:text-gray-800 text-sm bg-gray-800 dark:bg-white transition-all hover:opacity-60 active:scale-95;
}
#mce-EMAIL {
  @apply w-full px-2 py-3 font-sans outline-none text-base bg-transparent text-gray-800 dark:text-white border-2 border-gray-400 dark:border-gray-200 rounded-lg hover:border-gray-800 focus:border-gray-800 dark:hover:border-white dark:focus:border-white transition-all;
}
</style>

<template>
  <card-wrapper
    class="md:flex relative justify-center items-center mx-auto w-full lg:w-2/3 xl:1/3 px-8 pt-4"
    no-hover
  >
    <img
      :src="require('../../assets/images/trainer-facing.png')"
      class="z-0 absolute top-0 right-0 grayscale opacity-20 h-64 md:mr-12 md:relative md:opacity-100"
    />
    <form
      id="mc-embedded-subscribe-form"
      action="https://traininblocks.us8.list-manage.com/subscribe/post?u=a2c4d1f0522fa78cbfc518fc0&amp;id=73101450d0"
      method="post"
      name="mc-embedded-subscribe-form"
      class="validate grid gap-2 w-full my-12"
      target="_blank"
      novalidate
    >
      <label for="mce-EMAIL" class="mb-4"
        >Want to manage your clients easily?</label
      >
      <input
        id="mce-EMAIL"
        type="email"
        value=""
        name="EMAIL"
        class="email z-10"
        style="background-color: white"
        placeholder="Email"
        required
      />
      <div style="position: absolute; left: -5000px" aria-hidden="true">
        <input
          type="text"
          name="b_a2c4d1f0522fa78cbfc518fc0_73101450d0"
          tabindex="-1"
          value=""
        />
      </div>
      <div class="clear mt-4">
        <input
          id="mc-embedded-subscribe"
          type="submit"
          value="Yes, sign me up"
          name="subscribe"
          class="button"
        />
      </div>
    </form>
  </card-wrapper>
</template>

<script>
import CardWrapper from "../generic/CardWrapper";

export default {
  components: {
    CardWrapper,
  },
};
</script>
