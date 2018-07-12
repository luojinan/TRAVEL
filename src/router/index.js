import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'
import Detail from '@/pages/detail/Detail'

Vue.use(Router)

export default new Router({
  routes: [
  	{
      path: '/',
      name: 'Home',
      component: Home
    },{
      path: '/city',
      name: 'City',
      component: City
    },{
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
    }],
    //解除路由页面间滚动记忆
    //在vue官网，生态系统，router部分查阅即可
    scrollBehavior(to,from,savedPosition){
      return { x:0, y:0 }
    }
})
