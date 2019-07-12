<template>
  <i-form :label-width="80">
        <Form-item label="出发城市">
            <i-input v-model="form.cityName" placeholder="请输入">
                <i-button slot="append" @click="amend({cityName:form.cityName})">修改</i-button>
            </i-input>
        </Form-item>
        <Form-item label="目的城市">
            <i-input v-model="form.destinationCityName" placeholder="请输入">
                <i-button slot="append" @click="amend({destinationCityName:form.destinationCityName})">修改</i-button>
            </i-input>
        </Form-item>
        <Form-item label="类型">
            <i-select v-model="form.productTypeName" placeholder="请选择">
                <i-option value="团队游">团队游</i-option>
                <i-option value="自由行">自由行</i-option>
            </i-select>
        </Form-item>
        <Form-item label="价格">
            <i-input v-model="form.price" placeholder="请输入">
                <i-button slot="append" @click="amend({price:form.price})">修改</i-button>
            </i-input>  
        </Form-item>
         <Form-item label="照片">
            <Upload
            multiple
             name="chunqiu"
             :on-success="pice"
            action="http://localhost:2019/upload/chunqiu">
            <img style="width:200px;height:200px" :src="form.imgurl" alt="">
                <i-button  icon="ios-cloud-upload-outline">修改图片</i-button>
            </Upload>
         </Form-item>
        <Form-item label="描述">
            <i-input v-model="form.productName" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入...">
                <i-button slot="append" @click="amend({productName:form.productName})">修改</i-button>
            </i-input>
        </Form-item>
  </i-form>
</template>
<script>
export default {
    data(){
        return{
            form:{
                cityName:'',
                destinationCityName:'',
                productName:'',
                productTypeName :'',
                price : '',
                averageScore : "0.0",
                cityType : "出发",
                effecttime : "2019-06-11 15:28:49",
                expiretime : "2022-06-11 15:28:49",
                imgurl : "",
                linkurl : "/vacation/163307#C_101_",
                productDesc : "",
                productDescs : [],
                productId : "20"+(Number(localStorage.goods)+1),
                productSource : "1",
                productThemeList : [],
                productType : "13",
                scheduleDateList : [ "7月", "8月"],
                sortno : "999"
            },
            tipshow:false
        }
    },
    methods:{
       pice(res){
        //    console.log('g')
        //    console.log(res)
           this.form.imgurl = 'http://localhost:2019/' + res.path;
       },
       amend(query){
           let productId = this.form.productId; 
           this.$axios.put('/goodlist/?productId='+productId,query)  
            .then( ({data}) =>{
                console.log(data)
                if(data.msg == "success"){
                     this.$Message.success('修改成功');
                }else{
                     this.$Message.success('修改失败');
                }
            }) 
            .catch(function (error) {
            console.log(error);
            }) 
       }
    },
    created(){
        let arr = this.$route.query;
        let brr = this.form;
        console.log(this.form)
        this.form = Object.assign(brr,arr)
         this.form.imgurl = require(arr.imgurl)
    }

}
</script>
<style>

</style>
