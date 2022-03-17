import Vue from 'vue'
import VueRouter from 'vue-router'
import MeuInicio from '../views/MeuInicio.vue'
import ListaPessoas from '../views/ListaPessoas.vue'
import LocalizacaoPessoas from '../views/LocalizacaoPessoas.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'MeuInicio',
    component: MeuInicio
  },
  {
    path: '/listapessoas',
    name: 'ListaPessoas',
    component: ListaPessoas
  },
  {
    path: '/localizacaopessoas',
    name: 'LocalizacaoPessoas',
    component: LocalizacaoPessoas
  },
]

const router = new VueRouter({
  routes
})

export default router
