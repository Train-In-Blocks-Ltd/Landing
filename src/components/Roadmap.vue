<template>
  <div>
    <h1 class="paper--title">{{title}}</h1><br>
    <h2>We believe in transparency, check out what we're up to.</h2><br><br>
    <div id="roadmap">
      <svg id="progress" width="95" height="600" viewBox="0 0 95 560" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect id="progress_track" x="40" y="20" width="15" height="520" fill="#e9e9e9"/>
        <rect id="progress__bar" x="40" y="20" width="15" height="40" fill="url(#grad)"/>
        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="50%" style="stop-color: #282828;" />
            <stop offset="100%" style="stop-color: #686868;" />
          </linearGradient>
        </defs>
      </svg>
      <img class="icon active" src="../assets/svg/Cog.svg" style="grid-area: i1;">
      <div style="grid-area: d1;">
        <p class="desc">{{d1p}}</p>
        <p class="roadmap--title">{{d1a}}</p>
        <p>{{d1b}}</p>
      </div>
      <img class="icon" src="../assets/svg/UserTested.svg" style="grid-area: i2;">
      <div style="grid-area: d2;">
        <p class="desc">{{d2p}}</p>
        <p class="roadmap--title">{{d2a}}</p>
        <p>{{d2b}}</p>
      </div>
      <img class="icon" src="../assets/svg/Released.svg" style="grid-area: i3;">
      <div style="grid-area: d3;">
        <p class="desc">{{d3p}}</p>
        <p class="roadmap--title">{{d3a}}</p>
        <p>{{d3b}}</p>
      </div>
      <img class="icon" src="../assets/svg/Upgrade.svg" style="grid-area: i4;">
      <div style="grid-area: d4;">
        <p class="desc">{{d4p}}</p>
        <p class="roadmap--title">{{d4a}}</p>
        <p>{{d4b}}</p>
      </div>
      <img class="icon" src="../assets/svg/SC.svg" style="grid-area: i5;">
      <div style="grid-area: d5;">
        <p class="desc">{{d5p}}</p>
        <p class="roadmap--title">{{d5a}}</p>
        <p>{{d5b}}</p>
      </div>
    </div>
    <div class="container--2c">
        <img id="community" src="../assets/svg/community.svg"/>
        <div>
            <h1 id="title--involved">Get Involved</h1>
            <p>We want every paying member to have a say in the direction of the app and the company. You can <b>vote</b> for features and add-ons and we'll do the rest!</p>
        </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        title: 'Our Roadmap...',
        d1a: 'Prototyping',
        d2a: 'User Testing',
        d3a: 'Version 1.0',
        d4a: 'Version 1.1',
        d5a: 'Strength and Conditioning Add-on',
        d1b: 'Mastering and building the essential features.',
        d2b: 'Getting some feedback and improving the app from the get-go.',
        d3b: 'Our big day! Giving you a new way to build programmes.',
        d4b: 'Patching it up to give you guys the latest.',
        d5b: 'Take your business to the next level.',
        d1p: 'In-Progess',
        d2p: 'Scheduled',
        d3p: '01.08.20',
        d4p: 'Planned',
        d5p: 'Planned'
      }
    }
  }
</script>

<style scoped>
  .desc {
    font-size: 0.8rem;
    padding: 0;
  }

  #roadmap {
    line-height: 5rem;
    display: grid;
    grid-template-areas:
      "i1 p d1"
      "i2 p d2"
      "i3 p d3"
      "i4 p d4"
      "i5 p d5";
    grid-template-columns: 0.1fr 0.1fr 1fr;
    grid-template-rows: repeat(5, 1fr);
    grid-gap: 0 1rem;
    width: fit-content;
    height: auto;
    margin: 0;
  }

  #roadmap > div {
    margin: auto 0;
  }

  #roadmap > div > p {
    margin: 0.5rem 1rem;
  }

  .icon {
    margin: auto;
    text-align: center;
    width: 4rem;
  }

  .roadmap--title {
    font-size: 1.5rem;
    font-weight: bold;
  }

  #progress {
    grid-area: p;
  }

  #progress__bar {
    animation: fadeInf 1000ms infinite;
    animation-direction: alternate;
  }

  .container--2c {
    display: grid;
    grid-template-columns: 0.6fr 1fr;
    grid-gap: 3rem;
    margin: 3rem 0;
  }

  #title--involved {
    margin: 6rem 0 0 0;
    background-color: #282828;
    color: white;
    width: fit-content;
    padding: 1rem 2rem;
    letter-spacing: 0.3rem;
  }

  #community {
    width: 25vw;
  }

  @keyframes fadeInf {
    from {
      fill-opacity: 60%;
    }

    to {
      fill-opacity: 100%;
    }
  }

  @media (max-width: 992px) {
    .roadmap--title {
      font-size: 1rem;
    }

    #community {
      margin: 5rem 0;
    }
  }

  @media (max-width: 768px) {
    #roadmap {
      grid-template-columns: 0.1fr 1fr;
      grid-gap: 3rem 1rem;
    }

    #progress {
      display: none;
    }
  }

  @media (max-width: 576px) {
    #roadmap {
      grid-template-areas: "i1" "d1" "i2" "d2" "i3" "d3" "i4" "d4" "i5" "d5";
      grid-template-columns: 1fr;
      grid-template-rows: repeat(5, 0.4fr 1fr);
      grid-gap: 1rem;
      margin: 0;
    }

    #progress {
      display: none;
    }

    .container--2c {
      grid-template-columns: 1fr;
    }

    #community {
      margin: auto;
      width: 70%;
    }

    #title--involved {
      margin: 0;
    }
  }
</style>