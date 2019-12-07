let connection = require("../config/connection.js");

module.exports = function(app) {

    app.get('/', function(req, res){
        res.render('index.html')
      });
      
    app.get("/api/all", function(req, res) {
        let dbQuery = "SELECT * FROM contacts";

        connection.query(dbQuery, function(err, result) {
            if (err) throw err;
            res.render("index");
        })
    })


    app.post("/api/new", function(req, res) {
        console.log("posted");
        console.log(req.body);

        let dbQuery = "INSERT INTO contacts (email, body, created_at) VALUES (?,?,?)";

        connection.query(dbQuery, [req.body.email, req.body.body, req.body.created_at], function(err, result) {
            if (err) throw err;
            console.log("saved");
            res.end();
        })

    })
}