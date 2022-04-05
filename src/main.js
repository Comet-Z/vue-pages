
import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VAnimateCss from 'v-animate-css'

// ? Global styles:
// eslint-disable-next-line no-unused-vars
import globalStyles from './styles.css'

import router from './router'

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')

Vue.use(VAnimateCss.default);



