<template>
  <div id="minebox">
    <div class="mineTop">
      <p v-if="islog">
        你好，{{username}}
        <a href="javasript:;" @click="gotolog">切换账号</a>
      </p>
      <p v-else>
        登录春秋，即刻启程
        <a href="javasript:;" @click="gotolog">登录/注册</a>
      </p>
      <i class="iconfont icon-xiaoxi"></i>
    </div>
    <div class="mineVip">
      <h2>
        <span>
          <img src="../assets/MineImg/vip.png" alt />
        </span>超级会员来袭
      </h2>
      <a href="javascript:;">
        千元红包，双倍积分，专享折扣
        <i class="iconfont icon-jiantou"></i>
      </a>
    </div>
    <div class="mineOrder">
      <ul class="commonUl" style="border-top: 1px solid #e8e8e8;border-bottom: 1px solid #e8e8e8;">
        <li>
          <a href="javascript:;">
            <i class="iconfont icon-dingdan"></i>
            <div style="border:none;">
              全部订单
              <i class="iconfont icon-jiantou"></i>
            </div>
          </a>
        </li>
      </ul>
      <ul class="specialUl">
        <li>
          <a href="javascript:;">
            <i></i>审核中
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <i></i>待付款
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <i></i>待出行
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <i></i>待点评
          </a>
        </li>
      </ul>
      <ul class="commonUl">
        <li v-for="item in toplist" :key="item.id">
          <a href="javascript:;">
            <i :class="item.icon"></i>
            <div>
              {{item.title}}
              <i class="iconfont icon-jiantou"></i>
            </div>
          </a>
        </li>
      </ul>
      <ul class="commonUl">
        <li v-for="item in midlist" :key="item.id">
          <a href="javascript:;">
            <i :class="item.icon"></i>
            <div>
              {{item.title}}
              <i class="iconfont icon-jiantou"></i>
              <p v-if="item.tips">{{item.tips}}</p>
            </div>
          </a>
        </li>
      </ul>
      <ul class="commonUl">
        <li v-for="item in bottomlist" :key="item.id">
          <a href="javascript:;">
            <i :class="item.icon"></i>
            <div>
              {{item.title}}
              <i class="iconfont icon-jiantou"></i>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
// import { mapMutations } from "vuex";
import orderlist from "./data/mine.vue";
export default {
  data() {
    return {
      toplist: orderlist.toplist,
      midlist: orderlist.midlist,
      bottomlist: orderlist.bottomlist,
      islog: false,
      username:''
    };
  },
  methods: {
    // ...mapMutations(["changeshowtop", "changeshowbottom"]),

    gotolog() {
      this.$router.push({ name: "Log" });
    }
  },
  // beforeRouteLeave(to, from, next) {
  //   if (to.name == "Home" || to.name == "Mine") {
  //     this.changeshowtop(false);
  //   } else {
  //     this.changeshowtop(true);
  //   }
  //   next();
  // },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      // vm.changeshowtop(false);
      // vm.changeshowbottom(true);
      let username = localStorage.getItem('username');
      if(username){
        vm.username = username;
        vm.islog = true;
      }else{
        vm.islog = false;
      }
    });
  }
};
</script>
<style lang="scss">
@import "./css/mine.scss";
.mineTop {
  background-image: url("../assets/MineImg/topbg.png");
  background-size: 100% 100%;
}
.specialUl {
  i {
    background-image: url("../assets/MineImg/usericon.png");
    background-size: 1.5rem 6rem;
    display: block;
    width: 1.5rem;
    height: 1.5rem;
    margin: 0 auto;
    margin-bottom: 0.3125rem;
  }
  li:nth-of-type(2) i {
    background-position: 0 -1.5rem;
  }
  li:nth-of-type(3) i {
    background-position: 0 -3rem;
  }
  li:nth-of-type(4) i {
    background-position: 0 -4.5rem;
  }
}
</style>

