<template>
  <div class="home">
    <el-carousel height="10rem">
      <el-carousel-item>
        <img class="banner" src="../images/banner1.jpg" alt />
      </el-carousel-item>
      <el-carousel-item>
        <img class="banner" src="../images/banner2.jpg" alt />
      </el-carousel-item>
      <el-carousel-item>
        <img class="banner" src="../images/banner3.jpg" alt />
      </el-carousel-item>
      <el-carousel-item>
        <img class="banner" src="../images/banner4.jpg" alt />
      </el-carousel-item>
      <el-carousel-item>
        <img class="banner" src="../images/banner5.jpg" alt />
      </el-carousel-item>
    </el-carousel>
    <div class="nav-box">
      <a href="javascript:void(0);">
        <img src="../images/nav1.png" alt />
        <span>出境游</span>
      </a>
      <a href="javascript:void(0);">
        <img src="../images/nav2.png" alt />
        <span>国内游</span>
      </a>
      <a href="javascript:void(0);">
        <img src="../images/nav3.png" alt />
        <span>跟团游</span>
      </a>
      <a href="javascript:void(0);">
        <img src="../images/nav4.png" alt />
        <span>自由行</span>
      </a>
      <a href="javascript:void(0);">
        <img src="../images/nav5.png" alt />
        <span>旅行严选</span>
      </a>
      <a href="javascript:void(0);">
        <img src="../images/nav6.png" alt />
        <span>限量疯抢</span>
      </a>
      <a href="javascript:void(0);">
        <img src="../images/nav7.png" alt />
        <span>日本游</span>
      </a>
      <a href="javascript:void(0);">
        <img src="../images/nav8.png" alt />
        <span>泰国游</span>
      </a>
      <a href="javascript:void(0);">
        <img src="../images/nav9.png" alt />
        <span>欧美非</span>
      </a>
      <a href="javascript:void(0);">
        <img src="../images/nav10.png" alt />
        <span>生活+</span>
      </a>
      <div style="clear:both;"></div>
      <div class="dingwei" :class="navBarFixed ">
        <a @click="goto('address')" class="city-box" href="javascript:void(0);">
          <span class="city">
            {{city}}
            <i class="iconfont icon-ai-arrow-down"></i>
          </span>
        </a>
        <a class="search" @click="goto('search')" href="javascript:void(0);">
          <i class="iconfont icon-fangdajing"></i>
          <input type="text" style="border:none;outline:medium" placeholder="搜索你想去的地方" />
        </a>
      </div>
    </div>
    <div class="qianggou">
      <div class="qianggoutop">
        <ul>
          <li>
            <figure class="img-box">
              <img class="goodimg" src="../images/goods1.jpg" alt />
            </figure>
            <div class="content-box">
              <h2>【限时抢购】广州直飞往返日本大阪5日自由行（双人赠送Wifi+BIC优惠券+返程升级至27KG行李额）</h2>
              <ul>
                <li class="money">
                  ￥
                  <em>1499</em>起
                </li>
                <li class="where">
                  <span>广州出发</span>
                  <span class="score">| 评分4.36</span>
                </li>
                <div style="clear:both;"></div>
              </ul>
            </div>
            <div style="clear:both;"></div>
          </li>
        </ul>
      </div>
      <ul class="qianggoubut">
        <li>
          <a href="javascript:void(0);">
            <h3>新人大礼包</h3>
            <p>666优惠券</p>
            <img src="../images/midd1.png" alt />
          </a>
        </li>
        <li>
          <a href="javascript:void(0);">
            <h3>官网专享</h3>
            <img src="../images/midd2.png" alt />
          </a>
        </li>
        <li>
          <a href="javascript:void(0);">
            <h3>欧美非专场</h3>
            <img src="../images/midd3.png" alt />
          </a>
        </li>
      </ul>
    </div>
    <div class="nav2">
      <ul>
        <li>
          <b>本季主打</b>
        </li>
        <li>
          <b>品质出行</b>
        </li>
        <li>
          <b>省心国内</b>
        </li>
        <div style="clear:both;"></div>
      </ul>
    </div>
    <div class="goodlist">
      <ul>
        <li @click="gotogood(item.productId)" v-for="item in goodslist" :key="item._id">
          <figure class="img-box">
            <img class="goodimg" :src="item.imgurl" />
          </figure>
          <div class="content-box">
            <h2>{{item.productName}}</h2>
            <p class="sp"></p>
            <p class="time">班期:{{item.scheduleDateList.join(' ')}}</p>
            <ul>
              <li class="money">
                ￥
                <em>{{item.price}}</em>起
              </li>
            </ul>
          </div>
          <div style="clear:both;"></div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { Carousel, CarouselItem, Tabs, TabPane } from "element-ui";
