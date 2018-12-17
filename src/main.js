'use strict'

import Vue from 'vue'
import App from './App'

import store from './vuex/store'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  store
})
