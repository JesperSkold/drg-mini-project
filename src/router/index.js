import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import CartView from "../views/CartView.vue"
import NewsView from "../views/NewsView.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component:
      Home,
    children: [
      {
        path: '/cart',
        name: 'CartView',
        component: CartView
      }
    ]
  },
  {
    path: '/news',
    name: 'NewsView',
    component: NewsView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
