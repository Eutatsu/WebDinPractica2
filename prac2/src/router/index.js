import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
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
