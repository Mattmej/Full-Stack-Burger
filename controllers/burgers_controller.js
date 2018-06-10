var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

// Getting all the burger info and displaying it on the page's tables
router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        var hbsObject = {
            burgers: data
        };

        res.render("index", hbsObject);
    });
});


// Adding data from the text form to the burgers table
router.post("/api/burgers", function(req, res) {
    burger.insertOne(req.body.burger_type, function(result) {
        res.json({id: result.insertId});
    });
});

// Updating the burger data if user presses "eat" button
router.put("/api/burgers/:id", function(req, res) {
    burger.updateOne(req.params.id, function(result) {
        if (result.affectedRows === 0) {
            return res.status(404).end();
        }

        else {
            res.status(200).end();
        }

    });
});

module.exports = router;
  

  