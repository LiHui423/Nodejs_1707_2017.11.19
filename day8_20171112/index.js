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
    res.send('Hello, Express.');
});

app.listen(80);