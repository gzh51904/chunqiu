const express = require('express');
const Router = express.Router();
const db = require('../db/index');
const { formatdata } = require('../utils')

const colname = 'user';

//插入
Router.post('/', async (req, res) => {
    let result;
    console.log('post请求的params',req.body.params)
    try {
        result = await db.add(colname, req.body.params);
        result = formatdata({});
    }
    catch (err) {
        result = formatdata({ status: 400, msg: err })
    }
    res.send(result);
})
//删除
Router.delete('/', async (req, res) => {
    let query = req.query;
    let result;
    try {
        result = await db.del(colname, query);
        result = formatdata({});
        console.log("hehe")
    }
    catch (err) {
        result = formatdata({ status: 400, msg: err })
    }
    res.send(result);
})
//判断是否已经注册
Router.get('/', async (req, res) => {
    let { phoneNum } = req.query;
    let result = await db.search(colname, { phoneNum });
    if (result.length>0) { 
        res.send(formatdata({ msg: '号码已被注册', status: 301 })) 
    } else { 
        res.send (formatdata({ msg: '号码可用', status: 200 })); 
    }
})

module.exports = Router;