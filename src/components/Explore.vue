<template>
  <div>
    <h1 class="paper--title">{{title}}</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt sit ipsum architecto repellendus? Quo, molestias! Praesentium maiores ea in iste autem nisi, aliquid provident saepe, ipsa animi ad est! Fugit porro nihil error neque quisquam corrupti maiores perferendis ipsam molestiae. Mollitia officiis nesciunt, quam repudiandae magni deserunt nam illo quo?</p>
    <div class="spacer"></div>
    <div id="curator-feed"><a href="https://curator.io" target="_blank" class="crt-logo crt-tag">Powered by Curator.io</a></div>
    <div class="spacer"></div>
    <div class="container--2c">
      <div class="desc--subscribe">
        <h1>Get More From Our Emails</h1>
      </div>
      <Subscribe></Subscribe>
    </div>
  </div>
</template>

<script type="text/javascript">
  /* curator-feed */
  (function(){
    var i, e, d = document, s = "script";i = d.createElement("script");i.async = 1;
    i.src = "https://cdn.curator.io/published/a66e0477-2159-494b-b9e5-ac8f8573ecdd.js";
    e = d.getElementsByTagName(s)[0];e.parentNode.insertBefore(i, e);
  })();
</script>
  
<script>
  import Subscribe from './Subscribe'

  export default {
    components: {
      Subscribe
    },
    data() {
      return {
        title: 'Our Philosophy'
      }
    }
  }
</script>

<style scoped>
  .container--2c {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 3rem;
  }

  .desc--subscribe > h1 {
    margin: 0;
  }

  /* Responsiveness */
  @media (max-width: 992px) {
    .container--2c {
      grid-template-columns: 1fr;
    }
  }
</style>