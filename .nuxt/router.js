import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _840b0780 = () => interopDefault(import('..\\pages\\homes\\index.vue' /* webpackChunkName: "pages/homes/index" */))
const _f8ba5662 = () => interopDefault(import('..\\pages\\auth\\login.vue' /* webpackChunkName: "pages/auth/login" */))
const _602bddad = () => interopDefault(import('..\\pages\\auth\\register.vue' /* webpackChunkName: "pages/auth/register" */))
const _15cd56fe = () => interopDefault(import('..\\pages\\post\\create.vue' /* webpackChunkName: "pages/post/create" */))
const _62f212ca = () => interopDefault(import('..\\pages\\account\\_username.vue' /* webpackChunkName: "pages/account/_username" */))
const _3510d740 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/homes",
    component: _840b0780,
    name: "homes"
  }, {
    path: "/auth/login",
    component: _f8ba5662,
    name: "auth-login"
  }, {
    path: "/auth/register",
    component: _602bddad,
    name: "auth-register"
  }, {
    path: "/post/create",
    component: _15cd56fe,
    name: "post-create"
  }, {
    path: "/account/:username?",
    component: _62f212ca,
    name: "account-username"
  }, {
    path: "/",
    component: _3510d740,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
