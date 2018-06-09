// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
    all: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },

    insertOne: function(column, value, cb) {
        orm.insertOne("burgers", column, value, function(res) {
            cb(res);
        });
    },

    updateOne: function(colVal, val, id, cb) {
        orm.updateOne("burgers", colVal, val, id, function(res) {
            cb(res);
        });
    }
};

module.exports = burger;