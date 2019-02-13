'use strict'
import Vue from 'vue'
import App from './App'
import store from './store/store';
import router from './router'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
})
