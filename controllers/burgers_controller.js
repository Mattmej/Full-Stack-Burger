var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

// app.get("/", function(req, res) {
//     connection.query("SELECT * FROM burgers;", function(err, data) {
//         if (err) return err;
//         res.render("index", {burgers: data});
//     });
// });

router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        var hbsObject = {
            burgers: data
        };

        res.render("index", hbsObject);
    });
});

// app.post("/api/burgers", function(req, res) {
//     connection.query("INSERT INTO burgers (burger_type) VALUES (?)", [req.body.burger_type], function(err, result) {
//       if (err) {
//         return res.status(500).end();
//       }
  
//       console.log(result);
//       res.json({id: result.insertId});
//     });
//   });

router.post("/api/burgers", function(req, res) {
    burger.insertOne(req.body.burger_type, function(result) {
        res.json({id: result.insertId});
    });
});

//   app.put("/api/burgers/:id", function(req, res) {
//     connection.query("UPDATE burgers SET eaten=true WHERE id=(?)", [req.params.id], function(err, result) {
//       if (err) {
//         return res.status(500).end();
//       }
  
//       else if (result.affectedRows === 0) {
//         return res.status(404).end();
//       }
  
//       res.status(200).end();
//     });
//   });

router.put("/api/burgers/:id", function(req, res) {
    burger.updateOne(req.params.id, function(err, result) {
        if (result.affectedRows === 0) {
            return res.status(404).end();
        }

        else {
            res.status(200).end();
        }
    });
});
  

  