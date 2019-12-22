const sloganService = require('../service/sloganService')
const url = require("url");
const respUtil = require('../util/respUtil')
let path = new Map();


function addSlogan(request, response) {
    const params = url.parse(request.url, true).query;
    sloganService.addSlogan(params, function (result) {
        console.log(result);
        response.writeHead(200);
        response.write(respUtil.writeResult('success', '添加成功', result));
        response.end();
    }, function (err) {
        console.log(err)
        response.writeHead(200);
        response.write(respUtil.writeResult('success', err, null));
        response.end();
    })

}
path.set('/addSlogan', addSlogan);

function getSloganAll(request, response) {
    sloganService.getSloganAll(function (result) {
        console.log(result);
        response.writeHead(200);
        response.write(respUtil.writeResult('success', '获取成功', result));
        response.end();
    }, function (err) {
        console.log(err)
        response.writeHead(200);
        response.write(respUtil.writeResult('success', err, null));
        response.end();
    })
}
path.set('/getSloganAll', getSloganAll)

function getSloganByLimit(request, response) {
    const params = url.parse(request.url, true).query
    sloganService.getSloganByLimit(params, function (result) {
        console.log(result);
        response.writeHead(200);
        response.write(respUtil.writeResult('success', '获取成功', result));
        response.end();
    }, function (err) {
        console.log(err)
        response.writeHead(200);
        response.write(respUtil.writeResult('success', err, null));
        response.end();
    })
}
path.set('/getSloganByLimit', getSloganByLimit)

function deleteSloganById(request, response) {
    const params = url.parse(request.url, true).query
    sloganService.deleteSloganById(params, function (result) {
        console.log(result);
        response.writeHead(200);
        response.write(respUtil.writeResult('success', '获取成功', result));
        response.end();
    }, function (err) {
        console.log(err)
        response.writeHead(200);
        response.write(respUtil.writeResult('success', err, null));
        response.end();
    })
}
path.set('/deleteSloganById', deleteSloganById)

function updateSlogan(request, response) {
    const params = url.parse(request.url, true).query
    sloganService.updateSlogan(params, function (result) {
        console.log(result);
        response.writeHead(200);
        response.write(respUtil.writeResult('success', '获取成功', result));
        response.end();
    }, function (err) {
        console.log(err)
        response.writeHead(200);
        response.write(respUtil.writeResult('success', err, null));
        response.end();
    })
}
path.set('/updateSlogan', updateSlogan)

module.exports.path = path;

