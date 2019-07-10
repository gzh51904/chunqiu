import Vue from 'vue'
import App from './App.vue'
import router from "./routers"
import MintUI from 'mint-ui'  //npm i mint-ui -S
import 'mint-ui/lib/style.css'
import axios from "axios"     //npm i axios


Vue.use(MintUI) // npm i babel-plugin-component
Vue.use(router)
Vue.$axios = axios


Vue.config.productionTip = false


new Vue({
  render: h => h(App),
  router
}).$mount('#app')
