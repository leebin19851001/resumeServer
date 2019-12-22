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

async function deleteSloganById(params, success, fail) {
    console.log(params)
    const paramsArr = [parseInt(params.id)]
    let result = await sloganDao.deleteSloganById(paramsArr)
    if (result) {
        success(result)
    }else {
        fail(result)
    }
}

async function updateSlogan(params, success, fail) {
    const paramsArr = [params.title, params.content, timeUtil.getNow(), parseInt(params.id)]
    let result = await sloganDao.updateSlogan(paramsArr)
    if (result) {
        success(result)
    }else {
        fail(result)
    }
}

module.exports = {
    "addSlogan": addSlogan,
    "getSloganAll": getSloganAll,
    "getSloganByLimit": getSloganByLimit,
    "deleteSloganById": deleteSloganById,
    "updateSlogan": updateSlogan
}