import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

const store = new Vuex.Store({
    state:{
        showtop:true,
        showbottom:true
    },
    mutations:{
        changeshowtop(state,flg){
            state.showtop = flg
        },
        changeshowbottom(state,flg){
            state.showbottom = flg
        }
    }
})

export default store;