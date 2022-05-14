import Vue from 'vue'
import VueRouter from 'vue-router'
// import English from '../views/English.vue'

Vue.use(VueRouter)

const routes = [
  // TODO: Russian language page:
  {
    path: '/ru',
    name: 'RU',
    component: () => import(/* webpackChunkName: "about" */ '../views/RU.vue')
  },

  // TODO: English language page:
  {
    path: '/en',
    name: 'EN',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/EN.vue')
  },
  
  // TODO: Create a default path for the English page:
  {
    path: '/',
    redirect: '/en'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
