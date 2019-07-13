<template>
    <div>
        <div class="button">
             <Button type="error" ghost ref="add" @click.native="toaddgoods"><Icon type="ios-add-circle-outline" size="14"/>添加</Button>
            <Button type="error" ghost ref="del" @click.native="deletegoods"><Icon type="md-trash" size="14"/>删除</Button>
        </div>
       <div class="shuru">
            <Input>
                <Select slot="prepend" style="width: 80px">
                    <Option value="嘻嘻嘻">嘻嘻嘻</Option>
                    <Option value="哈哈哈">哈哈哈</Option>
                </Select>
                <Button slot="append" icon="ios-search"></Button>
            </Input>
       </div>
       
        <Table border ref="selection" :columns="columns4" :data="data1" class="table"></Table>
        <div class="tables">  
            <Page :total="dataCount" :page-size="pageSize" @on-change="changepage"
            show-total show-sizer show-elevator :current="pageCurrent"></Page>
       </div>
      

    </div>
</template>
<script>
export default {
    data(){
        return{
            columns4: [
                    {
                        title: '景点图片',
                        key: 'imgurl',
                        render: (h, params) => {
                                return h('div', {
                                    attrs: {
                                        style: 'width: 120px;height: 70px;'
                                    },
                                }, [
                                h('img', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    attrs: {
                                        src: params.row.imgurl, 
                                        style: 'width: 120px;height: 70px;'			
                                        },
                                 
                                    
                                }),
                            ])
                           
                        },
                  
                    },

                    {
                        title: '出发城市',
                        key: 'cityName'
                    },
                     {
                        title: '目的城市',
                        key: 'destinationCityName'
                    },
                    {
                        title: '价格',
                        key: 'price'
                    },
                    {
                        title:'描述',
                        key :'productName',
                        // ellipsis :true,
                        // tooltip : true,
                        // maxWidth : '200px'
                        className:'ren'
                    },
                    {
                        title: '类型',
                        key: 'productTypeName'
                    },
                    {
                        title:'操作',
                        key : 'action',
                        width:'200px',
                          render: (h, params) => {       
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.show(params.row)
                                        }
                                    }
                                }, '修改'),
                                h('Button', {
                                    props: {
                                        type: 'error',
                                        size: 'small'
                                    },
                                    on: {
                                        click: () => {
                                            this.remove(params.row.productId)
                                        }
                                    }
                                }, '删除'),
                                 h('Button', {
                                    props: {
                                        type: 'success',
                                        size: 'small'
                                    },
                                      style: {
                                        marginLeft: '10px'
                                    },
                                    on: {
                                        click: () => {
                                            this.xiajia(params.index)
                                        }
                                    }
                                }, '下架')
                            ]);
                          }
                    }
                ],
                data1: [],
                alldata:[],
                pageSize:5,
                dataCount:0,
                pageCurrent: 1,
            }
    },
    methods: {
        handleSelectAll (status) {
            this.$refs.selection.selectAll(status);
        } ,
        //点击，切换页面
        changepage(index) {
            //需要显示开始数据的index,(因为数据是从0开始的，页码是从1开始的，需要-1)
            let _start = (index - 1) * this.pageSize;
            //需要显示结束数据的index
            let _end = index * this.pageSize;
            //截取需要显示的数据
            this.data1 = this.alldata.slice(_start, _end);
            //储存当前页
            this.pageCurrent = index;
        },
        //跳转添加商品页
        toaddgoods(){
            this.$store.commit("ergodic","添加/上架商品")
            window.location.hash = "#/goodsadd"
            this.$router.replace('/goodsadd');
        },
        deletegoods(){
            alert("暂不支持该改改改改i功能！")
            // this.$refs.del[0].blur();
        },
        show(query){
               this.$store.commit("ergodic","修改商品信息")
            window.location.hash = "#/goodsmend"
            this.$router.replace({path:'/goodsmend',query})
        },
        remove(a){
             this.$Modal.confirm({
                title: '你确定删除该商品吗',
                content: '<p>删除后，商品信息会丢失！</p>',
                onOk: () => {
                  
                         this.$axios.delete('/goodlist',{params:{productId:a}}
                        ) .then( (response) =>{
                        // console.log("删除成功")
                        this.pageCurrent = 1
                          this.$Message.info( "删除成功")
                        this.get();
                        }) 
                        .catch(function (error) {
                    
                        }) ;
                },
                onCancel: () => {
                    this.$Message.info('点击了取消');
                }
            });
             
        },
        async get(){
             let load = this.$Message.loading('正在加载商品数据中...', 0);
            setTimeout(load, 1000);
             let {data} =  await this.$axios.get('/goodlist')
            //  data.map(item=>item.imgurl = require(item.imgurl))
            this.alldata = data;
            this.data1 = data.slice(0,5);
            localStorage.goods = data.length;
            //分页显示所有数据总数
            this.dataCount = this.alldata.length;
        },
        xiajia(){
            this.$Message.info('下架个鬼哦');
        }
    },
    async created(){
       this.get();
    }
}
</script>
<style>
.button{
    margin:0px 0px 20px 0px;
}
.button Button{
    margin:5px;
}
.table table{
    table-layout: auto; 
    width: 100% !important;
  }
.shuru{
    margin-bottom:10px;
}
.tables{
    text-align: center;
     margin-top:20px;
}
.ivu-table-tbody .ivu-table-row td{
    height:50px !important;
}
   
</style>