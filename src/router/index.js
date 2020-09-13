import Vue from 'vue'
import VueRouter from 'vue-router'
import newClient from '../components/ScreenClient/Create.vue'
import listClients from '../components/ScreenClient/List.vue'
import editClient from '../components/ScreenClient/Edit.vue'
import newRecipe from '../components/ScreenRecipe/Create.vue'
import editRecipe from '../components/ScreenRecipe/Edit.vue'

Vue.use(VueRouter)

const routes = [
  {
    name: 'NovoCliente',
    path: '/novo',
    component: newClient
  },
  {
    name: 'ListaClientes',
    path: '/lista',
    component: listClients
  },
  {
    name:'EditarCliente',
    path:'/cliente/:id',
    component: editClient
  },
  {
    name:'NovaAvaliacao',
    path:'/avaliacao/:nome',
    component: newRecipe
  },
  {
    name:'EditarAvaliacao',
    path:'/avaliacao/editar/:id',
    component: editRecipe
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
