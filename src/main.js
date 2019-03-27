'use strict'
import Vue from 'vue'
import App from './App'
import store from './store/store';
import router from './routes';

Vue.config.productionTip = false

new Vue({
  el: '#app',
  components: { App },
  router,
  template: '<App/>',
  store
})
