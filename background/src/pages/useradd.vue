<template>
  <i-form :label-width="80">
        <Form-item label="用户名">
            <i-input v-model="userform.username" ref="blur" placeholder="请输入"></i-input>
        </Form-item>
        <Form-item label="密码">
            <i-input v-model="userform.password" ref="blur" placeholder="请输入"></i-input>
        </Form-item>
        <Form-item label="性别">
            <i-select v-model="userform.sex" ref="blur"  placeholder="请选择">
                <i-option value="女">女</i-option>
                <i-option value="男">男</i-option>
            </i-select>
        </Form-item>
        <i-button type="primary" @click="pushgood">提交</i-button>
        <Alert type="success" show-icon v-show="tipshow">
       添加用户成功
        <span slot="desc">用户信息已成功添加到数据库，你可以选择继续添加或者是离开当前页面</span>
    </Alert>
  </i-form>
</template>
<script>
import { setTimeout } from 'timers';
export default {
    data(){
        return{
            userform:{
                username:'',
                password: '',
                sex:'',
            },
            tipshow : false
        }
    },
    methods:{
         pushgood(){
            let arr = this.userform;
            this.$axios.post('/reg',{  
                      ...arr  ,address:new Date()                  
            })  
            .then( (response) =>{
                this.tipshow= true;
                setTimeout(()=>{
                    this.tipshow = false;
                },7000)
            }) 
            .catch(function (error) {
            console.log(error);
            }) 
        },
    }
}
</script>
<style>

</style>