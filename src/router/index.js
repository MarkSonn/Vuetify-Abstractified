import Vue from 'vue'
import Router from 'vue-router'
import Working from '@/pages/Working'
import Demo from '@/pages/Demo'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Working',
      component: Working
    },
    {
      path: '/demo',
      name: 'Demo',
      component: Demo
    }
  ]
})
