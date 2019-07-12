const express = require('express');
const Router =express.Router();
const db = require('../db/index');
const {formatdata} = require('../utils')

const colname = 'tours';

//查询、获取商品
Router.get('/',async (req,res)=>{
  
    let result = await db.searchall(colname); 

        if(result.length == 0){
            result = formatdata({status:400,msg:"err"})
        }
        else{
        }
       res.send(result);
})
Router.get('/:id',async (req,res)=>{
    let guid = req.params.id;
    let result = await db.searchone(colname,guid); 
        if(result.length == 0){
            result = formatdata({status:400,msg:"err"})
        }
        else{
        }
       res.send(result);
})
//插入
Router.post('/',async(req,res)=>{
    let query = req.body;
    let result;
    try{
        result = await db.add(colname,query);
        result = formatdata({data:result});
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
    }
    catch(err){
        result = formatdata({status:400,msg:err})
    }
    res.send(result);
})
//修改
Router.put('/',async(req,res)=>{
    let {query,body} = req
    let result;
    try{
        result = await db.amend(colname,query,body);
        result = formatdata({data:result});
    }
    catch(err){
        result = formatdata({status:400,msg:err})
    }
    console.log(result)
    res.send(result);
})

module.exports= Router;