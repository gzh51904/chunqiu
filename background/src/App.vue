<template>
  <div id="app">  
    <div id="islogin" v-if="islogined">
          <Layout :style="{minHeight: '100vh'}">
            
            <Sider :collapsible=true :collapsed-width="78" v-model="isCollapsed" width='240' :style="{position: 'fixed',  height: '100vh',left: 0, overflow: 'auto'}">
              <h2><Icon type="ios-apps" />后台管理系统</h2>
              <!-- <div>
                <i-button @click="text">测试</i-button>
              </div> -->
               
              <Col span="4">
                <Menu :theme="theme2" @on-select="feng" :accordion=true :active-name="showone" :open-names="[showtwo]">
                   <!-- <Menu :theme="theme2" @on-select="feng" :accordion=true active-key="text"> -->
                    <Submenu  v-for="( item,idx) of navlist" :name=item.title>
                        <template slot="title">
                            <Icon type="ios-paper" />
                            {{item.title}}
                        </template>
                        <MenuItem v-for="item of item.list" :name="item.title" :to=item.path  > {{item.title}}</MenuItem>                
                        
                        <!-- <MenuItem v-for="item of item.list"  :name="item.name"  :to=item.path :key=item.name > {{item.title}}</MenuItem>                 -->
                    </Submenu>   
                </Menu>
              </Col>
            </Sider>
            <Layout :style="{marginLeft: '240px'}">
              <Header :style="{background: '#fff', boxShadow: '0 2px 3px 2px rgba(0,0,0,.1)'}">
                <div v-for="(item,idx) of navlist" :key=idx+10 >
                  <Breadcrumb :style="{margin: '16px 0'}">
                    <BreadcrumbItem>后台系统</BreadcrumbItem>
                    <BreadcrumbItem>{{showtwo}}</BreadcrumbItem>
                    <BreadcrumbItem>{{showone}}</BreadcrumbItem>
                  </Breadcrumb>
               
                </div>
                  <Button  type="warning" class="tuichu" @click="out">退出</Button>
              </Header>
              <Content :style="{padding: '30px 16px 0px 16px'}">
                <Card>
                  <router-view/>
                </Card>
              </Content>
            </Layout>
          </Layout>
          
      </div>  
      
      <div id="notlogin" v-else>
        <div id="box">
          <h2>春秋旅游后台管理系统</h2>
          <i-form :label-width="50">
            <Form-item label="账号">
              <i-input  v-model="AdmName" placeholder="请输入"></i-input>
            </Form-item>
          <Form-item label="密码">
            <i-input v-model="AdmPassword" placeholder="请输入"></i-input>
          </Form-item>
          <!-- <i-button class="zhuce" @click="sign">注册</i-button> -->
          <i-button @click="denglu">登录</i-button>
          </i-form>
        </div>
      </div>
    
 
  </div>
</template>

<script>
import Vue from 'vue'
import {setCookie,getCookie} from './cookie'

export default {
  name: 'app',
  data (){
    return {
     isCollapsed: false,
     theme2:'dark',
     AdmName: '',
     AdmPassword : '',
     islogined : false,
     a:'用户信息',
     b:'用户管理',
    }
  },
  computed: {
    menuitemClasses: function () {
        return [
            'menu-item',
            this.isCollapsed ? 'collapsed-menu' : ''
        ]
      },
      navlist(){
        return this.$store.state.navlist.map(item=>item)
      },
      showone(){
        return this.$store.state.showone;
      },
      showtwo(){
        return this.$store.state.showtwo;
      },
    },
  created(){
    if(getCookie("islogined")=="true"){
     this.islogined = true;
    }
  }, 
  methods:{
    activetit(val){
      this.acctivetitle = val;
    },
    sign(){
      alert('你没有注册权限！')
    },
    denglu(){
      let AdmName = this.AdmName;
      let AdmPassword = this.AdmPassword
      this.$axios.get('/adm',{  
             params:{AdmName,AdmPassword ,
             ignore : true}  ,
             judge:true            
      })  
      .then( ({data}) =>{
        if(data.msg=="success"){
          setCookie("islogined",true)
          // localStorage.token = data.data;
           this.islogined = true
        }
      else{
        alert("账号或密码错误！")
      }
             
      }) 
      .catch(function (error) {
      console.log(error);
      }) 

    },
    feng(gg){
      this.$store.commit("ergodic",gg)
     
    },
    out(){
       setCookie("islogined",false)
      this.islogined = false
    }
  }
}
</script>

<style>



#app h2{
  color:#ffffff;
  text-align: center;
  font-size:22px;
  margin:5px 0px 10px 0px;
}
.layout-con{
        height: 100%;
        width: 100%;
    }
    .menu-item span{
        display: inline-block;
        overflow: hidden;
        width: 69px;
        text-overflow: ellipsis;
        white-space: nowrap;
        vertical-align: bottom;
        transition: width .2s ease .2s;
    }
    .menu-item i{
        transform: translateX(0px);
        transition: font-size .2s ease, transform .2s ease;
        vertical-align: middle;
        font-size: 16px;
    }
    .collapsed-menu span{
        width: 0px;
        transition: width .2s ease;
    }
    .collapsed-menu i{
        transform: translateX(5px);
        transition: font-size .2s ease .2s, transform .2s ease .2s;
        vertical-align: middle;
        font-size: 22px;
    }
  #notlogin{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("http://10.3.141.56:2019/uploads\\6857d6a4bfe356e.jpg") no-repeat ;
    background-size:100% 100%;
  }
#box{
    width: 450px;
    height: 300px;
    position:fixed;
    top:40%;
    left:50%;
    margin-left:-200px;
    margin-top:-150px;
    border-radius: 7%;
     padding:17px!important;
     text-align:center;
}
#box h2{
  text-align:center;
  padding-bottom:60px;
  font-size:40px;
  margin-bottom:27px;

 border-bottom:3px solid #ffffff
}
#box .zhuce{
  margin-right:27px;
}
.ivu-layout-sider-trigger{
  display:none!important;
}
.ivu-card-body{
  padding:50px!important;
}
.layout{
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
.tuichu{
  position: absolute;
  right:90px;
  top:20px;
  padding:10px 20px;
}
</style>