Vue.use(Carousel);
Vue.use(CarouselItem);
Vue.use(Tabs);
Vue.use(TabPane);
export default {
  data() {
    return {
      city: "",
      navBarFixed: "jueduidingwei",
      goodslist: []
    };
  },
  async created() {
    await this.$axios.get("http://ip-api.com/json/?lang=zh-CN").then(res => {
      this.city = res.data.city;
      // this.$emit('city',this.city)
    });
    await this.$axios.get("http://10.3.141.56:2019/goodlist").then(res => {
      let data = res.data.slice(10, 20);
      this.goodslist = data;
    });
  },
  methods: {
    goto(name) {
      this.$router.push({ path: "/" + name, query: { city: this.city } });
    },
    gotogood(id) {
      this.$router.push({ path: "./tour", query: { goodid: id } });
      this.$store.commit("changedaohang", false);
    },
    watchScroll() {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      if (scrollTop > 300) {
        this.navBarFixed = "navBarWrap";
      } else {
        this.navBarFixed = "jueduidingwei";
      }
    }
  },
  mounted() {
    //事件监听滚动条
    window.addEventListener("scroll", this.watchScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.watchScroll);
  }
};
</script>
<style  lang="scss">
* {
  box-sizing: border-box;
}
body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}
ul {
  list-style: none;
}
a {
  text-decoration: none;
}
.el-carousel__indicator {
  width: 10px !important;
}
.banner {
  height: 100%;
  width: 100%;
}
.nav-box {
  position: relative;
  padding-top: 1rem;
  padding: 0.43rem;
  margin-bottom: 0.43rem;
  display: flex;
  flex-wrap: wrap;
  .dingwei {
    height: 30px;
    width: 90%;
    background: #fff;
    border-radius: 0.09rem;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    .city-box {
      float: left;
      height: 100%;
      margin-left: 5%;
      .city {
        display: inline-block;
        line-height: 200%;
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
      margin-left: 8%;
      vertical-align: middle;
      line-height: 150%;
    }
  }
  .jueduidingwei {
    position: absolute;
    top: -6%;
    right: 5%;
    z-index: 2;
  }
  .navBarWrap {
    position: fixed;
    top: 0;
    right: 5%;
    z-index: 999;
  }
  > a {
    width: 52px;
    height: 70px;
    text-align: center;
    margin: 16px 10px 0 10px;
    border-radius: 0.09rem;
    overflow: hidden;
    font-size: 0.55rem;
    img {
      width: 100%;
      height: 42px;
      background-image: none;
    }
    span {
      text-align: center;
      color: #333;
      font-size: 0.55rem;
    }
  }
}
.qianggou {
  padding: 0 2% 0 2%;
  .qianggoutop {
    ul {
      padding: 0 !important;
      li {
        .img-box {
          width: 35%;
          float: left;
          margin: 0 !important;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .content-box {
          float: left;
          width: 60%;
          margin-left: 0.625rem;
          h2 {
            margin-top: 1%;
            min-height: 20px;
            max-height: 30px;
            line-height: 15px;
            overflow: hidden;
            color: #333;
            font-size: 14px;
            text-overflow: ellipsis;
          }
          ul {
            height: 1.25rem;
            margin-top: 1.875rem;
            li {
              float: left;
              height: 100%;
              line-height: 1.25rem;
            }
            .money {
              font-size: 0.75rem;
              color: #f00;
              em {
                font-style: normal;
                font-size: 1rem;
              }
            }
            .where {
              margin-left: 2%;
              font-size: 0.75rem;
              line-height: 0.75rem;
              span {
                display: inline-block;
                line-height: 1.5625rem;
              }
              span:last-child {
                margin-left: 0.3125rem;
              }
            }
          }
        }
      }
    }
  }
  .qianggoubut {
    padding: 0px !important;
    display: flex;

    justify-content: space-between;
    li:first-child {
      margin-left: 0;
      background-color: #fff2e6;
    }
    li:last-child {
      margin-right: 0;
      background-color: #ffefec;
    }
    li {
      background-color: #f5f0fb;
      text-align: space-around;
      color: #333;
      width: 33%;
      height: 60%;
      a {
        display: block;
        height: 5.625rem;
        width: 100%;
        position: relative;
        overflow: hidden;
        color: #333;
        img {
          width: 5.625rem;
          height: 2.8125rem;
          position: absolute;
          left: 10%;
          bottom: 0;
        }
        h3 {
          height: 0.875rem;
          line-height: 0.875rem;
          overflow: hidden;
          margin: 0.4rem 0 0.1rem;
          font-size: 0.625rem;
          color: #444;
          z-index: 1;
          text-align: center;
        }
        p {
          height: 0.75rem;
          font-size: 0.5rem;
          line-height: 0.75rem;
          overflow: hidden;
          z-index: 1;
          margin: 0;
          padding: 0;
          text-align: center;
        }
      }
    }
  }
}
.nav2 {
  ul {
    margin: 0;
    padding: 0;
    height: 2.625rem;
    line-height: 2.625rem;
    border-bottom: 0.0625rem solid #ccc;
    li {
      float: left;
      color: #555;
      margin: 0 5% 0 5%;
    }
    li:first-child {
      margin-left: 13%;
    }
    li:hover {
      color: #58bc58;
      border-bottom: 0.1875rem solid #58bc58;
    }
  }
}
.goodlist {
  > ul {
    padding: 0 0.625rem 0 0.625rem !important;
    > li {
      border-bottom: 0.0625rem solid #ccc;
      padding-bottom: 0.3125rem;
      .img-box {
        width: 38%;
        float: left;
        margin: 0 !important;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .content-box {
        float: left;
        width: 55%;
        margin-left: 0.625rem;
        h2 {
          margin-top: 1%;
          min-height: 1.25rem;
          max-height: 1.875rem;
          line-height: 0.9375rem;
          overflow: hidden;
          color: #333;
          font-size: 0.875rem;
          text-overflow: ellipsis;
        }
        .sp {
          height: 0.64rem;
          overflow: hidden;
          margin-bottom: 0;
          margin-top: 0.21rem;
        }
        .time {
          height: 0.9375rem;
          margin-top: 0.21rem;
          margin-bottom: 0.625rem;
          color: grey;
          font-size: 0.75rem;
        }
        ul {
          height: 1.25rem;
          padding: 0;
          li {
            float: left;
            height: 100%;
            line-height: 1.25rem;
          }
          .money {
            font-size: 0.75rem;
            color: #f00;
            em {
              font-style: normal;
              font-size: 1.5rem;
            }
          }
        }
      }
    }
  }
}
</style>


