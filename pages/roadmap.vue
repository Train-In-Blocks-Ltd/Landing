<template>
  <div>
    <h1 class="paper--title">
      {{ title }}
    </h1><br>
    <h2 class="sub-title">
      We believe in transparency, check out what we're up to.
    </h2><br><br>
    <div v-for="dev in development" id="roadmap" :key="dev.id">
      <inline-svg class="icon--main" :src="dev.icon" />
      <div>
        <div class="container--progress">
          <p class="roadmap__progress">
            {{ dev.progress }}
          </p>
          <inline-svg class="icon--progress" :src="dev.progressIcon" />
        </div>
        <p class="roadmap__title">
          {{ dev.title }}
        </p>
        <p class="roadmap__desc">
          {{ dev.desc }}
        </p>
      </div>
    </div>
    <div class="container--2c">
      <inline-svg id="vote" :src="require('../assets/svg/Vote.svg')" />
      <div>
        <h1 id="title--involved">
          Get Involved
        </h1>
        <p class="text--involved">
          We want every paying member to have a say in the direction of the app and the company. You can<b> vote</b> for features and add-ons and we'll do the rest!
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import InlineSvg from 'vue-inline-svg'
import InDev from '../assets/svg/progress/InDev.svg'
import Planned from '../assets/svg/progress/Planned.svg'
import Scheduled from '../assets/svg/progress/Scheduled.svg'
import Idea from '../assets/svg/roadmap/Idea.svg'
import UserTested from '../assets/svg/roadmap/UserTested.svg'
import Released from '../assets/svg/roadmap/Released.svg'
import Upgrade from '../assets/svg/roadmap/Upgrade.svg'
import Nutrition from '../assets/svg/roadmap/salad.svg'
import CompLib from '../assets/svg/roadmap/books.svg'
import Report from '../assets/svg/roadmap/report.svg'
import Payment from '../assets/svg/roadmap/payment.svg'

export default {
  components: {
    InlineSvg
  },
  data () {
    return {
      title: 'Our Roadmap...',
      development: [
        { id: 1, icon: Idea, progress: 'In-Progess', progressIcon: InDev, title: 'Prototyping', desc: 'Mastering and building essential features.' },
        { id: 2, icon: UserTested, progress: 'Planned', progressIcon: Planned, title: 'User Testing', desc: 'Getting some feedback and improving the app from the get-go.' },
        { id: 3, icon: Released, progress: '01.08.20', progressIcon: Scheduled, title: 'Launch', desc: 'Our big day! Giving you a new way to build programmes, earn more and to expand your business.' },
        { id: 4, icon: Upgrade, progress: 'Planned', progressIcon: Planned, title: 'Post-Launch Patch', desc: 'Patching it up to give you guys the latest.' },
        { id: 5, icon: Nutrition, progress: 'Planned', progressIcon: Planned, title: 'Nutrition', desc: '' },
        { id: 6, icon: CompLib, progress: 'Planned', progressIcon: Planned, title: 'Component Library', desc: '' },
        { id: 7, icon: Report, progress: 'Planned', progressIcon: Planned, title: 'Report Generator', desc: '' },
        { id: 8, icon: Payment, progress: 'Planned', progressIcon: Planned, title: 'Payment Solutions', desc: '' }
      ]
    }
  },
  mounted () {
    this.$parent.$parent.metaHelper.title = 'Here’s Our Journey, Join Us'
    this.$parent.$parent.metaHelper.description = 'We love for you to get involved in our development. Vote for new features and join our community of health and fitness professionals.'
  }
}
</script>

<style scoped>
  /* Container */
  .container--2c {
    display: grid;
    grid-template-columns: .6fr 1fr;
    grid-gap: 4rem;
    margin: 6rem 0
  }
  .container--2c > div > h1 {
    margin: 2rem 0 0 0;
    background-color: #282828;
    color: white;
    width: fit-content;
    padding: 1rem 2rem;
    letter-spacing: .3rem
  }
  .container--progress {
    display: flex;
    align-items: center
  }

  /* Misc. */
  #roadmap {
    display: grid;
    margin: 2rem 0 6rem 0;
    grid-template-columns: .2fr 1fr
  }
  .roadmap__progress {
    font-size: .8rem;
    margin: 0 .4rem 0 0
  }
  .roadmap__title {
    font-weight: 700;
    margin: 1rem 0
  }
  .roadmap__desc {
    margin: 1rem 0
  }
  .icon--main {
    width: 5rem;
    margin: auto 0
  }
  .icon--progress {
    text-align: center;
    width: 1.5rem;
    height: auto;
    margin: 0 .2rem
  }
  #vote {
    margin: auto
  }
  .text--involved {
    margin: 2rem 0
  }

  /* Responsive */
  @media (max-width: 992px) {
    #roadmap {
      grid-gap: 3rem
    }
    .roadmap--title {
      font-size: 1rem
    }
    #community {
      margin: 5rem 0
    }
  }
  @media (max-width: 576px) {
    #roadmap {
      grid-template-columns: 1fr;
      grid-gap: 1rem
    }
    .container--2c {
      grid-template-columns: 1fr
    }
    #community {
      margin: auto;
      width: 70%
    }
    #vote {
      height: 16vh
    }
    #title--involved {
      margin: auto
    }
  }
</style>
