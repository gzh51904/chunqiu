const express = require('express');
const Router =express.Router();
const db = require('../db/index');
const {formatdata} = require('../utils')

const colname = 'user';

//查询、获取商品
Router.get('/',async (req,res)=>{
    console.log('dfsd')
    let result = await db.searchall(colname); 

        if(result.length == 0){
            result = formatdata({status:400,msg:"err"})
        }
        else{
        }
       res.send(result);
})

module.exports= Router;