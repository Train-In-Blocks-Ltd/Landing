<template>
  <form action="https://traininblocks.us8.list-manage.com/subscribe/post?u=a2c4d1f0522fa78cbfc518fc0&amp;id=73101450d0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
    <label for="mce-EMAIL">{{$parent.descSub}}</label><br>
    <input type="email" value="" name="EMAIL" class="email" id="mce-EMAIL" placeholder="Email" required>
    <div style="position: absolute; left: -5000px" aria-hidden="true"><input type="text" name="b_a2c4d1f0522fa78cbfc518fc0_73101450d0" tabindex="-1" value=""></div>
    <div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button"></div>
  </form>
</template>

<style scoped>
  #mc-embedded-subscribe-form {
    text-align: left
  }
  #mc-embedded-subscribe-form > label {
    font-weight: 700;
    font-size: 2rem
  }
  .email {
    width: 70%;
    margin: 3rem 0;
    padding: .4rem;
    border: none;
    border-bottom: 1px solid #282828;
    outline-width: 0;
    font-size: 1rem;
    letter-spacing: .1rem;
    transition: all 500ms cubic-bezier(.165, .84, .44, 1)
  }
  .email:hover, .email:focus {
    width: 75%
  }
  .button {
    width: 20rem;
    padding: .5rem;
    border: 1px solid #282828;
    cursor: pointer;
    outline-width: 0;
    font-size: 1rem;
    font-weight: 700;
    background-color: transparent;
    transition: all 500ms cubic-bezier(.165, .84, .44, 1)
  }

  /* Responsiveness */
  @media (max-width: 992px) {
    .container--2c {
      grid-template-columns: 1fr;
      grid-gap: 0
    }
    .desc--subscribe {
      text-align: left
    }
  }
  @media (max-width: 768px) {
    #mc-embedded-subscribe-form > label {
      font-size: 1.5rem
    }
    .email {
      width: 70%
    }
    .email:hover,
    .email:focus {
      width: 75%
    }
  }
  @media (max-width: 576px) {
    .email {
      width: 100%
    }
    .button {
      width: 70%
    }
  }
</style>