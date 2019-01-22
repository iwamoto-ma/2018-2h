'use strict'
import Vue from 'vue'
import App from './App'
import store from './store/store'
import VueRouter from 'vue-router';
import { routes } from './routes'

Vue.config.productionTip = false

Vue.use(VueRouter)

const router = new VueRouter({
  routes
})

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
  store,
})
