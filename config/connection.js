const mysql = require("mysql");
const util = require("util");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "OmNamahShivaay1221",
    database: "burgers_db"
});
connection.connect(function (err) {
    if (err) throw err;
    connection.query = util.promisify(connection.query);
});

module.exports = new db(connection);

