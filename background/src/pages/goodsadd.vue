<template>
  <i-form :label-width="80">
        <Form-item label="出发城市">
            <i-input v-model="form.cityName" placeholder="请输入"></i-input>
        </Form-item>
        <Form-item label="目的城市">
            <i-input v-model="form.destinationCityName" placeholder="请输入"></i-input>
        </Form-item>
        <Form-item label="类型">
            <i-select v-model="form.productTypeName" placeholder="请选择">
                <i-option value="团队游">团队游</i-option>
                <i-option value="自由行">自由行</i-option>
                <i-option value="出国行">出境游</i-option>
                <i-option value="釜山行">釜山行</i-option>
            </i-select>
        </Form-item>
        <Form-item label="价格">
            <i-input v-model="form.price" placeholder="请输入"></i-input>
        </Form-item>
         <Form-item label="照片">
            <Upload style="width:350px;height:220px;"
            type="drag"
            multiple
             name="chunqiu"
             :on-success="pice"
              show-upload-list=false
            action="http://10.3.141.56:2019/upload/chunqiu">
              <div style="padding: 50px 0;width:350px;height:200px;" >
            <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
            <p>点击或拖拽上传</p>
        </div>
            </Upload>
         </Form-item>
        <Form-item label="描述">
            <i-input v-model="form.productName" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入..."></i-input>
        </Form-item>
        <i-button type="primary" @click="pushgood">提交</i-button>
         <Alert type="success" show-icon v-show="tipshow">
       添加商品成功
        <span slot="desc">你上传的商品已成功添加到数据库，你可以选择继续添加商品或者是唱一首鸡里太美</span>
    </Alert>
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
                sortno : "7"
            },
            empty:{
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
                sortno : "7"
            },
            tipshow:false,
        }
    },
    methods:{
        pushgood(){
            let {cityName,destinationCityName,productName,productTypeName,price,imgurl} = this.form
             if(cityName==""||destinationCityName==""||productName==""||productTypeName==""||price==""||imgurl==""){
                 alert("请先完善商品信息！")
             }
             else{
                let arr = this.form;
                this.$axios.post('/goodlist/',{  
                        ...arr                    
                })  
                .then( (response) =>{
                    this.form = this.empty
                    this.tipshow= true;
                    setTimeout(()=>{
                        this.tipshow = false;
                    },7000)
                }) 
                .catch(function (error) {
                console.log(error);
                }) 
             }
            
        },
       pice(res){
        //    console.log('g')
        //    console.log(res)
           this.form.imgurl = 'http://10.3.141.56:2019/' + res.path;
       }
    }

}
</script>
<style>
.ivu-upload-list-file-finish{
    display: none;
}
</style>