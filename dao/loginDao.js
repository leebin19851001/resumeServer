const dbutil = require('./dbutil')
function queryUserInfoByUserId(userId, success, fail) {
    let querySql = "select * from user_info where user_name = ?;";
    let params = [userId];
    let connection = dbutil.createConnetion();
    connection.connect();
    connection.query(querySql, params, function (error, result) {
        if(error == null) {
            success(result)
        } else {
            fail(error);
        }
    });
    connection.end();
}

function inserUserInfo(userInfo, success, fail) {
    let insertSql = "insert into user_info(`user_name`, `password`, `email`, `ctime`) values(?, ?, ?, ?);"
    var connection = dbutil.createConnetion();
    connection.connect();
    connection.query(insertSql, userInfo, function (error, result) {
        if(error == null) {
            success(result)
        } else {
            fail(error)
        }
    });
    connection.end();
}

module.exports = {
    "queryUserInfoByUserId": queryUserInfoByUserId,
    "inserUserInfo": inserUserInfo
}