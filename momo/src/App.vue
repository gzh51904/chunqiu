<template>
  <div id="app">
    <header v-show="showtop" class="appheader">
      <a href="javascript:;" @click="goBack">
        <i class="iconfont icon-fanhui" style="color:#00be88;font-weight:600;"></i>
      </a>
      <h1>发现</h1>
    </header>
    <div class="main">
      <router-view />
    </div>
    <div class="fixbottom" v-show="showbottom">
      <ul class="appBottom">
        <li @click="goto(item.name)" v-for="item in btn" :key="item.name">
          <div class="appBottomItem">
            <i :class="[item.icon,{hometab:actname==item.name}]" class="appBottomI"></i>
            <span :class="{hometab:actname==item.name}">{{item.title}}</span>
          </div>
        </li>
      </ul>
    </div>
    <div class="kefubox" v-show="showkefu">
      <div class="kefutop">
        <div class="kefutopItem">
          <a href="javascript:;" @click="phoneAsk">
            <i class="iconfont icon-dianhua"></i>
            <span>电话咨询</span>
          </a>
        </div>
        <div class="kefutopItem">
          <a href="javascript:;" @click="onlineKefu">
            <i class="iconfont icon-xiaoxi"></i>
            <span>在线客服</span>
          </a>
        </div>
      </div>
      <div class="kefubottom" @click="closekefu">
        <i class="iconfont icon-shanchu"></i>
      </div>
      <div class="zhezhao"></div>
    </div>
  </div>
</template>

<script>
import "./assets/iconfont/iconfont.css";
import "./plugins/base.css";
import { mapState } from "vuex";

export default {
  name: "app",
  data() {
    return {
      btn: [
        {
          title: "首页",
          name: "Home",
          path: "/home",
          icon: "iconfont icon-shouye1"
        },
        {
          title: "目的地",
          name: "Goal",
          path: "/goal",
          icon: "iconfont icon-mudedi"
        },
        {
          title: "发现",
          name: "Discover",
          path: "/discover",
          icon: "iconfont icon-faxian",
          big: true
        },
        {
          title: "客服",
          name: "Kefu",
          path: "/kefu",
          icon: "iconfont icon-dianhua"
        },
        {
          title: "我的",
          name: "Mine",
          path: "/mine",
          icon: "iconfont icon-wode"
        }
      ],
      actname: "Home",
      showkefu: false
    };
  },
  components: {
    // Home
  },
  computed:{
    ...mapState(['showtop',"showbottom"]),
  },
  methods: {
    // ...mapMutations(["changeshowtop"]),
    goto(name) {
      if (name == "Kefu") {
        this.showkefu = true;
      } else {
        this.$router.push({ name });
        this.actname = name;
      }
    },
    goBack() {
      console.log("go back");
      history.back();
    },
    closekefu() {
      this.showkefu = false;
    },
    phoneAsk(){
      window.location.href = 'tel://' + '13326774980';
    },
    onlineKefu(){
      this.showkefu = false;
      this.$router.push({path:'/zixun'});
    }
  },
  created() {
    if (this.$route.name == null) {
      this.actname = "Home";
      this.$router.push({ name: "Home" });
    } else {
      this.actname = this.$route.matched[0].name;
    }
  }
};
</script>

<style lang="scss">
@import "./components/css/app.scss";
</style>
