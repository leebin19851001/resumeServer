const url = require("url")
const sloganDao = require('../dao/sloganDao')
const timeUtil = require('../util/timeUtil')
async function addSlogan(params, success, fail) {
    const paramsArr = [params.title, params.content, timeUtil.getNow()]
    let result = await sloganDao.insertSlogan(paramsArr)
    if (result) {
        success(result)
    } else {
        fail('插入失败')
    }
}

async function getSloganAll(success, fail) {
    let result = await sloganDao.getSloganAll();
    if (result) {
        success(result)
    } else {
        fail('获取失败')
    }
}

async function getSloganByLimit(params, success, fail) {
    const paramsArr = [parseInt(params.num)]
    let result = await sloganDao.getSloganByLimit(paramsArr)
    if (result) {
        success(result)
    } else {
        fail('获取失败')
    }
}

module.exports = {
    "addSlogan": addSlogan,
    "getSloganAll": getSloganAll,
    "getSloganByLimit": getSloganByLimit
}