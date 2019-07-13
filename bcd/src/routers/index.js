import Vue from 'vue'
//引入vue-router
import VueRouter from 'vue-router'
import axios from 'axios'
Vue.prototype.$axios = axios;
//使用
Vue.use(VueRouter);

//引入页面组件
import Home from '../components/Home.vue'
import Address from '../components/Address.vue'
import Search from '../components/Search.vue'
import Goal from '../components/Goal.vue'
import Discover from '../components/Discover.vue'
import Mine from '../components/Mine.vue'
import Phone from '../components/Phone.vue'
import Tour from '../components/Tour.vue'

let router = new VueRouter({
    routes: [{
        name: "Home",
        path: '/home',
        component: Home
    }, {
        path: '/',
        redirect: '/home'
    },{
        name:'Address',
        path:'/address',
        component:Address
    },{
        name:'Search',
        path:'/search',
        component:Search
    },,{
        name:'Goal',
        path:'/goal',
        component:Goal
    },{
        name:'Discover',
        path:'/discover',
        component:Discover
    },{
        name:'Mine',
        path:'/mine',
        component:Mine
    },{
        name:'Phone',
        path:'/phone',
        component:Phone
    },{
        name:'Tour',
        path:'/tour',
        component:Tour
    }]
})





export default router;