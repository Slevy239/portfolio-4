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


router.post("/api/contacts", function (req, res) {
    contact.create([
        "name", "email", "body", "created_at",
    ], [
        req.body.name, req.body.email, req.body.body, req.body.created_at
    ], function (result) {
        console.log("hi")
        res.json({ id: result.insterID })
    }).catch(function (err) {
        res.status(401).json(err);
    });
});

// Export routes for server.js to use.
module.exports = router;
