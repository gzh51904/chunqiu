<template>
  <div id="log">
    <header v-show="showtop">
      <a href="javascript:;" @click="goBack">
        <i class="iconfont icon-fanhui" style="color:#00be88;font-weight:600;"></i>
      </a>
      <h1>账号登录</h1>
    </header>
    <div class="logbody">
      <div class="logtx">
        <img src="../assets/MineImg/user_tx.png" alt />
      </div>
      <div class="logform">
        <form action="log" class="log">
          <div class="loguser">
            <input
              type="text"
              name="user"
              placeholder="手机号码"
              class="input_txt"
              v-model="phoneNum"
              @input="phoneInput"
            />
            <el-button :class="{codebtn:cansend}" round size="mini" @click="getcode">{{content}}</el-button>
          </div>
          <div class="logpass">
            <input
              type="password"
              placeholder="短信验证码"
              name="password"
              class="inputpass"
              v-model="password"
              @input="passwordInput"
            />
          </div>
          <p class="logtip">*未注册春秋账号的手机号，登录时将自动注册</p>
          <div class="logbtn">
            <el-button
              :class="this.canlog ? 'logYess' : 'logNo'"
              type="success"
              round
              :disabled="!canlog"
              @click="login"
            >登录</el-button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      showtop: true,
      canlog: false,
      password: "",
      phoneNum: "",
      codebtn: true,
      codetime: 60,
      content: "获取动态密码",
      cansend: false,
      code: ""
    };
  },
  watch: {
    canlog: val => {
      if (val) {
        console.log("watch:", val);
      }
    }
  },
  methods: {
    ...mapMutations(["changeshowbottom", "changeshowtop"]),

    goBack() {
      history.back();
    },
    passwordInput() {
      if (this.password == "" || this.phoneNum == "") {
        this.canlog = false;
      } else {
        this.canlog = true;
      }
    },
    phoneInput() {
      if (this.password == "" || this.phoneNum == "") {
        this.canlog = false;
      } else {
        this.canlog = true;
      }
      if (!/^[1][3,4,5,6,7,8,9][0-9]{9}$/.test(this.phoneNum)) {
        this.cansend = false;
      } else {
        this.cansend = true;
      }
    },
    login() {
      console.log("登录成功", this.canlog);
      if (!/^[1][3,4,5,6,7,8,9][0-9]{9}$/.test(this.phoneNum)) {
        alert("请输入正确的手机号");
        this.canlog = false;
        return false;
      }
      if(password == ""){
        alert("请输入验证码");
        this.canlog = false;
        return false;
      }
      if ((this.password = this.code)) {
        this.$axios
          .post("http://localhost:1112/log/", {
            params: {
              password: this.password,
              phoneNum: this.phoneNum
            }
          })
          .then(res => {
            console.log("返回的数据：", res.data);
            if(res.data){
              this.$router.push({path:'/mine'});
            }
          });
      }
    },
    getcode() {
      if (!this.codebtn) return;
      if (this.phoneNum == "") {
        alert("请输入手机号");
        return false;
      }
      if (!/^[1][3,4,5,6,7,8,9][0-9]{9}$/.test(this.phoneNum)) {
        alert("请输入正确的手机号");
        return false;
      }
      this.$axios
        .post("http://localhost:1112/", {
          params: { phoneNum: this.phoneNum }
        })
        .then(res => {
          if (res.status == 200) {
            this.code = res.data.data;
            this.codebtn = false;
            this.content = this.codetime + "后重新获取";
            let timer = window.setInterval(() => {
              this.codetime--;
              this.content = this.codetime + "s后重新发送";
              if (this.codetime < 0) {
                window.clearInterval(timer);
                this.content = "重新发送验证码";
                this.codetime = 60;
                this.codebtn = true;
              }
            }, 1000);
          } else {
            this.canlog = false;
            alert("发送失败");
          }
          console.log("返回的数据：", res.data);
        });
    }
  },
  created() {
    this.changeshowbottom(false);
    this.changeshowtop(false);
    console.log("Log is created");
  },
  destroyed() {
    this.changeshowbottom(true);
    this.changeshowtop(true);
    console.log("Log is destroyed");
  }
  // beforeRouteEnter(to, from, next) {
  //   next(vm => {
  //     vm.changeshowtop(false);
  //     vm.changeshowbottom(false);
  //     console.log("beforeRouteEnter");
  //   });
  // }
};
</script>
<style lang='scss' scoped>
@import "./css/Log.scss";
</style>

