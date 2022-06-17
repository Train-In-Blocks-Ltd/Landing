<template>
  <div>
    <txt type="title" class="mb-16 pt-8">Follow our journey</txt>

    <!-- Place <div> tag where you want the feed to appear -->
    <div id="curator-feed-default-feed-layout">
      <a href="https://curator.io" target="_blank" class="crt-logo crt-tag"
        >Powered by Curator.io</a
      >
    </div>
    <!-- The Javascript can be moved to the end of the html page before the </body> tag -->
    <script type="text/javascript">
      /* curator-feed-default-feed-layout */
      (function () {
        var i,
          e,
          d = document,
          s = "script";
        i = d.createElement("script");
        i.async = 1;
        i.charset = "UTF-8";
        i.src =
          "https://cdn.curator.io/published/a8874642-02a9-48a5-b88c-c4662403b7b3.js";
        e = d.getElementsByTagName(s)[0];
        e.parentNode.insertBefore(i, e);
      })();
    </script>
  </div>
</template>

<script>
import Txt from "~/components/elements/Txt";

export default {
  components: {
    Txt,
  },
};
</script>
