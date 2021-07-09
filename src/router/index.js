import Vue from 'vue'
import VueRouter from 'vue-router'
import Craft from '../views/Craft.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Craft',
    component: Craft
  }, 
  {
    path: '/craft',
    name: 'Craft',
    component: Craft
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/alchemist',
    name: 'Alchemist',
    component: () => import('../views/Alchemist.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
