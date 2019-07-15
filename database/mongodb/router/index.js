const express = require('express');
const Router =express.Router();


const goodlist = require('./goodlist');
const upload = require('./upload');
const users = require('./users');
const reg = require('./reg');
const adm = require('./adm');
const log = require('./log');

const token = require('../utils/token')
const {formatdata} = require('../utils')

Router.use(express.json(),express.urlencoded({ extended: false }));

let allowOrigin = ['http://127.0.0.1:1904','http://baidu.com','http://localhost:8080']

Router.use((req,res,next)=>{
    // req.header保存前端发来的请求头信息,包含host,origin
    console.log(req.headers)
    // 设置跨域响应头
    // 判断当前域名是否在allowOrigin当中,如果在,则设置响应头,否则不设置
    let idx;
    let has = allowOrigin.some((item,i)=>{
        console.log(item,i,req.headers.origin)
        idx = i;
        return item.includes(req.headers.origin)
    });
    // if(has){
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, token, Accept,X-Requested-With");
        res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    // }

    // 跨域请求CORS中的预请求
    // OPTIONS:预请求(当跨域请求为复杂请求时,浏览器自动发起,目的是询问服务器是否支持这样的跨域请求)
    if(req.method=="OPTIONS") {
        res.sendStatus(200);/*让options请求快速返回*/
    }
    else{
        let tank = req.headers.token ? req.headers.token:"";
        // 判断是否为无需token请求
        if(req.query.ignore ||  req.body.ignore){
            req.query.ignore ? delete req.query['ignore'] : delete req.body['ignore']
            next();
        }
        else{
            next();
        }
    //     else if(token.jiemi(tank)){
    //         console.log('解密成功')
    //         next();
    //     }
    //    else{
    //     //    console.log(token.jiemi(tank))
    //     console.log('过期或失败？')
    //     res.send(formatdata({status:401,msg:'unauthorized'}))
    //    }
    }
})





Router.use('/goodlist',goodlist);
Router.use('/upload',upload);
Router.use('/users',users);
Router.use('/reg',reg);
Router.use('/adm',adm);
Router.use('/log',log);






module.exports= Router;