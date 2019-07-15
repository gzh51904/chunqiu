const express = require('express');
const request = require('request');
const Router = express.Router();
const querystring = require('querystring');
const { formatdata } = require('../utils');

Router.post('/', (req, res) => {
    let  {phoneNum}  = req.body.params;
    let randomNum = Math.floor(Math.random()*1000000).toString();

    var queryData = querystring.stringify({
        "mobile": phoneNum,  // 接受短信的用户手机号码
        "tpl_id": "172618",  // 您申请的短信模板ID，根据实际情况修改
        "tpl_value": "#code#="+randomNum+"",  // 您设置的模板变量，根据实际情况修改
        "key": "63d576dad5f0f330e16a9e8a7a36b615",  // 应用APPKEY(应用详细页查询)
    });

    var queryUrl = 'http://v.juhe.cn/sms/send?' + queryData;

    request(queryUrl, function (error, response, body) {
        if (!error && response.statusCode == 200) {

            console.log("接口返回内容", body) // 打印接口返回内容
            var jsonObj = JSON.parse(body); // 解析接口返回的JSON内容
            console.log("返回的JSON内容", jsonObj)
            console.log(phoneNum);
            if(jsonObj.reason == "操作成功"){
                res.send({data:randomNum,tip:"请求成功"});
            }else{
                res.send(formatdata({msg:"请求失败",status:401}))
            }
        } else {
            console.log('请求异常');
            res.send(formatdata({msg:"请求失败",status:401}))
        }
    })
})
module.exports = Router;