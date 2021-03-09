<template>
  <div class="policy">
    <h1>
      Terms & Conditions
    </h1>
    <h2>1. Terms</h2>
    <p>By accessing the website at <a href="http://www.traininblocks.com">http://www.traininblocks.com</a> and our other services, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws in the United Kingdom. If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials contained in this website are protected by applicable copyright and trademark law.</p>
    <h2>2. Use Licence</h2>
    <p>Permission is granted to temporarily download one copy of the materials (information or software) on Train In Blocks Ltd&#39;s website for personal, non-commercial transitory viewing only. This is the grant of a licence, not a transfer of title, and under this licence, you may not:</p>
    <ul>
      <li>i. modify or copy the materials;</li>
      <li>ii. use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
      <li>iii. attempt to decompile or reverse engineer any software contained on Train In Blocks Ltd&#39;s website;</li>
      <li>iv. remove any copyright or other proprietary notations from the materials; or</li>
      <li>v. transfer the materials to another person or &quot;mirror&quot; the materials on any other server.</li>
    </ul>
    <p>This licence shall automatically terminate if you violate any of these restrictions and may be terminated by Train In Blocks Ltd at any time. Upon terminating your viewing of these materials or upon the termination of this licence, you must destroy any downloaded materials in your possession whether in electronic or printed format.</p>
    <h2>3. Disclaimer</h2>
    <p>
      The materials on Train In Blocks Ltd&#39;s website are provided on an &#39;as is&#39; basis. Train In Blocks Ltd makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
      Further, Train In Blocks Ltd does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.
    </p>
    <h2>4. Limitations</h2>
    <p>In no event shall Train In Blocks Ltd or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Train In Blocks Ltd&#39;s website, even if Train In Blocks Ltd or a Train In Blocks Ltd authorised representative has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.</p>
    <h2>5. Accuracy of materials</h2>
    <p>The materials appearing on Train In Blocks Ltd&#39;s website could include technical, typographical, or photographic errors. Train In Blocks Ltd does not warrant that any of the materials on its website are accurate, complete or current. Train In Blocks Ltd may make changes to the materials contained on its website at any time without notice. However, Train In Blocks Ltd does not make any commitment to update the materials.</p>
    <h2>6. Links</h2>
    <p>Train In Blocks Ltd has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Train In Blocks Ltd of the site. Use of any such linked website is at the user&#39;s own risk.</p>
    <h2>7. Modifications</h2>
    <p>Train In Blocks Ltd may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.</p>
    <h2>8. Governing Law</h2>
    <p>These terms and conditions are governed by and construed in accordance with the laws of Oxfordshire and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.</p>
    <h2>9. Marketing Materials and Cookies</h2>
    <p>
      You will be added to the mailing list for marketing purposes once you sign-up to any services provided by Train In Blocks Ltd. Cookies will also be used to improve your experience. Learn more <router-link to="/cookie-policy">
        here.
      </router-link>
    </p>
  </div>
</template>

<script>
export default {
  beforeCreate () {
    this.$parent.$parent.metaHelper.title = 'Terms and Conditions'
    this.$parent.$parent.metaHelper.description = 'Train In Blocks Ltd\'s Terms and Conditions'
    this.$parent.$parent.metaHelper.url = 'https://traininblocks.com/terms-conditions/'
  }
}
</script>
