<template>
  <div class="aa" style="height:100%;width:100%;position:fixed;top:0;left:0;overflow:auto;padding-top: 2.625rem;" @scroll="handlescroll">
    <header class="appheader">
      <a href="javascript:;" @click="goBack">
        <i class="iconfont icon-fanhui" style="color:#00be88;font-weight:600;"></i>
      </a>
      <h1>发现</h1>
    </header>
    <mt-search cancel-text="取消" placeholder="按关键词搜索一下"></mt-search>
    <div class="banner">
      <mt-swipe :auto="2000">
        <mt-swipe-item>
          <img src="../assets/DiscoverImg/ban1.jpg" alt />
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="../assets/DiscoverImg/ban2.jpg" alt />
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="../assets/DiscoverImg/ban3.jpg" alt />
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="../assets/DiscoverImg/ban4.jpg" alt />
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="../assets/DiscoverImg/ban5.png" alt />
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <div class="distab">
      <ul class="distabUl" :class="navfix">
        <li
          v-for="(item) in disTabHead"
          :key="item.name"
          class="distabLi"
          @click="changeTab(item.name)"
        >
          <a
            href="javasctipt:;"
            class="distabLiA"
            :class="{changeAct:actname==item.name}"
          >{{item.title}}</a>
        </li>
      </ul>
      <router-view />
    </div>
  </div>
</template>

<script>
import goodlist from "./data/DisGoodlist.vue";
export default {
  data() {
    return {
      disTabHead: [
        {
          name: "New",
          title: "最新",
          path: "/new"
        },
        {
          name: "Mvp",
          title: "达人游记",
          path: "/mvp"
        },
        {
          name: "Advice",
          title: "官方推荐",
          path: "/advice"
        }
      ],
      actname: "",
      navfix: ""
    };
  },
  methods: {
    changeTab(name) {
      this.$router.push({ name });
      this.actname = name;
    },
    handlescroll(e) {
      let eh = e.srcElement.scrollTop;
      if (eh >= 130) {
        this.navfix = "addfixtop";
      }
      if (eh < 130) {
        this.navfix = "";
      }
    },
    goBack() {
      console.log("go back");
      history.back();
    }
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      if (vm.$route.name == "Discover") {
        vm.actname = "New";
        vm.$router.push({ name: "New" });
      } else {
        vm.actname = vm.$route.name;
      }
    });
  }
};
</script>

<style lang="scss">
.changeAct {
  color: #00be88;
  border-bottom: 0.125rem solid rgb(0, 190, 136);
}
.addfixtop {
  position: fixed;
  top: 2.625rem;
  left: 0;
  right: 0;
}
@import "./css/discover.scss";
</style>


