import Vue from 'vue'
import Router from 'vue-router'
import edit from '@/pages/edit'
import result from '@/pages/result'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: edit,
      props: true
    },
    {
      path: '/result/',
      component: result
    }
  ]
})

