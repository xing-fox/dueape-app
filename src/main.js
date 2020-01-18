import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vconsole from 'vconsole'
import FastClick from 'fastclick'
import JsBridge from './JsBridge'

new Vconsole()
const IsIos = !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
const getUrlParam = val => {
  const url = window.location.href
  const vars = url.split('&')
  for (let i = 0; i < vars.length; i++) {
    let pair = vars[i].split('=')
    if (pair[0] == val) return Number(pair[1])
  }
  return false
}

Vue.config.productionTip = false
Vue.prototype.$JsBridge = JsBridge
Vue.prototype.$isIos = IsIos // 系统判断
Vue.prototype.$formValue = getUrlParam('form') === 'app' // 0 --> 微信h5  || 1 --> app

if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function() {
      FastClick.attach(document.body)
  }, false)
}

//获取token
window.localStorage.setItem('token', '')
// JsBridge.GetIosMethods(bridge => {
//   bridge.callHandler('dueWebCallNative',{
//     actionType: 0,
//     actionTarget: 'GetToken',
//     data: {}
//   }, res => {
//     window.localStorage.setItem('token', res)
//     new Vue({
//       router,
//       render: h => h(App),
//     }).$mount('#app')
//   })
// })

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
