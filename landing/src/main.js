import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueQuill from 'vue-quill'
 
Vue.use(VueQuill)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
