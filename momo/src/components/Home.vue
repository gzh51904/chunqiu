<template>
    <div>
        首页
    </div>
</template>
<script>
import { mapMutations } from "vuex";
export default {
    methods:{
        ...mapMutations(['changeshowtop']),
    },
    created(){
        this.changeshowtop(false);
        // console.log('Home is created');
    },
    destroyed(){
        this.changeshowtop(true);
        // console.log('Home is destroy');
    }
}
</script>

