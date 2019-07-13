import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'

import MintUI from 'mint-ui'
Vue.use(MintUI)
import "mint-ui/lib/style.css"

import { Lazyload } from 'mint-ui'
Vue.use(Lazyload);

import store from './vuex'

// import {Element} from "element-ui";
// Vue.use(Element);

import axios from 'axios'
Vue.prototype.$axios = axios

import router from "./routers"
Vue.use(router)


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
