import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import Vconsole from 'vconsole'
import JsBridge from './JsBridge'
import {Alert, Confirm, Toast, Loading} from 'wc-messagebox'
import 'wc-messagebox/style.css'
Vue.use(Alert)
Vue.use(Confirm)
Vue.use(Toast)
Vue.use(Loading)

// new Vconsole()
const IsIos = !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
const getUrlParam = val => {
  const url = window.location.href
  if (url.indexOf('?') === -1) return false
  const vars = url.split('?')[1].split('&')
  for (let i = 0; i < vars.length; i++) {
    let pair = vars[i].split('=')
    if (pair[0] == val) return pair[1]
  }
  return false
}

Vue.config.productionTip = false
Vue.prototype.$JsBridge = JsBridge
Vue.prototype.$isIos = IsIos // 系统判断
Vue.prototype.$formValue = getUrlParam('from') === 'app' // false --> 微信h5  || true --> app

// 获取token
window.localStorage.setItem('token', '')
JsBridge.GetIosMethods(bridge => {
  bridge.callHandler('dueWebCallNative',{
    actionType: 0,
    actionTarget: 'GetCustomerId',
    data: {}
  }, res => {
    Vue.prototype.$CustomerId = res
  })
  bridge.callHandler('dueWebCallNative',{
    actionType: 0,
    actionTarget: 'GetToken',
    data: {}
  }, res => {
    window.localStorage.setItem('token', res)
  })
  new Vue({
    router,
    render: h => h(App),
  }).$mount('#app')
  return false
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
