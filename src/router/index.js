import Vue from 'vue'
import VueRouter from 'vue-router'
import Create from '../components/Screen/Create.vue'
import List from '../components/Screen/List.vue'

Vue.use(VueRouter)

const routes = [
  {
    name: 'Novo',
    path: '/novo',
    component: Create
  },
  {
    name: 'Lista',
    path: '/lista',
    component: List
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
