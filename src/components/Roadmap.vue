<template>
  <div>
    <h1 class="paper--title">{{title}}</h1><br>
    <h2>We believe in transparency, check out what we're up to.</h2><br><br>
    <div id="roadmap" v-for="dev in development" :key="dev.id">
      <inline-svg class="icon--main" :src="dev.icon"/>
      <div>
        <div class="container--progress">
          <p class="roadmap__progress">{{dev.progress}}</p>
          <inline-svg class="icon--progress" :src="dev.progressIcon"/>
        </div>
        <p class="roadmap__title">{{dev.title}}</p>
        <p class="roadmap__desc">{{dev.desc}}</p>
      </div>
    </div>
    <div class="container--2c">
        <inline-svg id="vote" :src="require('../assets/svg/Vote.svg')"/>
        <div>
            <h1 id="title--involved">Get Involved</h1>
            <p>We want every paying member to have a say in the direction of the app and the company. You can <b>vote</b> for features and add-ons and we'll do the rest!</p>
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
  import SCon from '../assets/svg/roadmap/SC.svg'

  export default {
    components: {
      InlineSvg
    },
    data() {
      return {
        title: 'Our Roadmap...',
        development: [
          {id: 1, icon: Idea, progress: 'In-Progess', progressIcon: InDev, title: 'Prototyping', desc: 'Mastering and building the essential features.'},
          {id: 2, icon: UserTested, progress: 'Planned', progressIcon: Planned, title: 'User Testing', desc: 'Getting some feedback and improving the app from the get-go.'},
          {id: 3, icon: Released, progress: '01.08.20', progressIcon: Scheduled, title: 'Version 1.0', desc: 'Our big day! Giving you a new way to build programmes.'},
          {id: 4, icon: Upgrade, progress: 'Planned', progressIcon: Planned, title: 'Version 1.1', desc: 'Patching it up to give you guys the latest.'},
          {id: 5, icon: SCon, progress: 'Planned', progressIcon: Planned, title: 'Strength and Conditioning Add-on', desc: 'Take your business to the next level.'}
        ]
      }
    }
  }
</script>

<style scoped>
  #roadmap {
    display: grid;
    margin: 3rem 0;
    grid-template-columns: .2fr 1fr
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
  .container--progress {
    display: flex;
    align-items: center
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
  .container--2c {
    display: grid;
    grid-template-columns: .6fr 1fr;
    grid-gap: 3rem;
    margin: 3rem 0
  }
  #title--involved {
    margin: 6rem 0 0 0;
    background-color: #282828;
    color: white;
    width: fit-content;
    padding: 1rem 2rem;
    letter-spacing: .3rem
  }
  #vote {
    margin: auto
  }

  /* Responsive */
  @keyframes fadeInf {
    from {
      fill-opacity: 60%
    }
    to {
      fill-opacity: 100%
    }
  }
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
      grid-gap: 1rem;
      margin: 3rem 0
    }
    .container--2c {
      grid-template-columns: 1fr
    }
    #community {
      margin: auto;
      width: 70%
    }
    #title--involved {
      margin: 0
    }
  }
</style>