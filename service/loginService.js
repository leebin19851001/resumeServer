const loginDao = require("../dao/loginDao")
const timeUtil = require("../util/timeUtil")
const url = require("url");
function checkLogin(request, response) {
    let  params = url.parse(request.url, true).query;
    loginDao.queryUserInfoByUserId(params.userId, function (result) {
        console.log(result)
    }, function () {
        return {
            data:[],
            msg: '用户不存在',
            success: false
        }
    })
    return false
}

/**
 * 注册方法
 * @param request
 * @param response
 * @returns {number}
 */
function register(request, response, success, fail) {
    let params = url.parse(request.url, true).query;
    let paramsArr = [params.userId, params.password, timeUtil.getNow()];
    loginDao.inserUserInfo(paramsArr, success, fail)
}

module.exports = {
    "checkLogin": checkLogin,
    "register": register
}