import Vue from "vue"
import VueRouter from "vue-router";

Vue.use(VueRouter);

import Home from "../components/Home.vue"
import Goal from "../components/Goal.vue"
import Discover from "../components/Discover.vue"
import Kefu from "../components/Kefu.vue"
import Mine from "../components/Mine.vue"
import New from "../components/New.vue"
import Mvp from "../components/Mvp.vue"
import Advice from "../components/Advice.vue"
import Zixun from "../components/Zixun.vue"
import Log from "../components/Log.vue"
// import store from "../vuex"

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
            name: "Discover",
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
        }, {
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
        }],
        beforeEach(to,from,next){
            console.log(this);
        }
})



export default router
