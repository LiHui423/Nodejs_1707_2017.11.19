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

app.get('/', (req, res) => { // 接受服务器的根目录 GET 请求
   console.log('test...'); // 控制台输出信息
   // res.end('end...'); // res:response end 方法在网页上输出字符串，同时结束了这次响应
    res.sendFile(__dirname + '/public/index.html'); // 页面跳转
});

app.get('/sign-up', (req, res) => { // 来自于链接的请求
    res.sendFile(__dirname + '/public/sign-up.html');
}); // 更好的处理

app.post('/signUp', (req, res) => { // 接受用户注册请求
    console.log('sign up...');
});

app.listen(80); // 监听 80 端口，80 是 http 协议的默认端口