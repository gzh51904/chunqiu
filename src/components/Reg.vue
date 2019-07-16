<template>
  <div id="reg">
    <header v-show="showtop">
      <a href="javascript:;" @click="goBack">
        <i class="iconfont icon-fanhui" style="color:#00be88;font-weight:600;"></i>
      </a>
      <h1>
        <a href="javascript:;" @click="gotoLog">账号登录</a>
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
              placeholder="手机号码/邮箱"
              class="input_txt"
              v-model="phoneNum"
              @input="phoneInput"
            />
            <p style="font-size:0.65rem">{{emailtip}}</p>
          </div>
          <div class="logpass">
            <input
              type="password"
              placeholder="密码（8-16位）"
              name="password"
              class="inputpass"
              v-model="password"
              @input="passwordInput"
            />
            <p>{{passwordtip}}</p>
          </div>
          <p class="logtip">
            <el-checkbox v-model="autolog">下次自动登录</el-checkbox>
          </p>
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
import { Toast } from 'mint-ui';
console.log(Toast);

export default {
  data() {
    return {
      showtop: true,
      canlog: false,
      password: "",
      phoneNum: "",
      emailtip: "",
      autolog: true,
      passwordtip: "",
      phoneNumflg: false,
      passwordflg: false
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
      history.back();
    },
    passwordInput() {
      if (this.password == "" || this.phoneNum == "") {
        this.canlog = false;
      }

      if (!/\w{8,16}/.test(this.password)) {
        this.passwordtip = "密码格式须为8-16位字母、数字、下划线";
        this.canlog = false;
      } else {
        this.passwordtip = "";
        this.passwordflg = true;
      }

      if (this.password == "") {
        this.passwordtip = "";
      }
      if (this.passwordflg && this.phoneNumflg) {
        this.canlog = true;
      }
    },
    phoneInput() {
      var emailreg = new RegExp(
        "^[a-z0-9A-Z]+[- | a-z0-9A-Z . _]+@([a-z0-9A-Z]+(-[a-z0-9A-Z]+)?\\.)+[a-z]{2,}$"
      );

      if (this.password == "" || this.phoneNum == "") {
        this.canlog = false;
      }
      if (
        !/^[1][3,4,5,6,7,8,9][0-9]{9}$/.test(this.phoneNum) &&
        !emailreg.test(this.phoneNum)
      ) {
        this.cansend = false;
        this.emailtip = "请输入正确的手机号/邮箱";
      } else {
        this.emailtip = "";
        this.phoneNumflg = true;
      }

      if (this.phoneNum == "") {
        this.emailtip = "";
      }
      if (this.passwordflg && this.phoneNumflg) {
        this.canlog = true;
      }
    },
    gotoLog() {
      this.$router.push("/log");
    },
    login() {
      if (this.autolog) {
        window.localStorage.setItem("username", this.phoneNum);
      }
      if (this.canlog) {
        // console.log("可以登录");
        this.$axios
          .get("http://localhost:2019/reg", {
            params: { phoneNum: this.phoneNum }
          })
          .then(res => {
            // console.log("第一次请求的res",res.data.status);
            if(res.data.status == 200){
              // console.log('号码可用');
              this.$axios.post("http://localhost:2019/reg",{
                params:{phoneNum:this.phoneNum,password:this.password}
              }).then(res=>{
                Toast('登录成功,正在跳转');
                setTimeout(() => {
                  this.$router.push('/mine');                  
                }, 2000);
              })
            }else{
              // console.log('号码已被注册');
              Toast('号码已被注册');
              return false;
            }
          });
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
.el-checkbox__input.is-checked + .el-checkbox__label {
  color: #999;
}
@import "./css/reg.scss";
</style>

