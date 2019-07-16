<template>
  <ul class="disTabList" id="newlazy">
    <li class="disTabListLi" v-for="item in List" :key="item.id" v-lazy.newlazy="item">
      <h2>{{item.title}}</h2>
      <img :src="item.bigimgurl" alt />
      <button class="labelBtn1" v-if="item.label=='热门推荐'">{{item.label}}</button>
      <button class="labelBtn2" v-else-if="item.label=='小秋推荐'">{{item.label}}</button>
      <button class="labelBtn3" v-else>{{item.label}}</button>
      <div class="disuser">
        <div class="disuser_l">
          <img :src="item.tximgurl" alt />
          <strong>{{item.user}}</strong>
          <i class="iconfont icon-female2" v-if="item.gender=='girl'"></i>
          <i v-else class="iconfont icon-icon-test"></i>
          <span v-if="item.isVIP">S星人</span>
        </div>
        <div class="disuser_r">
          <span>
            <i class="iconfont icon-chakan"></i>
            {{item.look}}
          </span>
          <span>
            <i class="iconfont icon-dianzan"></i>
            {{item.good}}
          </span>
        </div>
      </div>
    </li>
  </ul>
</template>
<script>
import goodlist from "./data/DisGoodlist.vue";
export default {
  data() {
    return {
      List: ""
    };
  },
  created() {
    let NewGoodlist = JSON.parse(JSON.stringify(goodlist.disTabContent));
    NewGoodlist = NewGoodlist.filter(item => {      
      item.bigimgurl = require("../" + item.bigimgurl);
      item.tximgurl = require("../" + item.tximgurl);
      return item;
    });
    this.List = NewGoodlist;
  }
};
</script>


