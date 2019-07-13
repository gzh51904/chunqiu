import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex);

const store = new Vuex.Store({
    state:{
        showdaohang:true
    },
    mutations:{
        changedaohang(state,val){
            state.showdaohang = val;
        }
    }
})

export default store;