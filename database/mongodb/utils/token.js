const jtk = require('jsonwebtoken');

//文件加密
exports.build = (req,expiresIn=7200)=>{
    // console.log(req)
    let tank = jtk.sign({req}, 'guo', {
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
        jtk.verify(token, 'guo');
        result = true;
    }catch{
        result = false;
    }
    // console.log(result)
    return result;
}