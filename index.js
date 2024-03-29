let express = require("express");
var globalConfig = require("./config");
var loader = require('./loader');

var app = new express();
app.use(express.static(globalConfig['page_path']));

app.listen(globalConfig['port'], function () {
    console.log("服务器已经启动");
});

app.get('/checkLogin', loader.get('/checkLogin'));
app.get('/register', loader.get('/register'));
app.get('/queryUserInfoByUserId', loader.get('/queryUserInfoByUserId'));
app.get('/login', loader.get('/login'));

app.get('/addSlogan', loader.get('/addSlogan'));
app.get('/getSloganAll', loader.get('/getSloganAll'));
app.get('/getSloganByLimit', loader.get('/getSloganByLimit'));

app.get('/deleteSloganById', loader.get('/deleteSloganById'));
app.get('/updateSlogan', loader.get('/updateSlogan'));