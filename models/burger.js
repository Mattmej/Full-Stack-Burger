// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },

    insertOne: function(value, cb) {
        orm.insertOne("burgers", "burger_type", value, function(res) {
            cb(res);
        });
    },

    updateOne: function(id, cb) {
        orm.updateOne("burgers", "eaten", "true", id, function(res) {
            cb(res);
        });
    }
};

module.exports = burger;