const jtk = require('jsonwebtoken');
const {passKey} = require('../config.json');

//文件加密
exports.build = (req,expiresIn=60*2)=>{
    // console.log(req)
    let tank = jtk.sign({req}, passKey, {
        expiresIn
    });
    console.log(tank)
    return tank;
}

//文件解密
exports.jiemi = (token)=>{
    let result = false;
    // console.log(token)
    try {
        jtk.verify(token, passKey);
        result = true;
    }catch{
        result = false;
    }
    // console.log(result)
    return result;
}