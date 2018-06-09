var express = require("express");
var bodyParser = require("body-parser");

var app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Use the express.static middleware to serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));


var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1@rv@1p10p519",
  database: "burger_db"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("connected as id " + connection.threadId);
});

// The following happens when the user gets info from "/" path
app.get("/", function(req, res) {
    connection.query("SELECT * FROM burgers WHERE eaten=false;", function(err, data) {
        if (err) return err;
        res.render("index", {burgers: data});
    });
});

app.post("/api/burgers", function(req, res) {
  connection.query("INSERT INTO burgers (burger_type) VALUES (?)", [req.body.burger_type], function(err, result) {
    if (err) {
      return res.status(500).end();
    }

    console.log(result);
    res.json({id: result.insertId});
  });
});

// The following happens when the user deletes info from the "/api/burgers" path
// app.delete("/api/burgers/:id", function(req, res) {
//   connection.query("DELETE FROM burgers WHERE id = ?", [req.params.id], function(err, result) {
//     if (err) {
//       return res.status(500).end();
//     }

//     else if (result.affectedRows === 0) {
//       return res.status(404).end();
//     }
//     res.status(200).end();
//   });
// });

app.put("/api/burgers/:id", function(req, res) {
  connection.query("UPDATE burgers SET eaten=true WHERE id=(?)", [req.params.id], function(err, result) {
    if (err) {
      return res.status(500).end();
    }

    else if (result.affectedRows === 0) {
      return res.status(404).end();
    }

    res.status(200).end();
  });
});









// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });
