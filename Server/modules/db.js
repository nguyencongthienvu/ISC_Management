var mysql = require('mysql-model');
var db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'isc_system_management'
});

module.exports = db;