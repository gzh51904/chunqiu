<template>
  <div id="app">    
        <Layout :style="{minHeight: '100vh'}">
            <Sider :collapsible=true :collapsed-width="78" v-model="isCollapsed" width="240">
              <h2><Icon type="ios-apps" />后台管理系统</h2>
                <Col span="4">
                  <Menu :theme="theme2">
                      <Submenu  v-for="( item,idx) of navlist" :idx=idx :name=idx :key=idx>
                          <template slot="title">
                              <Icon type="ios-paper" />
                             {{item.title}}
                          </template>
                          <MenuItem v-for="item of item.list" :name=item.title :to=item.path :key=item.name> {{item.title}}</MenuItem>
                 
                      </Submenu>       
                  </Menu>
              </Col>
            </Sider>
            <Layout>
                <Header :style="{background: '#fff', boxShadow: '0 2px 3px 2px rgba(0,0,0,.1)'}">
                   <Breadcrumb :style="{margin: '16px 0'}">
                        <BreadcrumbItem>后台系统</BreadcrumbItem>
                        <BreadcrumbItem>用户管理</BreadcrumbItem>
                        <BreadcrumbItem>{{showlist}}</BreadcrumbItem>
                    </Breadcrumb>
                    <router-view />
                </Header>
                <Content :style="{padding: '30px 16px 0px 16px'}">

                    <Card>
                      <router-view/>
                    </Card>
                </Content>
            </Layout>
        </Layout>
    <!-- </div> -->
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
           title : '更改用户信息',
           name :  'changuser',
           path:  '/changuser'
         },] 
      },{
         title:'商品管理',
       list:[{
           title : '商品信息',
           name :  'goodslist',
           path:  '/goodslist'
         },{
           title : '添加/上架商品',
           name :  'addgoods',
           path:  '/addgoods'
         },]
      }],
     isCollapsed: false,
     theme2:'dark',
     showlist:'用户信息'
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
        changlist(){
          // console.log(999)
          let gg = this.showlist = this.navlist.forEach(item=>{
              return item.list.forEach(item=>{
                if( window.location.hash.slice(1)==item.path){
                   return item.title;
                }
                 
              })
            }
           
          ) ;
          console.log(gg)
         
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
</style>
