var express = require("express");
var globalConfig = require("./config");
var loader = require('./loader');

var app = new express();
app.use(express.static(globalConfig['page_path']));

app.listen(globalConfig['port'], function () {
    console.log("服务器已经启动");
});

app.get('/api/checkLogin', loader.get('/checkLogin'));
app.get('/api/register', loader.get('/register'));
app.get('/queryUserInfoByUserId', loader.get('/queryUserInfoByUserId'));