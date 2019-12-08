const loginService = require("../service/loginService");
const respUtil = require("../util/respUtil");
const url = require("url");

let path = new Map();

function checkLogin(request, response) {
    const result = loginService.checkLogin(request, response);
    response.writeHead(200);
    response.write(respUtil.writeResult('success', '获取成功', result));
    response.end();
}
path.set('/checkLogin', checkLogin);

function register(request, response) {
    console.log("一个请求过来里");
    loginService.register(request, response, function(result) {
        response.writeHead(200);
        response.write(respUtil.writeResult('success', '插入成功', result));
        response.end();
    }, function (error) {
        response.writeHead(200);
        response.write(respUtil.writeResult('fail', '插入失败', error));
        response.end();
    });
}
path.set('/register', register);

module.exports.path = path;