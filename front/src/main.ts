import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import DsIcon from '@/components/DsIcon.vue'
import DsInput from '@/components/DsInput.vue'

Vue.config.productionTip = false

Vue.component('DsIcon', DsIcon)
Vue.component('DsInput', DsInput)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
