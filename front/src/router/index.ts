import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/item/:id',
    name: 'Item',
    component: () => import(/* webpackChunkName: "itens" */ '../views/Item.vue')
  },
  {
    path: '/anuncios',
    name: 'Ads',
    component: () => import(/* webpackChunkName: "itens" */ '../views/Ads.vue')
  },
  {
    path: '/anuncio/?:id',
    name: 'Ad',
    component: () => import(/* webpackChunkName: "itens" */ '../views/Ad.vue')
  },
  {
    path: '/quem-somos',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/profile',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
