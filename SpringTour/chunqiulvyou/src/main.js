// main.js为入口文件
import Vue from 'vue';
import App from './App.vue';
import router from './routers';
import store from './vuex';

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

// import VueLazyload from 'vue-lazyload'
// Vue.use(VueLazyload, {
//   error: require('./assets/img/goodsid1.png'),
//   loading: require('./assets/img/goodsid2.png')
// })



// 引入axios，并配置成实例的属性 .$axios
import axios from 'axios';
Vue.prototype.$axios = axios;
// 配置axios请求的基础路径
// axios.defaults.baseURL = 'http://localhost:1904';
// axios.defaults.baseURL = 'http://localhost:2019';
axios.defaults.baseURL = 'http://10.3.141.56:2019';


// // ====================================================
// // 请求拦截：发送token;(每次请求前都进入)
// axios.interceptors.request.use(config => {
//   // 每次利用axios发起的请求，都会进入到这里
//   // 添加token 
//   let token = localStorage.getItem('Authorization');
//   if (config.url != '/login') {
//     config.headers.Authorization = token;
//   }
//   return config;
// }, error => {
//   // 请求失败进入这个回调
//   return Promise.reject(error);
// });
// // ====================================================

// // 响应拦截：校验token
// axios.interceptors.response.use(res => {
//   // 判断token是否校验成功
//   // 校验不成功：过期或被伪造
//   // console.log(router.currentRoute.matched.some(item => item.meta.requiresAuth))

//   if (router.currentRoute.matched.some(item => item.meta.requiresAuth) && res.data.code == 401) {
//   // if (res.data.code == 401) {

//     router.replace({
//       path: '/login',
//       query: {
//         redirectTo: router.currentRoute.fullPath
//       }
//     })
//   }
//   return res;
// }, error => {
//   // Do something with response error
//   return Promise.reject(error);
// });
// // ====================================================


Vue.config.productionTip = false

new Vue({
  render: h => h(App),

  // 4.把router实例注入到vue实例中,在brforecreate和create之间注入
  router,
  store // store实例注入到vue实例中
}).$mount('#app')