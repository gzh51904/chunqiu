<template>
  <div class="main">
    <header>
      <a @click="goto('home')" href="javascript:void(0);">
        <i class="iconfont icon-jiantou3"></i>
      </a>
      <h1>搜索</h1>
    </header>
    <div class="dingwei">
      <a class="city-box" href="javascript:void(0);">
        <span class="city">
          {{city}}
          <i class="iconfont icon-ai-arrow-down"></i>
        </span>
      </a>
      <a class="search" href="javascript:void(0);">
        <i class="iconfont icon-fangdajing"></i>
        <input type="text" style="border:none;outline:medium" placeholder="目的地/景点/门票等" />
      </a>
    </div>
    <div class="scontent">
      <div class="search-hot">
        <h3 class="sctop">热门搜索</h3>
        <a href="javascript:void(0);">日本</a>
        <a href="javascript:void(0);">韩国</a>
        <a href="javascript:void(0);">英国</a>
        <a href="javascript:void(0);">越南</a>
        <a href="javascript:void(0);">柬埔寨</a>
        <a href="javascript:void(0);">哈尔滨</a>
        <a href="javascript:void(0);">韩国</a>
        <a href="javascript:void(0);">英国</a>
        <a href="javascript:void(0);">越南</a>
        <a href="javascript:void(0);">柬埔寨</a>
        <a href="javascript:void(0);">哈尔滨</a>
      </div>
      <div class="search-hot">
        <h3 class="sctop">搜索历史</h3>
        <p>暂无搜索历史记录</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    data(){
        return{
            city:''
        }
    },
  methods: {
    goto(name) {
      this.$router.push("/" + name);
    }
  },
  mounted(){
    //   this.$on('city',val=>{
    //       this.city = val;
    //   })
  },
  created(){
      this.city = this.$route.query.city;
  }
};
</script>
<style scoped lang="scss">
html {
  width: 100%;
  height: 100%;
}
a {
  color: #666;
  text-decoration: none;
}
.main {
  padding: 0 2%;
  height: 400px;
  border-bottom: 1px solid #ccc;
  header {
    background-color: #fff;
    height: 6%;
    padding-top: 6px;
    .icon-jiantou3 {
      font-size: 20px;
      margin: 0 0 0 15px;
      color: #58bc58;
    }
    h1 {
      position: absolute;
      top: 1%;
      right: 46%;
      margin: 0;
      font-size: 22px;
      text-align: center;
    }
  }
  .dingwei {
    margin: 3% 0 3% 5%;
    height: 7%;
    width: 90%;
    background: #fff;
    z-index: 2;
    border-radius: 15px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    .city-box {
      float: left;
      height: 100%;
      margin-left: 5%;
      .city {
        display: inline-block;
        line-height: 225%;
        font-size: 12px;
        color: #333;
        border-right: 1px solid #ccc;
        padding-right: 10px;
      }
    }
    .search {
      float: left;
      height: 100%;
      color: #ccc;
      margin-left: 6%;
      vertical-align: middle;
      line-height: 200%;
    }
  }
  .scontent {
    background-color: #fff;
    min-height: 40%;
    .search-hot {
      overflow: hidden;
      p {
        text-align: center;
        font-size: 0.55rem;
        margin-top: 10%;
      }
      .sctop {
        margin: 4% 0 4% 0;
        display: block;
        color: #999;
        font-size: 0.55rem;
      }
      a {
        float: left;
        height: 6%;
        padding: 0 0.64rem;
        margin: 0 0.34rem 0.34rem 0;
        background-color: #f4f6f8;
        border-radius: 0.08rem;
        color: #666;
        font-size: 14px;
      }
    }
  }
}
</style>


