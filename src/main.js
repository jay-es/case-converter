import Vue from 'vue'
import Buefy from 'buefy'
import 'buefy/lib/buefy.min.css'

import App from './App.vue'

Vue.use(Buefy)

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  render: h => h(App)
})
