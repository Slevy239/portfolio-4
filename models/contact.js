var orm = require("../config/orm.js");

var contact = {
    all: function(cb) {
      orm.all("contacts", function(res) {
        cb(res);
      });
    },
    // The variables cols and vals are arrays.
    create: function(cols, vals, cb) {
      orm.create("contacts", cols, vals, function(res) {
        cb(res);
      });
    },
    update: function(objColVals, condition, cb) {
      orm.update("contacts", objColVals, condition, function(res) {
        cb(res);
      });
    },
    delete: function(condition, cb) {
      orm.delete("contacts", condition, function(res) {
        cb(res);
      });
    }
  };
  module.exports = contact