const express = require('express');

const Router = express.Router();

// @文件上传
const multer  = require('multer')
const path = require('path');


// 配置上传参数
let storage = multer.diskStorage({
    // destination: function (req, file, cb) {
    //   cb(null, './uploads/');
    // },

    // 上传文件保存目录，无则自动创建
    destination:'./uploads/',

    // 格式化文件名
    filename: function (req, file, cb) {
        let ext = path.extname(file.originalname);
        cb(null, file.fieldname + '-' + Date.now() + ext);
    }
})
  
// 设置文件保存目录
let upload = multer({storage});

Router.post('/chunqiu',upload.single('chunqiu'),async(req,res)=>{
 
    // console.log(req.file)
    // console.log( FormatData())

   
    res.send(req.file);

})

module.exports= Router;