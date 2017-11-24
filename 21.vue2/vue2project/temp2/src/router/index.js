import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import first from '@/components/first'

Vue.use(Router)

export default new Router({
	mode: 'history',	//接受前后路由的切换
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/first',
      name: 'first',
      component: first
    }
  ]
})
