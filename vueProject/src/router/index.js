import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Mainpage from '@/components/elmain.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/Mainpage',
      name: 'Mainpage',
      component:Mainpage
    },
    {
      path: '/', 
      redirect: '/Mainpage' 
    }
  ]
})
