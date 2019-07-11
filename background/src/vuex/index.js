import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    modules:{
   
    },
    // state
    

    // getters
    // 一般用于对state进行处理
    // getters:{
        // saleGoodslist(state){
        //     return state.goodslist.map(item=>{
        //         item.price *= 0.8;
        //         return item;
        //     })
        // }
    // },

    // mutations
    // 修改state的唯一方式
    // 触发方式：store.commit('add',{name:'显示器'})
   
});








export default store;