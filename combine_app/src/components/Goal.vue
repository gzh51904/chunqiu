<template>
  <el-container>
    <el-header>
      <mt-header title="目的地" fixed>
        <router-link to="/" slot="left">
          <mt-button icon="back">返回</mt-button>
        </router-link>
        <mt-button icon="more" slot="right"></mt-button>
      </mt-header>
    </el-header>
    <div class="searchbarparent">
      <!-- <input type="text" class="searchButton" placeholder="广州"> -->
      <a class="searchButton">
        <span class="chooseCity">
          广州
          <i class="iconfont icon-iconfonticonfonti2"></i>
        </span>
      </a>
      <input type="text" class="searchBar" placeholder="搜索你想去的地方" />
    </div>
    <el-container>
      <el-aside width="75px">
        <!-- <el-menu :default-active="active" class="el-menu-demo" mode="vertical" @select="handleSelect"> -->
        <el-menu :default-active="active" class="el-menu-demo" mode="vertical">
          <el-menu-item
            :index="item.name"
            v-for="item in category"
            :key="item.name"
            @click="goto(item)"
          >
            <!-- <el-menu-item :index="item.path" v-for="item in category" :key="item.name"> -->
            {{ item.title }}
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>
        <!-- 子路由 -->
        <keep-alive>
          <router-view />
        </keep-alive>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
export default {
  data() {
    return {
      category: [
        {
          title: "当季热门",
          path: "/hot",
          name: "Hot"
        },
        {
          title: "国内",
          path: "/guonei",
          name: "Guonei"
        },
        {
          title: "日本",
          path: "/japan",
          name: "Japan"
        },
        {
          title: "欧洲",
          path: "/eu",
          name: "EU"
        },
        {
          title: "东南亚",
          path: "/southeastasia",
          name: "Southeastasia"
        },
        {
          title: "韩国",
          path: "/korea",
          name: "Korea"
        },
        {
          title: "美洲",
          path: "/americas",
          name: "Americas"
        },
        {
          title: "港澳台",
          path: "/hmt",
          name: "Hmt"
        },
        {
          title: "海岛",
          path: "/island",
          name: "Island"
        },
        {
          title: "周边",
          path: "/round",
          name: "Round"
        }
      ],
      active: "" // item.name决定高亮
    };
  },
  created() {
    let hash = window.location.hash.slice(7); // =>  hot
    // hash = hash.replace(hash[0], hash[0].toUpperCase());
    // console.log('hash2:', hash) // => /goal
	// this.active = hash;
	// console.log("hash",hash)
    if (hash != "") {
      hash = hash.replace(hash[0], hash[0].toUpperCase());
      this.active = hash;
    } else {
      this.active = "Hot";
	}
	// window.location.hash = "/goal/"+this.active;
    // if(hash){
    //     this.$route.path.push("hot");
    // console.log('$route:', this.$route.path);
    // let baseUrl = this.$route.path
    let baseUrl = "/goal";
    // console.log('baseUrl:', baseUrl) // => /goal
    this.category = this.category.map(item => {
      return {
        ...item,
        path: baseUrl + "/" + item.name.toLowerCase() // =>/goal/hot
        // path: this.$route.path.length === 9 ? baseUrl + '/phone' : baseUrl + '/' + item.name.toLowerCase()
      };
    });
    // console.log('$route.path:',this.$route.path)
  },
  activated() {
    // window.location.hash = "#/goal/hot";
    console.log("guo", this.$store.state.axiang);

    if (this.$store.state.axiang == "") {
      // console.log("gdx",window.location.hash.length);
    window.location.hash = "#/goal/hot";
      this.active = "Hot";
    
	  // localStorage.axiang = "#/goal/hot";
      // console.log(666666)
    } else {
	  window.location.hash = this.$store.state.axiang;
	  //  localStorage.axiang = this.$store.state.axiang;;
    }
  },
  methods: {
    // handleSelect(index, indexPath) {
    //     // index = index.slice(0,6);
    //     console.log("index:",index);
    //     this.active = index;
    //     // console.log("999", this.$route);
    // },
    goto(item) {
      console.log("path:", item.path);
      this.$store.commit("change", item.path);
      this.$router.push({
        name: item.name
      });
    }
  }
};
</script>
<style scoped lang="scss">
.el-main {
  background: #f5f5f5;
}
.el-header {
  height: 52px;
  padding: 0px !important;
  height: 42px !important;

  .mint-header {
    height: 42px;
    background: pink;

    .mint-header-title {
      color: black !important;
      font-size: 16px;
    }
  }
}

.searchbarparent {
  height: 50px;
  padding: 10px;

  .searchButton {
    float: left;
    width: 15%;
    height: 1.875rem;
    text-align: center;

    .chooseCity {
      font-size: 10px;

      line-height: 1.875rem;
    }

    i {
      font-size: 3px;

      color: #56aa91;
      line-height: 1.875rem;
      margin: 0px 5px;
    }
  }

  .searchBar {
    float: right;
    padding-left: 9%;
    margin: 0 0 0 2%;
    width: 73%;
    height: 1.875rem;
    border: 0.0625rem solid #fff;
    border-radius: 1.5625rem;
    background: #f3f1f1;
  }
}

.el-menu-item {
  padding: 0px 0px 0px 0px !important;
  text-align: center;
  width: 4.6875rem;
  height: 3.375rem;
}

.el-main {
  padding: 10px !important;
}
</style>