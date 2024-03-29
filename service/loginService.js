const loginDao = require("../dao/loginDao")
const timeUtil = require("../util/timeUtil")
const serial = require('../util/serial')

function checkLogin(request, response) {
    let  params = url.parse(request.url, true).query;
    loginDao.queryUserInfoByUserId(params.userName, function (result) {
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
async function register(params, success, fail) {
    //判断传入的用户名是否存在，存在返回false 不可创建，不存在 创建用户
    let userName = params.userName;
    let result = await loginDao.queryUserInfoByUserId(userName);
    if (result && result.length > 0) {
        fail('用户已存在！！！')
    } else {
        let paramsArr = [params.userName, params.password, params.email, timeUtil.getNow(), serial.getRandomCode(32)];
       let result = await loginDao.insertUserInfo(paramsArr);
       if (result) {
           success(result)
       } else {
           fail('插入失败')
       }
    }
}

function queryUserInfoByUserId(request, response, success, fail) {
    let params = url.parse(request.url, true).query;
    loginDao.queryUserInfoByUserId(params.userId, success, fail)
}

async function login(params, success, fail) {
    let userName = params.userName;
    let password = params.password;
    let result = await loginDao.queryUserInfoByUserId(userName);
    if (result.length == 0) {
        console.log('用户不存在')
        fail('用户不存在')
    } else {
        if (result[0].password !== password) {
            fail('密码错误')
        } else {
            success(result);
        }
    }
}

module.exports = {
    "checkLogin": checkLogin,
    "register": register,
    "queryUserInfoByUserId": queryUserInfoByUserId,
    "login": login
}