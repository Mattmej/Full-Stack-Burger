var connection = require("../config/connection.js");

// This object will help run sql queries.
var orm = {
    selectAll: function(table, cb) {
        var query = "SELECT * FROM ??";
        connection.query(query, [table], function(err, result) {
            if (err) throw err;
            console.log(result);
            cb(result);
        });
    },

    insertOne: function(table, column, value, cb) {
        var query = "INSERT INTO ?? (??) VALUES (?)";
        connection.query(query, [table, column, value], function(err, result) {
            if (err) throw err;
            console.log(result);
            cb(result);
        });
    },

    updateOne: function(table, colVal, val, id, cb) {
        var query = "UPDATE ?? SET ??=? WHERE id=(?)";
        connection.query(query, [table, colVal, val, id], function(err, result) {
            if (err) throw err;
            console.log(result);
            cb(result);
        });
    }
};

module.exports = orm;