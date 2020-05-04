import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueQuill from 'vue-quill'
import 'quill/dist/quill.snow.css'
import AOS from 'aos'
import 'aos/dist/aos.css'



Vue.use(VueQuill)
Vue.config.productionTip = false

new Vue({
  created() {
    AOS.init();
  },
  router,
  render: h => h(App)
}).$mount('#app')