const express = require('express');
  


const app = express();
const router = require('./router');

// 创建静态资源服务器
// 中间件middlewares
app.use(express.static('./'));
app.use(router);

const {PODB} = require('./config.json');
app.listen(PODB,()=>{
    console.log('服务器启动成功%s',PODB);
})
