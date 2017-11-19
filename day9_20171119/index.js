/*
 * https://github.com/thu/Nodejs_1707
 *
 * Copyright mingfei.net@gmail.com 
 * Released under the MIT license 
 * 
 * Date: 2017/11/19 10:16
 */

const express = require('express'); // 引入 express 模块
const bodyParser = require('body-parser'); // 引入 body-parser 模块

let app = express(); // 创建 express 对象

app.use(bodyParser.urlencoded()); // 配置 body-parser 中间件，注意位置

app.get('/', (req, res) => { // 接受服务器的根目录 GET 请求
   console.log('test...'); // 控制台输出信息
   // res.end('end...'); // res:response end 方法在网页上输出字符串，同时结束了这次响应
    res.sendFile(__dirname + '/public/index.html'); // 页面跳转
});

app.get('/sign-up', (req, res) => { // 来自于链接的请求
    res.sendFile(__dirname + '/public/sign-up.html');
}); // 更好的处理

app.post('/signUp', (req, res) => { // 接受用户注册请求
    let username = req.body.username;
    let password = req.body.password;
    res.end(`${username} + ${password}`);
});

app.listen(80); // 监听 80 端口，80 是 http 协议的默认端口