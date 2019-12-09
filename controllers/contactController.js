var express = require("express");
var router = express.Router();
var contact = require("../models/contact.js");

router.get("/", function (req, res) {
    contact.all(function (data) {
        var hbsObject = {
            contacts: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject)
    });
});


router.post("/api/new", function (req, res) {
    contact.create([
        "contact_name", "email", "body", "created_at"
    ], [
       req.body.contact_name, req.body.email, req.body.body, req.body.created_at 
    ],
        function (result) {
            console.log(result)
            res.redirect("/")
        })
});

// Export routes for server.js to use.
module.exports = router;
