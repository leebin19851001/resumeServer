let query = function (sql, values, connection) {
    // 返回一个 Promise
    return new Promise((resolve, reject) => {
        connection.query(sql, values, (err, rows) => {
            if (err) {
                reject(err)
            } else {
                resolve(rows)
            }
            // 结束会话
            connection.end()
        })
    })
}
module.exports = {
    "query": query
};