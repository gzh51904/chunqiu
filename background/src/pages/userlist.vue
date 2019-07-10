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
        <Button @click="handleSelectAll(true)">Set all selected</Button>
        <Button @click="handleSelectAll(false)">Cancel all selected</Button>
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
                        title:'用户名',
                        key: 'name'
                    },
                    {
                        title: '密码',
                        key: 'age'
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
                                            this.show(params.index)
                                        }
                                    }
                                }, 'View'),
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
                                }, 'Delete')
                            ]);
                         }
                    }
                ],
                data1: [
                    {
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park',
                        date: '2016-10-03',
                       
                    },
                    {
                        name: 'Jim Green',
                        age: 24,
                        address: 'London No. 1 Lake Park',
                        date: '2016-10-01',
                       
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park',
                        date: '2016-10-02',
                         
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park',
                        date: '2016-10-04',
                        
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

