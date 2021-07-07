import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import pluginAPI from './api/Plugin'
import VueCookies from 'vue-cookies'

import DsButton from '@/components/DsButton.vue'
import DsIcon from '@/components/DsIcon.vue'
import DsInput from '@/components/DsInput.vue'
import DsModal from '@/components/DsModal.vue'

Vue.config.productionTip = false
Vue.use(pluginAPI)
Vue.use(VueCookies)

Vue.component('DsButton', DsButton)
Vue.component('DsIcon', DsIcon)
Vue.component('DsInput', DsInput)
Vue.component('DsModal', DsModal)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
