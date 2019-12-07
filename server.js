// *********************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
// *********************************************************************************

// Dependencies
// =============================================================
var express = require("express");
var path = require('path')
const exphbs = require("express-handlebars");

// Sets up the Express App
// =============================================================
var app = express();


var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + '/public'));

// Static directory to be served
app.use(express.static("app/public"));

app.engine(
    "handlebars",
    exphbs({
      defaultLayout: "main",
    })
  );
  app.set("view engine", "handlebars");
  


// Routes
// =============================================================
// require("./config/connection.js")(app);
require("./routes/api-routes.js")(app);
// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});


module.exports = app;