import Vue from 'vue'


//引入
import VueRouter from 'vue-router'
import iView from 'iview';
import 'iview/dist/styles/iview.css';

//组件引入
import goodslist from '../pages/goodslist.vue'
import userlist from '../pages/userlist.vue'
import goodsadd from '../pages/goodsadd.vue'
import userdetails from '../pages/userdetails.vue'
import useradd from '../pages/useradd.vue'
import goodsamend from '../pages/goodsamend.vue'
//使用
Vue.use(VueRouter)
Vue.use(iView);

//配置参数
let router = new VueRouter({
    routes :[{
      path:'/userlist',
      component : userlist
    },{
        path:'/goodslist',
        component : goodslist
    },{
        path:'/goodsadd',
        component : goodsadd
    },{
        path:'/userdetails',
        component : userdetails
    },{
        path:'/useradd',
        component : useradd
    },{
        path:'/goodsamend',
        component :goodsamend
    },]
 
});


export default router;