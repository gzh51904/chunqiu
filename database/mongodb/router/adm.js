const express = require('express');
const Router =express.Router();
const db = require('../db/index');
const {formatdata} = require('../utils')
const token = require('../utils/token')

const colname = 'Administrator';

//查询登录后台
Router.get('/',async (req,res)=>{
    let result = await db.search(colname,req.query); 

    if(result.length == 0){
        result = formatdata({status:400,msg:"err"})
    }
    else{
        let tank = token.build(req.body)
        result = formatdata({data:tank,status:200,msg:"success"})
    }
    res.send(result);
})

module.exports= Router;