import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './vuex';
import axios from 'axios'

Vue.config.productionTip = false

Vue.prototype.$axios = axios
axios.defaults.baseURL = 'http://10.3.141.56:2019'

let token = localStorage.token?localStorage.token:'';
// axios的请求拦截
// 发出请求之前进行拦截校验
axios.interceptors.request.use(config=>{
  //设置响应头
    config.headers.token = token;
    return config;
},(error)=>{
    return error
});

//请求响应后进行拦截校验,拦截过期或者伪密码
axios.interceptors.response.use(res=>{
  if(router.currentRoute.matched.some(item=>item.meta.requiresAuth) &&res.data.status == 400){
   
  }
  return res;
 // console.log(res.data.status)
 },(error)=>{
   return Promise.reject(error);
 });

new Vue({
  render: h => h(App),
  router,store
}).$mount('#app')
