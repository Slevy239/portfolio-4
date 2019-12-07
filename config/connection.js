let mysql = require("mysql");

let connection = mysql.createConnection({
    port: 3306,
    host: "localhost",
    password: "",
    database: "portfolio"
});

// Connect to the database
connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
  });
  
  // Export connection
  module.exports = connection;
  