/*
 * https://github.com/thu/Nodejs_1707
 *
 * Copyright mingfei.net@gmail.com 
 * Released under the MIT license 
 * 
 * Date: 2017/11/12 15:32
 */

const express = require('express');
const bodyParser = require('body-parser');

let app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/', (req, res) => { // get post put delete
    res.sendFile(__dirname + '/public/index.html');
});

app.post('/signIn', (req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    res.send(username + ':' + password);
});

app.listen(80);