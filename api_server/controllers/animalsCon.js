/**
 * Module dependencies.
 */

var mongoose = require('mongoose'),
  Animal = mongoose.model('Animal'),
    crud = require('./CRUD');

exports = module.exports = Object.create(crud); // inherit crud
/**
 * Create animal
 */
exports.create = function(req, res) {
    crud.create(req, res, Animal, 'animal');
};

/**
 * Find animal by id
 */
exports.findOneOf = function(req, res, next, id) {
    return crud.findOneOf(req, res, next, id, Animal, 'animal');
};
