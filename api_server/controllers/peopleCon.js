/**
 * Module dependencies.
 */

var mongoose = require('mongoose'),
    Animal = mongoose.model('Animal'),
    crud = require('./CRUD');

exports = module.exports = Object.create(crud); // inherit crud

var config = { name : 'person', Schema : Person};

exports.create = function(req, res) {
    crud.create(req, res, personSchema.Schema);
};

exports.findOneOf = function(req, res, next, id) {
    return crud.findOneOf(req, res, next, id, Person, 'person');
};
