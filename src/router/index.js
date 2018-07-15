import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import('../pages/home/index.vue');
const Index = () => import('../pages/index/indexH5.vue');

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      alias: '/pages/home/main'
    },
    {
      path: '/index',
      name: 'index',
      component: Index,
      alias: '/pages/index/main'
    }
  ]
})
