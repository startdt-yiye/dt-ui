import Vue from 'vue'
import Router from 'vue-router'
import indexPage from '@/views'
import Home from '@/views/index'
import Radio from '@/views/radio'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'homePage',
      component: Home
    },
    {
      path: '/radio',
      name: 'radio',
      component: Radio
    }
  ]
})
