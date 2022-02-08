import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../pages/home/Home.vue')
  },
  {
    path: '/login',
    name: 'login',
    
    //Faz com que a rota selecionada renderize um arquivo js somente quando for chamada
    //Exemplo: /login vai chamar os dados do login somente quando estiver nessa rota
    //Caso contrario ele traria tudo mas nao exibiria, diminuindo a performace
    component: () => import(/* webpackChunkName: "login" */ '../pages/login/Login.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
