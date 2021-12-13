<template>
  <div class="flex">
    <div class="w-7/12 mr-8 my-auto">
      <txt type="title" is-main>
        We've taken exercise programming to the next level.
      </txt>
      <txt type="large-body" class="py-2">
        A personal training software to fuel your growth and build deeper
        relationships with your clients.
      </txt>
      <default-button>Try it now</default-button>
    </div>
    <img
      :src="require('../../assets/images/home/trainer.jpg')"
      class="grayscale w-5/12"
    />
  </div>
</template>

<script>
import Txt from '../elements/Txt'
import DefaultButton from '../elements/DefaultButton'

export default {
    components: {
        Txt,
        DefaultButton
    }
}
</script>
