import Vue from 'vue'


//引入
import VueRouter from 'vue-router'
import iView from 'iview';
import 'iview/dist/styles/iview.css';

//组件引入
import goodslist from '../pages/goodslist.vue'
import userlist from '../pages/userlist.vue'
import addgoods from '../pages/addgoods.vue'
import changuser from '../pages/changuser.vue'
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
        path:'/addgoods',
        component : addgoods
    },{
        path:'/changuser',
        component : changuser
    },]
 
});


export default router;