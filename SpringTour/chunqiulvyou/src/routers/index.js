import Vue from "vue"
import VueRouter from "vue-router";

Vue.use(VueRouter);

import Home from "../components/Home.vue"
import Goal from "../components/Goal.vue"
import Discover from "../components/Discover.vue"
import Kefu from "../components/Kefu.vue"
import Mine from "../components/Mine.vue"


let router = new VueRouter({
    routes: [
        {
            path: "/home",
            component: Home,
            name: "Home"
        }, {
            path: "/goal",
            component: Goal,
            name: "Goal"
        }, {
            path: "/discover",
            component: Discover,
            name: "Discover"
        }, {
            path: "/kefu",
            component: Kefu,
            name: "Kefu"
        }, {
            path: "/mine",
            component: Mine,
            name: "Mine"
        }],
    
})

export default router
