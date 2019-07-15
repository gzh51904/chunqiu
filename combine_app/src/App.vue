<template>
  <div id="box">
    <!-- <header v-show="showtop" class="appheader">
      <a href="javascript:;" @click="goBack">
        <i class="iconfont icon-fanhui" style="color:#00be88;font-weight:600;"></i>
      </a>
      <h1>发现</h1>
    </header>-->

    <keep-alive>
      <router-view />
    </keep-alive>

    <el-footer>
      <!-- v-model="selected" -->
      <mt-tabbar fixed v-model="selected">
        <mt-tab-item
          :id="item.name"
          v-for="item in pages"
          :key="item.path"
          @click.native="goto(item.path,item.name)"
          :class="{actname:item.path.slice(1)==$store.state.active}"
        >
          <!-- <router-link :to="item.path" tag="span"> -->
          <span class="navBottom">
            <!-- <img class="navPic" slot="icon" :src="item.icon" /> -->
            <i class="navPic" :class="item.classname"></i>
            <p class="navWord">{{ item.title }}</p>
          </span>
          <!-- </router-link> -->
        </mt-tab-item>
      </mt-tabbar>
    </el-footer>

    <!-- 尾部导航 -->
    <!-- <div v-if="showdaohang" class="footer">
      <a
        @click="goto(item.path,item.name)"
        href="javascript:void(0);"
        v-for="item in pages"
        :key="item.path"
        v-model="selected"
        :class="{actname:item.name==selected}"
      >
        <i :class="item.classname"></i>
        <span>{{item.title}}</span>
      </a>
    </div>-->
  </div>
</template>

<script>
import Vue from "vue";
import "./assets/iconfont/iconfont.css";
import "./plugins/base.css";
import { mapState } from "vuex";
export default {
  name: "app",
  data() {
    return {
      selected: "Home",
      pages: [
        {
          title: "首页",
          path: "/home",
          name: "Home",
          classname: "iconfont icon-shouye"
        },
        {
          title: "目的地",
          path: "/goal",
          name: "Goal",
          classname: "iconfont icon-mudedi"
        },
        {
          title: "发现",
          path: "/discover",
          name: "Discover",
          classname: "iconfont icon-faxian"
        },
        {
          title: "客服",
          path: "/phone",
          name: "Phone",
          classname: "iconfont icon-dianhua"
        },
        {
          title: "我的",
          path: "/mine",
          name: "Mine",
          classname: "iconfont icon-41"
        }
      ]
    };
  },
  computed: {
    showdaohang() {
      return this.$store.state.showdaohang;
    },
    ...mapState(["showtop", "showbottom"])
  },
  methods: {
    goto(path, name) {
      this.$router.push(path);
      this.$store.state.active = path.slice(1);
    },
    goBack() {
      // console.log("go back");
      history.back();
    },
    closekefu() {
      this.showkefu = false;
    },
    phoneAsk() {
      window.location.href = "tel://" + "13326774980";
    },
    onlineKefu() {
      this.showkefu = false;
      this.$router.push({ path: "/zixun" });
    }
  },
  created() {
    // 刷新保持高亮效果，刷新后保持当前的高亮的页面
    let hash = window.location.hash.slice(2);
    //
    this.$store.state.active = hash.substr(1);
    // console.log("7777", hash);
    if (hash != "") {
      if (hash.slice(0, 4) == 4) {
        console.log("qqqqqqq", hash);
        this.active = "goal";
      } else {
        hash = hash.replace(hash[0], hash[0].toUpperCase());
        this.selected = hash;
      }
    } else {
      this.active = "home";
    }
  }
};
</script>

<style scoped lang='scss'>
@import "./components/css/app.scss";
.actname {
  // color: #58bc58 !important;
  font-weight: bold;
}
.footer {
  z-index: 999;
  width: 100%;
  background: #fff;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  a {
    display: flex;
    flex-direction: column;
    padding-top: 1%;
    color: #a7a7a7;
    i {
      font-size: 20px;
      text-align: center;
    }
    span {
      font-size: 12px;
      text-align: center;
    }
  }
}
.mint-tabbar {
  height: 50px;

  > a {
    padding: 7px 0 5px 0 !important;
    .navBottom {
      .navPic {
        font-size: 22px;
      }

      .navWord {
        margin: 5px 0 0 0;
        font-size: 10px;
      }
    }
  }
}
</style>
