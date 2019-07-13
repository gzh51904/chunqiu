<template>
  <div id="app">  
    <div id="islogin" v-if="islogined">
          <Layout :style="{minHeight: '100vh'}">
            <Sider :collapsible=true :collapsed-width="78" v-model="isCollapsed" width="240">
              <h2><Icon type="ios-apps" />后台管理系统</h2>
                <Col span="4">
                  <Menu :theme="theme2" @on-select="feng" :accordion=true>
                      <Submenu  v-for="( item,idx) of navlist" :idx=idx :name=idx :key=idx>
                          <template slot="title">
                              <Icon type="ios-paper" />
                             {{item.title}}
                          </template>
                          <MenuItem v-for="item of item.list"  :name="item.name"  :to=item.path :key=item.name :active-name="$route.name"> {{item.title}}</MenuItem>
                 
                      </Submenu>   
                  </Menu>
              </Col>
            </Sider>
            <Layout>
                <Header :style="{background: '#fff', boxShadow: '0 2px 3px 2px rgba(0,0,0,.1)'}">
                  <div v-for="(item,idx) of navlist" :key=idx+10  v-show="item.title==acctivetitle">
                      <Breadcrumb :style="{margin: '16px 0'}">
                        <BreadcrumbItem>后台系统</BreadcrumbItem>
                        <BreadcrumbItem>{{b}}</BreadcrumbItem>
                        <BreadcrumbItem>{{a}}</BreadcrumbItem>
                    </Breadcrumb>
                  </div>
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
          <i-button class="zhuce" @click="sign">注册</i-button>
          <i-button @click="denglu">登录</i-button>
          </i-form>
        </div>
      </div>
    
 
  </div>
</template>

<script>
import Vue from 'vue'


export default {
  name: 'app',
  data (){
    return {
      navlist:[{
         title:'用户管理',
         list:[{
           title : '用户信息',
           name :  'userlist',
           path:  '/userlist'
         },{
           title : '添加用户信息',
           name :  'useradd',
           path:  '/useradd'
         },{
           title : '用户详细信息',
           name :  'userdetails',
           path:  '/userdetails'
         },] 
      },{
         title:'商品管理',
       list:[{
           title : '商品信息',
           name :  'goodslist',
           path:  '/goodslist'
         },{
           title : '添加/上架商品',
           name :  'goodsadd',
           path:  '/goodsadd'
         },{
           title : '商品详情',
           name :  'goodsmend',
           path:  '/goodsmend'
         },]
      }],
     isCollapsed: false,
     theme2:'dark',
     showlist:'用户信息',
     acctivetitle :'用户管理',
     AdmName: '',
     AdmPassword : '',
     islogined : false,
     a:'用户信息',
     b:'用户管理',
     menuActive :''
    }
  },
  components: {
    // goodslist,userlist
  },
  computed: {
    menuitemClasses: function () {
        return [
            'menu-item',
            this.isCollapsed ? 'collapsed-menu' : ''
        ]
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
          localStorage.token = data.data;
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
      let arr = this.navlist
      let obj;
      for(var i=0;i<arr.length;i++){
        for( var j=0;j<arr[i].list.length;j++){
          if(arr[i].list[j].name==gg){
            this.a = arr[i].list[j].title, 
            this.b = arr[i].title
          break;
          }
        }
      }
    },
    // loading(){
      
    // }
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
    background: rgba(85, 124, 150, 0.671);
  }
#box{
    width: 400px;
    height: 300px;
    background: rgb(52, 148, 124);
    position:fixed;
    top:50%;
    left:50%;
    margin-left:-200px;
    margin-top:-150px;
    border-radius: 7%;
     padding:17px!important;
     text-align:center;
}
#box h2{
  text-align:center;
  margin-top:20px;
  font-size:33px;
  margin-bottom:27px;
 
}
#box .zhuce{
  margin-right:27px;
}

</style>
