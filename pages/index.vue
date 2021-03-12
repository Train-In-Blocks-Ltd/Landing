<style scoped>
  /* Home Intro */
  .home_intro {
    width: 70%
  }

  /* Images */
  .container_images {
    display: grid;
    grid-gap: 6rem
  }
  .image_item {
    display: grid;
    grid-template-columns: .6fr 1fr;
    grid-gap: 4rem
  }
  .image_item h1 {
    margin: auto
  }
  .image_item img {
    transition: .6s all cubic-bezier(.165, .84, .44, 1)
  }
  .image_item img:hover {
    transform: scale(1.05)
  }

  @media (max-width: 992px) {
    .image_item img:hover {
      transform: scale(1)
    }
  }
  @media (max-width: 768px) {
    .image_item {
      grid-template-columns: 1fr
    }
  }
</style>

<template>
  <div id="home">
    <div class="home_intro">
      <h1>
        We've taken health and fitness programming to the next level.
      </h1>
    </div>
    <div class="spacer" />
    <video src="../assets/video/Pegasus 3.0.mp4" controls />
    <div class="spacer--large" />
    <div class="container_images">
      <div
        v-for="(item, index) in images"
        :key="`img_${index}`"
      >
        <div class="image_item">
          <h1>
            {{ item.desc }}
          </h1>
          <img :src="require(`../assets/images/home/${item.img}`)" :alt="item.alt">
        </div>
        <div class="spacer" />
      </div>
    </div>
    <div class="spacer" />
    <benefits />
    <div class="spacer--large" />
    <payment />
    <div class="spacer" />
  </div>
</template>

<script>
import Payment from '../components/Payment'
import Benefits from '../components/Benefits'

export default {
  components: {
    Payment,
    Benefits
  },
  data () {
    return {
      title: 'Want to train more clients effectively?',
      images: [
        { desc: 'Write in-depth plans for your clients', img: 'editor.png', alt: 'Powerful editor' },
        { desc: 'Track and visualise data without spreadsheets', img: 'stats.png', alt: 'Statistics' },
        { desc: 'Progress sessions quickly with your changes', img: 'progress.png', alt: 'Progress easily' }
      ]
    }
  },
  beforeCreate () {
    this.$parent.$parent.metaHelper.title = 'Affordable Personal Training Software'
    this.$parent.$parent.metaHelper.description = 'Over-delivering doesn\'t have to cost you. Impress your clients and help them reach their health and fitness goals.'
    this.$parent.$parent.metaHelper.url = 'https://traininblocks.com/'
  }
}
</script>
