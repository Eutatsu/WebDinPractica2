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
    component: () => import('../views/Mosaic.vue')

  },
  {
    path: '/deuteranopia',
    name: 'deuteranopia',
    component: () => import('../views/MosaicDeuteranopia.vue')

  },
  {
    path: '/tritanopia',
    name: 'tritanopia',
    component: () => import('../views/MosaicTritanopia.vue')

  },
  {
    path: '/achromatopsia',
    name: 'achromatopsia',
    component: () => import('../views/MosaicAchromatopsia.vue')

  },
  {
    path: '/baixavisio',
    name: 'baixavisio',
    component: () => import('../views/MosaicBaixaVisió.vue')

  },
  {
    path: '/cognitiu',
    name: 'cognitiu',
    component: () => import('../views/MosaicCognitiu.vue')

  },

  {
    path: '/motriu',
    name: 'motriu',
    component: () => import('../views/MosaicMotriu.vue')

  }
]


const router = new VueRouter({
  mode: "history",
  base: '/WebDinPractica2/', 
  routes
  })
  
export default router
