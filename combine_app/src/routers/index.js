import Vue from 'vue'
//引入vue-router
import VueRouter from 'vue-router'
// import axios from 'axios'
// Vue.prototype.$axios = axios;
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

//发现
import New from "../components/New.vue"
import Mvp from "../components/Mvp.vue"
import Advice from "../components/Advice.vue"
import Zixun from "../components/Zixun.vue"
import Log from "../components/Log.vue"
import Kefu from "../components/Kefu.vue"

//目的地页子组件
import Hotour from "../components/pages/Hotour.vue"
import Domestic from "../components/pages/Domestic.vue"
import Japanregion from "../components/pages/Japanregion.vue"
import Europeanregion from "../components/pages/Europeanregion.vue"
import Southeastasia from "../components/pages/Southeastasia.vue"
import Korea from "../components/pages/Korea.vue"
import Americas from "../components/pages/Americas.vue"
import Hmt from "../components/pages/Hmt.vue"
import Island from "../components/pages/Island.vue"
import Round from "../components/pages/Round.vue"

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
        component:Goal,
        children: [{
            name: "Hot",
            path: 'hot',
            component: Hotour
        }, {
            name: 'Guonei',
            path: 'guonei',
            component: Domestic
        }, {
            name: 'Japan',
            path: 'japan',
            component: Japanregion
        }, {
            name: 'EU',
            path: 'eu',
            component: Europeanregion
        }, {
            name: 'Southeastasia',
            path: 'southeastasia',
            component: Southeastasia
        }, {
            name: 'Korea',
            path: 'korea',
            component: Korea
        }, {
            name: 'Americas',
            path: 'americas',
            component: Americas
        }, {
            name: 'Hmt',
            path: 'hmt',
            component: Hmt
        }, {
            name: 'Island',
            path: 'island',
            component: Island
        }, {
            name: 'Round',
            path: 'round',
            component: Round
        }]
    },{
        name:'Discover',
        path:'/discover',
        component:Discover,
        children: [{
            path: "new",
            component: New,
            name: "New"
        }, {
            path: "mvp",
            component: Mvp,
            name: "Mvp"
        }, {
            path: "advice",
            component: Advice,
            name: "Advice"
        }]
    },{
        name:'Phone',
        path:'/phone',
        component:Phone
    },{
        name:'Tour',
        path:'/tour',
        component:Tour
    },{
        path: "/kefu",
        component: Kefu,
        name: "Kefu"
    }, {
        path: "/mine",
        component: Mine,
        name: "Mine"
    }, {
        path: "/zixun",
        component: Zixun,
        name: "Zixun"
    }, {
        path: "/log",
        component: Log,
        name: "Log"
    }]
})





export default router;