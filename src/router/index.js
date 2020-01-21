import Vue from 'vue'
import Router from 'vue-router'
import routes from './router'

Vue.use(Router)
Vue.use(require('vue-wechat-title'))

const router = new Router({
  mode: 'history',
  routes: routes
})

router.beforeEach((to, from, next) => {
  // 登录鉴权
  next()
})

router.afterEach(() => {
  window.scrollTo(0, 0)
})

export default router
