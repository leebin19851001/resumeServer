var mysql = require("mysql");

function createConnetion() {
    var connection = mysql.createConnection({
        host: '114.215.144.88',
        port: '3306',
        user: 'root',
        password: 'leebin@19851001',
        database: 'person_resume'
    })

    return connection;
}

module.exports.createConnetion = createConnetion;
