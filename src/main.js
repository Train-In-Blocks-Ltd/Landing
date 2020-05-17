import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueQuill from 'vue-quill'
import 'quill/dist/quill.snow.css'
import VueScrollTo from 'vue-scrollto'
import VModal from 'vue-js-modal'
 
Vue.use(VModal)
Vue.use(VueScrollTo)
Vue.use(VueQuill)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')