import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import IndexPage from '../pages/index'
import DetailPage from '../pages/detail'

Vue.use(Router)
Vue.use(VueResource)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'IndexPage',
      component: IndexPage
    },
    {
      path: '/detail',
      name: 'detailPage',
      component: DetailPage
    },
  ]
})
