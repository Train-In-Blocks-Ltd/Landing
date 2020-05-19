<template>
  <div>
    <h1 class="paper--title">{{title}}</h1>
    <div id="pricing">
      <div class="pricing__plans dark">
        <div>
          <img class="icon--gif" src="../assets/gif/deadlift.gif"/>
          <h2>Basic - Monthly</h2>
          <h1 class="pricing__cost">£10</h1>
        </div>
        <button class="signUp" :disabled="isOpen">{{btn1}}</button>
      </div>
      <div class="pricing__plans dark">
        <div>
          <img class="icon--gif" src="../assets/gif/trophy.gif"/>
          <h2 class="pro dark" href="https://trolley.link/p/" data-trolley="true" data-tpk="">Pro - Yearly</h2>
          <h1 class="pricing__cost">£90</h1>
          <p>Save 25% on the annual plan,<br><b>that's £7.50/month</b></p><br><br>
        </div>
        <button class="signUp" :disabled="isOpen">{{btn2}}</button>
      </div>    
    </div>
    <div class="spacer"></div>
    <div>
      <h1>What does the app get you again?</h1><br>
      <h2 id="to-features">Let me show you <router-link class="input--option link" to="./features/#features">(Click here for the full list)</router-link></h2>
      <div class="list--overview" v-for="item in overview" :key="item.id">
        <p class="list__desc"><b>{{item.name}}</b> - {{item.desc}}</p>
      </div>
    </div>
    <div class="spacer"></div>
    <p>Our friends at <a class="ref--icons8" target="_blank" href="https://icons8.com">Icons8</a> helped us out with the cool icons!</p>
  </div>
</template>

<script>
  export default {
  data() {
      return {
        title: 'Yes. That\'s It.',
        btn1: 'We\'re almost there...',
        btn2: 'It will be out soon...',
        isOpen: true,
        overview: [
          {id: 1, name: 'Unlimited Clients', desc: 'Again, we don\'t want to cap you on how many clients you can train. Go for it!',},
          {id: 2, name: 'Instant Access', desc: 'No waiting around here, just dive right in.',},
          {id: 3, name: 'Voting', desc: 'Help us decide where to go. We really value your opinion. Check our Roadmap and find out more.',}
        ]
      }
    }
  }
</script>

<style scoped>
  #pricing {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1vw;
    margin-top: 3rem
  }
  .pricing__plans {
    display: grid;
    grid-template-rows: 1fr .1fr;
    height: auto;
    min-height: fit-content;
    box-shadow: 0 20px 40px 12px rgba(0, 0, 0, .05);
    background-color: white;
    padding: 2rem;
    text-align: center
  }
  .pricing__plans > div > p {
    margin: 0
  }
  .pricing__cost {
    font-size: 4rem;
    margin-bottom: 0
  }
  .signUp {
    width: 70%;
    height: auto;
    margin: auto;
    padding: 1rem .5rem
  }
  h2 {
    width: fit-content;
    margin: auto
  }
  .subtitle {
    margin: 0;
    font-size: 2rem
  }
  .pro {
    background-color: #282828;
    color: white;
    padding: 0 1rem
  }
  #to-features {
    margin: 0
  }
  .link {
    margin: 0
  }
  .icon--gif {
    margin: 3rem;
    border-radius: 5px
  }
  @media (max-width: 992px) {
    #pricing {
      grid-template-columns: 1fr
    }
  }
  @media (max-width: 576px) {
    .pricing__plans {
      background-color: transparent;
      box-shadow: none
    }
  }
</style>