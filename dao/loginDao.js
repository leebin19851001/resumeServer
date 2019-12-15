const dbutil = require('./dbutil')
const asyncFunc = require('./async')

async function queryUserInfoByUserId(userName) {
    let querySql = "select * from user_info where user_name = ?;";
    let params = [userName];
    let connection = dbutil.createConnetion();
    return await  asyncFunc.query(querySql, params, connection);
}

async function insertUserInfo(userInfo) {
    let insertSql = "insert into user_info(`user_name`, `password`, `email`, `ctime`, `app_key`) values(?, ?, ?, ?, ?);"
    let connection = dbutil.createConnetion();
    return await asyncFunc.query(insertSql, userInfo, connection);
}


module.exports = {
    "queryUserInfoByUserId": queryUserInfoByUserId,
    "insertUserInfo": insertUserInfo
}