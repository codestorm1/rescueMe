/**
 * Module dependencies.
 */

var mongoose = require('mongoose'),
    Animal = mongoose.model('Animal'),
    crud = require('./CRUD'),
    _ = require('underscore');

_.extend(exports, crud);

/**
 * Create animal
 */
exports.create = function(req, res) {
    crud.create(req, res, Animal, 'animal');
};

exports.findOneOf = function(req, res, next, id) {
    return crud.findOneOf(req, res, next, id, Animal, 'animal');
};
