var connection = require("../config/connection.js");

var orm = {
    selectAll: function(table) {
        var query = "SELECT * FROM ??";
        connection.query(query, [table], function(err, result) {
            if (err) throw err;
            console.log(result);
        });
    },

    insertOne: function(table, column, value) {
        var query = "INSERT INTO ?? (??) VALUES (?)";
        connection.query(query, [table, column, value], function(err, result) {
            if (err) throw err;
            console.log(result);
        });
    },

    updateOne: function(table, colVal, val, id) {
        var query = "UPDATE ?? SET ??=? WHERE id=(?)";
        connection.query(query, [table, colVal, val, id], function(err, result) {
            if (err) throw err;
            console.log(result);
        });
    }
};

module.exports = orm;