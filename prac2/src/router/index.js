import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/hello',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/',
    name: 'mosaic',
    component: () => import('../components/Mosaic.vue')

  }
]


const router = new VueRouter({
  mode: "history",
  base: '/WebDinPractica2/', /*nombre de la carpeta donde se dirigirá github */
  routes
  })
  
export default router
