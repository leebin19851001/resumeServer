const asyncFunc = require('./async')
const dbutil = require('./dbutil')

async function insertSlogan(params) {
    let insertSql = "insert into slogan(`title`, `content`, `ctime`) values(?, ?, ?);";
    let connection = dbutil.createConnetion();
    return await  asyncFunc.query(insertSql, params, connection);
}

async function getSloganAll() {
    let querySql = "select * from slogan order by ctime desc"
    let connection = dbutil.createConnetion();
    return await asyncFunc.query(querySql, [], connection)
}

async function getSloganByLimit(params) {
    let querySql = "select * from slogan order by ctime desc limit 0, ?;";
    let connection = dbutil.createConnetion();
    return await asyncFunc.query(querySql, params, connection);
}

async function deleteSloganById(params) {
    let querySql = "delete from slogan where id = ?;"
    let connection = dbutil.createConnetion();
    return await asyncFunc.query(querySql, params, connection);
}

async function updateSlogan(params) {
    let querySql = "update slogan set title = ?, content = ?, ctime = ? where id = ?;"
    let connection = dbutil.createConnetion();
    return await asyncFunc.query(querySql, params, connection);
}

module.exports = {
    "insertSlogan": insertSlogan,
    "getSloganAll": getSloganAll,
    "getSloganByLimit": getSloganByLimit,
    "deleteSloganById": deleteSloganById,
    "updateSlogan": updateSlogan
}