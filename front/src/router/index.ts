import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/item/:id',
    name: 'Item',
    component: () => import(/* webpackChunkName: "item" */ '../views/Item.vue'),
  },
  {
    path: '/anuncios',
    name: 'Ads',
    component: () => import(/* webpackChunkName: "ads" */ '../views/Ads.vue'),
    meta: {
      auth: true,
    },
  },
  {
    path: '/anuncio/?:id',
    name: 'Ad',
    component: () => import(/* webpackChunkName: "ad" */ '../views/Ad.vue'),
    meta: {
      auth: true,
    },
  },
  {
    path: '/quem-somos',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/perfil',
    name: 'Profile',
    component: () => import(/* webpackChunkName: "profile" */ '../views/Profile.vue'),
    meta: {
      auth: true,
    },
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, _, next) => {
  if (to.meta?.auth && !store.getters.logged) {
    next({
      path: '/login',
      query: {
        redirect: to.fullPath,
      },
    })
  } else {
    next()
  }
})

export default router
