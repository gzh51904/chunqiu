const express = require('express');
const Router =express.Router();
const db = require('../db/index');
const {formatdata} = require('../utils')

const colname = 'users';

//插入
Router.post('/',async(req,res)=>{
    let result;
    try{
        result = await db.add(colname,req.body);
        result = formatdata({});
    }
    catch(err){
        result = formatdata({status:400,msg:err})
    }
    res.send(result);
})
//删除
Router.delete('/',async(req,res)=>{
    let query = req.query;
    let result;
    try{
        result = await db.del(colname,query);
        result = formatdata({});
        console.log("hehe")
    }
    catch(err){
        result = formatdata({status:400,msg:err})
    }
    res.send(result);
})

module.exports= Router;