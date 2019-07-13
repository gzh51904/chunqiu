import Vue from "vue"
import VueRouter from "vue-router";

Vue.use(VueRouter);

import Error from "../components/Error.vue"
import Home from "../components/Home.vue"
import Goal from "../components/Goal.vue"
import Discover from "../components/Discover.vue"
import Kefu from "../components/Kefu.vue"
import Mine from "../components/Mine.vue"
import Search from "../components/Search.vue"


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
    // mode: "history",
    routes: [{
        // 重定向
        // path: '/',
        path: '*',
        redirect: {
            name: 'Home',
            // redirect: '/Error'
        }
    }, {
        path: "/error",
        component: Error,
        name: "Error"
    }, {
        path: "/home",
        component: Home,
        name: "Home"
    }, {
        path: "/goal",
        component: Goal,
        name: "Goal",
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
    }, {
        path: "/kefu",
        component: Kefu,
        name: "Kefu"
    }, {
        path: "/discover",
        component: Discover,
        name: "Discover"
    }, {
        path: "/mine",
        component: Mine,
        name: "Mine"
    }, {
        path: "/search",
        component: Search,
        name: "Search"
    }]
})
export default router