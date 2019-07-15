<template>
  <!-- <el-col :span="12" v-for="item in recommed" :key="item.id" @click.native="goto(item.id)"> -->
  <div class="goalList">
    <div @click="gotogood(item.productId)" class="cityBox" v-for="item in recommed" :key="item.id">
      <span class="cityPicBox">
        <img class="cityPic" :src="item.imgurl" />
      </span>
      <p class="cityname">{{ item.destinationCityName }}</p>
    </div>
    <h2 class="dianzanparent">
      <i class="shoudianzan iconfont icon-dianzan"></i>推荐目的地
    </h2>
    <ul class="cityTakebox">
      <li class="cityTake" v-for="item in tuijian" :key="item.id">
        <a href="#">{{ item.destinationCityName }}</a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "goalList",
  data() {
    return {
      recommed: [],
      tuijian: []
    };
  },
  methods: {
    gotogood(id) {
      this.$router.push({ path: "/tour", query: { goodid: id } });
      this.$store.commit("changedaohang", false);
    }
  },
  async created() {
    let { data } = await this.$axios.get("/goodlist");
    // console.log("data:", data);
    data.slice(20, 38).map(item => {
      if (item.sortno == 1) {
        this.recommed.push(item);
      }
      item.picture = item.picture; // ../assets/img/xxx.jpg
      return item;
    }),
      data.slice(76, 100).map(item => {
        this.tuijian.push(item);
        return item;
      });
  }
};
</script>
<style scoped lang="scss">
ul {
  padding: 0;
  margin: 0;
  list-style: none;
}

li {
  padding: 0;
  margin: 1%;
  list-style: none;
  float: left;
  width: 31%;
  text-align: center;
  background: #fff;

  a {
    text-decoration: none;
    display: block;
    line-height: 30px;
    border-radius: 0.13rem;
    background-color: #fff;
    word-wrap: break-word;
    word-break: break-all;
    overflow: hidden;
    font-size: 10px;
    color: #333;
    height: 30px;
  }
}

.goalList {
  .cityBox {
    float: left;
    position: relative;
    width: 50%;

    .cityPicBox {
      margin: 5px;
      float: left;

      .cityPic {
        width: 100%;
      }
    }

    .cityname {
      float: left;
      position: absolute;
      /* top: 20px; */
      /* left: 10%; */
      text-align: center !important;
      position: absolute;
      left: 0;
      bottom: 0;
      top: 0;
      right: 0;
      margin: auto;
      padding: 30px 10px;
      font-weight: 600;
      /* background: #dbdbdb; */
      /* opacity: 0.1; */
      color: #ffffff !important;
    }
  }
  .dianzanparent {
    font-size: 15px;
    .shoudianzan {
      font-size: 15px;
      color: orange;
    }
  }
}
</style>