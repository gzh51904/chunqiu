import Vue from 'vue'
import App from './App.vue'
import router from './routers/index.js'
import store from './vuex'
import './iconfont/iconfont.css'
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
// import MintUI from 'mint-ui'
// import 'mint-ui/lib/style.css'


import axios from 'axios';
Vue.prototype.$axios = axios;
// 配置axios请求的基础路径
axios.defaults.baseURL = 'http://47.94.157.240:2019';

//跳转回顶部
router.beforeEach((to, from, next) => {
  // chrome
  document.body.scrollTop = 0
  // firefox
  document.documentElement.scrollTop = 0
  // safari
  window.pageYOffset = 0
  next()
})


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
