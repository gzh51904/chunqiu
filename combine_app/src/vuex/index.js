import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex);

const store = new Vuex.Store({
    state:{
        showdaohang:true,
        showtop:true,
        showbottom:true,
        axiang: '',
    },
    mutations:{
        changedaohang(state,val){
            state.showdaohang = val;
        },
        changeshowtop(state,flg){
            state.showtop = flg
        },
        changeshowbottom(state,flg){
            state.showbottom = flg
        },
        change(state,payload){
            state.axiang = payload;
            // localStorage.axiang = payload;
            }
    }
})

export default store;