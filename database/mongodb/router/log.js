const express = require('express');
const Router =express.Router();
const db = require('../db/index');
const {formatdata} = require('../utils')

const colname = 'users';

//登录
Router.post('/',async(req,res)=>{
    let {password,phoneNum} = res.body.params;
    let result;
    try{
        result = await db.searchone(colname,{password,phoneNum});
        result = formatdata({});
    }
    catch(err){
        result = formatdata({status:301,msg:'手机号/邮箱或密码错误'})
    }
    res.send(result);
})

module.exports= Router;