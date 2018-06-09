var mysql = require("mysql");

var connection = mysql.createConnection({
    port: 3000,
    host: "localhost",
    user: "root",
    password: "xfire8295",
    database : "burgers_db"
});
// function handleDisconnect() {
//   connection = mysql.createConnection(db_config);}
connection.connect(function(err) {
    if (err) {
        console.error('error connection: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadID);
});

//exports connection to connect Node to MySQL
module.exports = connection;



