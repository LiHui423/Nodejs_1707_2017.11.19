/*
 * https://github.com/thu/Nodejs_1707
 *
 * Copyright mingfei.net@gmail.com 
 * Released under the MIT license 
 * 
 * Date: 2017/11/12 15:32
 */

const express = require('express');

let app = express();

app.get('/', (req, res) => { // get post put delete
    res.sendFile(__dirname + '/public/index.html');
});

app.listen(80);