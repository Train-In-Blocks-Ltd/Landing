<template>
  <div>
    <h1 class="paper--title">{{title}}</h1>
    <div id="pricing">
      <div class="pricing__plans">
        <div>
          <img class="icon--gif" src="../assets/gif/deadlift.gif"/>
          <h2>Basic - Monthly</h2>
          <h1 class="pricing__cost">£10</h1>
        </div>
        <button class="signUp">{{btn1}}</button>
      </div>
      <div class="pricing__plans">
        <div>
          <img class="icon--gif" src="../assets/gif/trophy.gif"/>
          <h2 id="pro" href="https://trolley.link/p/" data-trolley="true" data-tpk="">Pro - Yearly</h2>
          <h1 class="pricing__cost">£90</h1>
          <p>Save 25% on the annual plan,<br><b>that's £7.50/month</b></p><br><br>
        </div>
        <button class="signUp">{{btn2}}</button>
      </div>    
    </div>
    <p>Our friends at <a class="ref--icons8" target="_blank" href="https://icons8.com">Icons8</a> helped us out with the cool icons!</p>
  </div>
</template>

<script>
  export default {
  data() {
      return {
        title: 'Yes. That\'s It.',
        btn1: 'Let\'s Get Started',
        btn2: 'Start Saving'
      }
    }
  }
</script>

<style scoped>
  #pricing {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1vw;
    margin-top: 3rem;
  }

  .pricing__plans {
    display: grid;
    grid-template-rows: 1fr 0.1fr;
    height: auto;
    min-height: fit-content;
    box-shadow: 0 20px 40px 12px rgba(0, 0, 0, 0.05);
    background-color: #fff;
    padding: 2rem;
    text-align: center;
  }

  .pricing__plans > div > p {
    margin: 0;
  }

  .pricing__cost {
    font-size: 4rem;
    margin-bottom: 0;
  }

  .signUp {
    background-color: transparent;
    border: 1px solid #282828;
    width: 70%;
    height: auto;
    outline-width: 0;
    margin: auto;
    padding: 1rem 0.5rem;
    font-size: 1rem;
    font-weight: bold;
    letter-spacing: 0.15rem;
    cursor: pointer;
    transition: all 400ms;
    transition-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
  }

  .signUp:hover {
    background-color: #282828;
    color: #fff;
  }

  .signUp:active {
    transform: scale(0.9);
  }

  h2 {
    width: fit-content;
    margin: auto;
  }

  .subtitle {
    margin: 0;
    font-size: 2rem;
  }

  #pro {
    background-color: #282828;
    color: #fff;
  }

  footer {
    text-align: right;
  }

  .icon--gif {
    margin: 3rem;
  }

  @media (max-width: 992px) {
    #pricing {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 576px) {
    .pricing__plans {
      background-color: transparent;
      padding: 0;
      box-shadow: none;
    }
  }
</style>