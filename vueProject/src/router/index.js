/*
 * @Author: mhy
 * @LastEditors: mhy
 * @Description: 
 */
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import home from '@/pages/home/home.vue'
import login from '@/pages/login.vue'
import elmain from '@/components/elmain.vue'
Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path:'/home',
      component:home,
      name:'菜单',
      // iconCls:'el-icon-message',
      // children:[
      //   // {
      //   //   path:'sub1',
      //   //   component:sub1,
      //   //   name:'子菜单一',
        
      //   // },
      // ]
    },
    {
      path:'/login',
      component: login,
      name:"登录"
    },
    {
      path: '/', 
      redirect: '/login' ,
    },
    {
      path:'/elmain',
      component:elmain
    }
    
  ]
})
