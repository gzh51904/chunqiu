<template>
    <div>
        <div class="button">
             <Button type="error" ghost @click.native="toaddgoods"><Icon type="ios-add-circle-outline" size="14"/>添加</Button>
            <Button type="error" ghost @click.native="deletegoods"><Icon type="md-trash" size="14"/>删除</Button>
        </div>
       <div class="shuru">
            <Input>
                <Select  slot="prepend" style="width: 80px">
                    <Option value="day">Day</Option>
                    <Option value="month">Month</Option>
                </Select>
                <Button slot="append" icon="ios-search"></Button>
            </Input>
       </div>
        
        <Table border ref="selection" :columns="columns4" :data="data1"></Table>
        <div class="tables">  
            <Page :total="dataCount" :page-size="pageSize" @on-change="changepage"
            show-total show-sizer show-elevator></Page>
       </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            columns4: [
                {
                    type: 'selection',
                    width: 60,
                    align: 'center'
                },
                {
                    title:'用户名/手机号',
                    key: 'phoneNum'
                },
                {
                    title: '密码',
                    key: 'password'
                },
                {
                    title: '注册时间',
                    key: 'address'
                },
                    {
                    title: '操作',
                    key: 'set',
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
                                        this.look(params.row)
                                    }
                                }
                            }, '查看'),
                            h('Button', {
                                props: {
                                    type: 'error',
                                    size: 'small'
                                },
                                on: {
                                    click: () => {
                                        this.cancel(params.row)
                                    }
                                }
                            }, '销户')
                        ]);
                        }
                }
            ],
            data1: [],
            alldata:[],
            pageSize:5,
            dataCount:0,
            pageCurrent: 1,
            menuActive:'',
        }
    },
    methods: {
        handleSelectAll (status) {
            this.$refs.selection.selectAll(status);
        },
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
        //跳转添加商品页事件
        toaddgoods(){  
            this.$store.commit("ergodic","添加用户信息")   
            window.location.hash = "#/useradd"
            this.$router.replace('/useradd');
        },

        //删除商品
        deletegoods(){
            alert("功能正在开发！")
        },
        //销毁用户
        cancel({username,password}){
            this.$Modal.confirm({
                title: '你确定删除该用户吗',
                content: '<div>用户信息比较重要，删除后用户信息将被销毁，且无法登录APP</div>',
                onOk:  () => {
                   
                         this.$axios.delete('/reg',{params:{phoneNum,password}}
                        ) .then( (response) =>{
                        // console.log("删除成功")
                         this.$Message.info("删除成功" )
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
        //查看用户信息
        look(query){       
           let  {_id}= query;
            this.$router.replace({path:'/userdetails',query:{_id}})
        },
        async get(){
            let load = this.$Message.loading('正在加载用户数据，请稍等...', 0);
            setTimeout(load, 1000);
            let {data} =  await this.$axios.get('/users')
            this.alldata = data;
            this.data1 = data.slice(0,5);
            //分页显示所有数据总数
            this.dataCount = this.alldata.length;
            }
    },
     created(){
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
.shuru{
    margin-bottom:10px;
}
</style>

