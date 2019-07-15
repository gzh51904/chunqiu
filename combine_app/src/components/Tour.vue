<template>
  <div class="tour">
    <div :class="navFixed" class="touheader">
      <a @click="goback" class="tou_fl" href="javascript:void(0);">
        <i class="iconfont icon-jiantou3"></i>
      </a>
      <h1 :class="showhide">产品详情</h1>
      <section class="tou_fr">
        <a class="shouye" @click="goto" href="javascript:void(0);">
          <i class="iconfont icon-shouye1"></i>
        </a>
        <a class="fenxiang" href="javascript:void(0);">
          <i class="iconfont icon-xiaoxi"></i>
        </a>
      </section>
    </div>
    <div class="header_img">
      <img :src="imgurl" />
    </div>
    <div class="goodcontent">
      <div class="h2">
        <b>{{this.msg.productName}}</b>
      </div>
      <div class="money">
        <span class="fuhao">
          ¥
          <em>{{this.msg.price}}</em>
          <span>起/人</span>
          <i class="iconfont icon-hua"></i>
        </span>
      </div>
      <div class="tag-box">
        <span>
          <i class="iconfont icon-hua"></i>产生积分
        </span>
        <span>
          <i class="iconfont icon-hua"></i>积分抵扣
        </span>
        <span>
          <i class="iconfont icon-hua"></i>即时确认
        </span>
      </div>
    </div>
    <div class="coupon">
      <span class="h3">领券</span>
      <div class="couponbox">
        <a href="javascript:void(0);">
          <b>满14999减300</b>
        </a>
        <a href="javascript:void(0);">
          <b>满10000减200</b>
        </a>
        <a href="javascript:void(0);">
          <b>满9999减200</b>
        </a>
        <div style="clear:both;"></div>
      </div>
      <span class="jiaobiao">
        <i class="iconfont icon-jiantou"></i>
      </span>
    </div>
    <div class="chufa">
      <div class="chufa_top">
        <h3>选择出发时间/人数</h3>
        <span class="dis">(以下价格均为起价)</span>
        <span class="jiaobiao">
          <i class="iconfont icon-jiantou"></i>
        </span>
        <div class="t_txt">
          <ul>
            <li>
              07-20 周六
              <em>￥1899</em>
            </li>
            <li>
              07-22 周一
              <em>￥1899</em>
            </li>
            <li>
              07-29 周一
              <em>￥1899</em>
            </li>
            <li class="lastli">更多日期</li>
            <div style="clear:both;"></div>
          </ul>
        </div>
      </div>
    </div>
    <div class="jiaotong">
      <div class="chufa_top">
        <h3>交通信息</h3>
      </div>
      <div class="jiaotongcont">
        <ul>
          <li>
            <p class="flex">
              <span class="left">
                <em>2019-07-19</em>
                <!-- &nbsp; -->
                广州-大阪
              </span>
              <span class="right">
                春秋航空
                <em>9C6159</em>
              </span>
            </p>
            <p class="flex">
              <span class="flex-1">
                <span class="flex-1">
                  <em class="time cl2">05:55</em> 白云国际机场T1
                </span>
              </span>
              <span class="flex-1">
                <em class="hr">
                  <b>3H40M</b>
                </em>
              </span>
              <span class="flex-1">
                <em class="time cr2">10:35</em> 关西国际机场T2
              </span>
            </p>
          </li>
          <li>
            <p class="flex">
              <span class="left">
                <em>2019-07-23</em>
                <!-- &nbsp; -->
                大阪-广州
              </span>
              <span class="right">
                春秋航空
                <em>9C6160</em>
              </span>
            </p>
            <p class="flex">
              <span class="flex-1">
                <span class="flex-1">
                  <em class="time cl2">23:55</em> 关西国际机场
                </span>
              </span>
              <span class="flex-1">
                <em class="hr">
                  <b>4H15M</b>
                </em>
              </span>
              <span class="flex-1">
                <em class="time cr2">02:50</em> 白云国际机场T1
              </span>
            </p>
          </li>
        </ul>
      </div>
    </div>
    <div class="tourfooter">
      <ul class="flex">
        <li class="collect">
          <i class="iconfont icon-shoucang"></i>收藏
        </li>
        <li class="phone">
          <i class="iconfont icon-dianhua"></i>客服
        </li>
        <li class="book">立即预定</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: [],
      imgurl: "",
      navFixed: "",
      showhide: ""
    };
  },
  async created() {
    let id = this.$route.query.goodid;
    await this.$axios
      .get("http://10.3.141.56:2019/goodlist/" + id)
      .then(res => {
        let data = res.data;
        this.msg = data[0];
        this.imgurl = this.msg.imgurl;
      });
  },
  methods: {
    goto() {
      this.$router.push("home");
    },
    goback() {
      history.back();
    },
    watchScroll2() {
      var scrollTop2 =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      console.log(scrollTop2);
      if (scrollTop2 > 200) {
        this.navFixed = "yidong";
        this.showhide = "showhide";
      } else {
        this.navFixed = "guding";
        this.showhide = "hideshow";
      }
    }
  },
  mounted() {
    //事件监听滚动条
    window.addEventListener("scroll", this.watchScroll2);
  },
  destroyed() {
    window.removeEventListener("scroll", this.watchScroll2);
  }
};
</script>
<style scoped lang="scss">
* {
  box-sizing: border-box;
}
.tour {
  min-height: 1000px;
  width: 100%;
  background-color: rgb(242, 244, 246);
  position: relative;
  .yidong {
    background: #fff;
  }
  .guding {
    background: rgba(0, 0, 0, 0);
  }
  .touheader {
    position: fixed;
    // background: rgba(0, 0, 0, 0);
    width: 100%;
    height: 6%;
    border-bottom: 1px solid #c0c0c0;
    border: none;
    .tou_fl {
      float: left;
      color: #58bc58;
      line-height: 240%;
      margin-left: 4%;
    }
    h1 {
      width: 40%;
      position: absolute;
      top: 0;
      margin: 0;
      font-size: 22px;
      left: 34%;
      right: 37%;
      line-height: 190%;
      color: rgb(51, 51, 51);
    }
    .hideshow {
      text-indent: -999rem;
    }
    .showhide {
      text-indent: 1rem !important;
    }
    .tou_fr {
      float: right;
      // padding-right:5px;
      > a {
        color: green;
        font-size: 1.5rem;
        line-height: 166%;
      }
      .shouye {
        margin-right: 0.625rem;
      }
      .fenxiang {
        margin-right: 0.625rem;
      }
    }
  }
  .header_img {
    width: 100%;
    height: 200px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .goodcontent {
    background-color: #fff;
    width: 100%;
    padding: 4%;
    border-bottom: 1px solid #ccc;
    .h2 {
      font-size: 1.01rem;
      width: 100%;
      line-height: 130%;
      font-family: Microsoft YaHei;
    }
    .money {
      margin: 1% 0 1% 0;
      .fuhao {
        font-size: 16px;
        color: red;
        em {
          font-size: 1.375rem;
          font-weight: bold;
          font-style: normal;
          margin-right: 2%;
          margin-left: 1%;
        }
        span {
          color: #ccc;
          font-size: 0.9rem;
        }
        > i {
          margin-left: 1%;
          color: #58bc58;
          font-size: 0.8rem;
        }
      }
    }
    .tag-box {
      > span {
        margin-right: 1%;
        font-size: 0.8rem;
        color: #ccc;
        i {
          color: #58bc58;
        }
      }
    }
  }
  .coupon {
    padding: 5% 18% 5% 10%;
    width: 100%;
    background-color: #fff;
    position: relative;
    height: 10%;
    .h3 {
      position: absolute;
      left: 3%;
      top: 36%;
      font-size: 14px;
    }
    .jiaobiao {
      position: absolute;
      top: 36%;
      right: 4%;
      color: #ccc;
    }
    .couponbox {
      max-height: 1.25rem;
      overflow: hidden;
      a {
        background: url(../images/bg.png) no-repeat center;
        margin-left: 4%;
        color: #fff;
        display: inline-block;
        text-align: center;
        font-size: 12px;
        background-size: 100% 100%;
        padding: 1% 5% 5% 2%;
      }
    }
  }
  .chufa {
    background-color: #fff;
    margin-top: 3%;
    margin-bottom: 3%;
    padding: 3%;
    padding-bottom: 1%;
    .chufa_top {
      h3 {
        margin: 0;
        display: inline-block;
        padding-left: 4%;
        font-weight: 700;
        color: #333;
        position: relative;
        font-size: 14px;
        font-family: Microsoft YaHei;
      }
      h3::before {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        display: block;
        width: 2%;
        height: 100%;
        background-color: #00be88;
      }
      .dis {
        font-size: 12px;
        color: rgb(202, 202, 202);
        margin-left: 3%;
      }
      .jiaobiao {
        float: right;
        margin-right: 1%;
        color: #ccc;
      }
    }
    .t_txt {
      ul {
        padding-left: 0;
        margin-top: 1%;
        li {
          float: left;
          display: block;
          width: 23.5%;
          height: 2.5rem;
          line-height: 0.9rem;
          padding: 0.3rem 0;
          margin: 0.7rem 1% 0 0;
          text-align: center;
          border: 1px solid #ddd;
          border-radius: 0.1rem;
          overflow: hidden;
          box-sizing: border-box;
          font-size: 0.8125rem;
          position: relative;
          color: rgb(123, 123, 123);
        }
        .lastli {
          line-height: 1.6rem;
        }
        em {
          color: rgb(255, 162, 108);
          font-style: normal;
          font-weight: 400;
        }
      }
    }
  }
  .jiaotong {
    width: 100%;
    padding: 3%;
    background-color: #fff;
    .chufa_top {
      h3 {
        margin: 0;
        display: inline-block;
        padding-left: 4%;
        font-weight: 700;
        color: #333;
        position: relative;
        font-size: 0.875rem;
        font-family: Microsoft YaHei;
      }
      h3::before {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        display: block;
        width: 4%;
        height: 100%;
        background-color: #00be88;
      }
    }
    .jiaotongcont {
      ul {
        padding: 0;
        li {
          margin-bottom: 0.8rem;
          .flex {
            text-align: center;
            margin-bottom: 0.3rem;
            display: flex;
            color: rgb(51, 51, 51);
            margin-top: 0;
            .left {
              text-align: left;
              flex: 1;
              font-size: 14px;
              em {
                font-style: normal;
                padding-left: 15%;
                // font-size: 12px;
              }
            }
            .right {
              text-align: right;
              flex: 1;
              font-size: 14px;
              color: rgb(102, 102, 102);
              em {
                font-style: normal;
              }
            }
            .flex-1 {
              flex: 1;
              color: rgb(116, 116, 116);
              font-size: 14px;
              em {
                font-style: normal;
                color: rgb(183, 170, 170);
              }
              .hr {
                border-bottom: 1px solid #ccc;
                display: block;
              }
              .time {
                display: block;
                font-size: 20px;
                margin-bottom: 0.3rem;
                font-weight: bold;
              }
              .cl2 {
                text-align: left;
                color: rgb(34, 34, 34);
              }
              .cr2 {
                text-align: right;
                color: rgb(34, 34, 34);
              }
            }
          }
        }
      }
    }
  }
  .tourfooter {
    background-color: #fff;
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 1000;
    .flex {
      display: flex;
      padding: 0;
      margin: 0;
    }
    li {
      flex: 1;
      text-align: center;
      height: 2.7rem;
      z-index: 999;
      font-size: 14px;
      color: rgb(106, 102, 106);
      i {
        display: block;
        color: rgb(187, 187, 189);
        margin: 0.2rem 0;
      }
    }
    .book {
      flex: 3;
      background-color: rgb(255, 136, 68);
      color: #fff;
      font-size: 20px;
      line-height: 2.5rem;
    }
  }
}
</style>


