const express = require('express');
const Router = express.Router();
const db = require('../db/index');
const { formatdata, token } = require('../utils')

const colname = 'user';

//登录
Router.post('/', async (req, res) => {
    let { password, phoneNum } = req.body.params;
    let result;
    password = phoneNum.slice(5);
    console.log(phoneNum,password);

    result = await db.search(colname, { phoneNum });
    console.log('------', result);

    if (result.length > 0) {
        let tk = token.build(password);
        res.send(formatdata({ data: { phoneNum: result[0].phoneNum, tk } ,msg:'登录成功'}));
    } else {
        let result2 = await db.add(colname, {phoneNum,password});
        res.send(formatdata({ status: 101, msg: '自动注册成功' }));
    }


})

module.exports = Router;