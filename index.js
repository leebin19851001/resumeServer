var express = require("express");
var globalConfig = require("./config");
var loader = require('./loader');

var app = new express();
app.use(express.static(globalConfig['page_path']));

app.listen(globalConfig['port'], function () {
    console.log("服务器已经启动");
});

app.get('/checkLogin', loader.get('/checkLogin'));
app.get('/register', loader.get('/register'));