/*
 * https://github.com/thu/Nodejs_1707
 *
 * Copyright mingfei.net@gmail.com 
 * Released under the MIT license 
 * 
 * Date: 2017/11/19 10:16
 */

const express = require('express'); // 引入 express 模块

let app = express(); // 创建 express 对象

app.get('/', (req, res) => {
   console.log('/...');
});

app.listen(80);