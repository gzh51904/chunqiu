<template>
  <!-- <el-col :span="12" v-for="item in recommed" :key="item.id" @click.native="goto(item.id)"> -->
  <!-- <div>
            <el-row :gutter="20">
                <el-col class="cityBox" :span="12" v-for="item in recommed" :key="item.id">
                    <span><img class="cityPic" style="height: 84px" :src="item.imgurl" /></span>
                    <span class="cityName">{{item.destinationCityName}}</span>
                </el-col>
            </el-row>
  </div>-->
  <div class="goalList">
    <div @click="gotogood(item.productId)" class="cityBox" v-for="item in recommed" :key="item.id">
      <span class="cityPicBox">
        <img class="cityPic" :src="item.imgurl" />
      </span>
      <p class="cityname">{{item.destinationCityName}}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "goalList",
  data() {
    return {
      recommed: []
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
    // console.log(888)
    // console.log("data:", data);

    data.map(item => {
      if (item.sortno == 0) {
        this.recommed.push(item);
      }
      item.picture = item.picture; // ../assets/img/xxx.jpg
      return item;
    });
  }
};
</script>
<style scoped lang="scss">
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
</style>