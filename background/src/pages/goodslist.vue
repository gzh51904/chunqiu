<template>
    <div>
        <div class="button">
             <Button type="error" ghost><Icon type="ios-add-circle-outline" size="14"/>添加</Button>
            <Button type="error" ghost><Icon type="md-trash" size="14"/>删除</Button>
        </div>
       <div class="shuru">
            <Input v-model="value13">
                <Select v-model="select3" slot="prepend" style="width: 80px">
                    <Option value="day">Day</Option>
                    <Option value="month">Month</Option>
                </Select>
                <Button slot="append" icon="ios-search"></Button>
            </Input>
       </div>
        
        <Table border ref="selection" :columns="columns4" :data="data1"></Table>

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
                        title: '商品名称',
                        key: 'name'
                    },
                    {
                        title: '价格',
                        key: 'price'
                    },
                    {
                        title:'描述',
                        key :'describe'
                    },
                    {
                        title: 'Address',
                        key: 'address'
                    },
                    {
                        title:'操作',
                        key : 'action',
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
                                            this.show(params.index)
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
                                            this.remove(params.index)
                                        }
                                    }
                                }, '删除'),
                                 h('Button', {
                                    props: {
                                        type: 'success',
                                        size: 'default'
                                    },
                                      style: {
                                        marginLeft: '30px'
                                    },
                                    on: {
                                        click: () => {
                                            this.remove(params.index)
                                        }
                                    }
                                }, '下架')
                            ]);
                          }
                    }
                ],
                data1: [
                    {
                        name: 'John Brown',
                        price: 18,
                        describe: 'xxx',
                        address: 'New York No. 1 Lake Park',
                        date: '2016-10-03'
                    },
                    {
                        name: 'Jim Green',
                        price: 24,
                         describe: 'xxx',
                        address: 'London No. 1 Lake Park',
                        date: '2016-10-01'
                    },
                    {
                        name: 'Joe Black',
                        price: 30,
                         describe: 'xxx',
                        address: 'Sydney No. 1 Lake Park',
                        date: '2016-10-02'
                    },
                    {
                        name: 'Jon Snow',
                        price: 26,
                         describe: 'xxx',
                        address: 'Ottawa No. 2 Lake Park',
                        date: '2016-10-04'
                    }
                ]
            }
    },
    methods: {
    handleSelectAll (status) {
        this.$refs.selection.selectAll(status);
    }
    
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