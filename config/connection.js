var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "qzkp8ry756433yd4.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  user: "jktm3t4cbhcmtnbr",
  password: "meqgyb95l4mo1za0",
  database: "r0nmzjo7wqoztp2z",
  port: 3306
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("connected as id " + connection.threadId);
});

module.exports = connection;