<template>
  <div id="log">
    <header v-show="showtop">
      <a href="javascript:;" @click="goBack">
        <i class="iconfont icon-fanhui" style="color:#00be88;font-weight:600;"></i>
      </a>
      <h1>
        <a href="javascript:;" @click="gotoReg">账号登录</a>
      </h1>
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
import { Toast } from "mint-ui";
import { Indicator } from "mint-ui";
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
    ...mapMutations(["changedaohang"]),

    goBack() {
      // this.$router.push({ name: "Mine" });
      history.back();
      console.log("退回mine");
    },
    gotoReg() {
      this.$router.push({ name: "Reg" });
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
        .post("http://47.94.157.240:2019/getcode", {
          params: { phoneNum: this.phoneNum }
        })
        .then(res => {
          if (res.status == 200) {
            this.code = res.data.data;
            console.log("this.code",this.code);
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
    },
    login() {
      console.log("登录成功", this.canlog);
      if (!/^[1][3,4,5,6,7,8,9][0-9]{9}$/.test(this.phoneNum)) {
        alert("请输入正确的手机号");
        this.canlog = false;
        return false;
      }
      if (this.password == "") {
        alert("请输入验证码");
        this.canlog = false;
        return false;
      }
      if (this.password == this.code) {
        this.$axios
          .post("http://47.94.157.240:2019/log", {
            params: {
              password: this.password,
              phoneNum: this.phoneNum,
              ignore:true
            }
          })
          .then(res => {
            console.log("返回的数据：", res.data);
            if (res.data.status == 200 || res.data.status == 101) {
              // Toast('登录成功,正在跳转');
              Indicator.open("登陆成功，请稍后...");
              console.log(res.data.data);
              window.localStorage.setItem('tk',res.data.data.tk);
              window.localStorage.setItem('username',this.phoneNum);
              setTimeout(() => {
                this.$router.push("/mine");
                Indicator.close();
              }, 1000);
            } else {
              Toast("登录失败，请稍后再试");
              return false;
            }
          });
      }else{
        Toast("验证码错误");
        return false;
      }
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
    }
  },
  beforeRouteEnter(to, from, next) {
    console.log("进入log");
    next(vm => {
      vm.changedaohang(false);
    });
  },
  beforeRouteLeave(to, from, next){
    this.changedaohang(true);
    next();
  }
};
</script>
<style lang='scss' scoped>
@import "./css/Log.scss";
</style>

