import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state:{
        showone : localStorage.showone?localStorage.showone:"用户信息",
        showtwo :localStorage.showtwo?localStorage.showtwo:"用户管理",
        navlist:[{
            title:'用户管理',
            list:[{title : '用户信息',      name :  'userlist',   path:  '/userlist'},
                  {title : '添加用户信息',  name :  'useradd',    path:  '/useradd'},
                  {title : '用户详细信息',  name :  'userdetails',path:  '/userdetails'}
                 ]},
                 {title:'商品管理',
            list:[{title : '商品信息',     name :  'goodslist', path:  '/goodslist'},
                  {title : '添加/上架商品',name :  'goodsadd',   path:  '/goodsadd'},
                  {title : '修改商品信息', name :  'goodsmend',  path:  '/goodsmend'},
                 ]}
                ],
    },
    getters:{
  
    },
    mutations:{
        changone(state,val){
            state.showone = val;
        },
        changtwo(state,val){
            state.showtwo = val;
        },
        ergodic(state,val){
            let arr = state.navlist
            for(var i=0;i<arr.length;i++){
              for( var j=0;j<arr[i].list.length;j++){
                if(arr[i].list[j].title==val){
                localStorage.showone =val
                localStorage.showtwo =arr[i].title
                state.showtwo =arr[i].title;
                state.showone =val;
                break;
                }
              }
          }
        }
    }

   
});








export default store;