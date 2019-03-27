import Vue from 'vue'
import Router from 'vue-router'

import InputName from '@/components/main/InputName'
import Result from '@/components/main/Result'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path : '/',
      component : InputName
    },
    {
      path : '/result',
      component : Result
    }
  ]
})
