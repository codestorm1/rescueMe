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
//  var animal = new Animal(req.body);
//
//  animal.save(function(err) {
//    if (err) {
//      res.json({errors :  err.errors,
//        animal : animal});
//    }
//    else {
//        var url = 'http://localhost:3000/api/animals/' + animal._id;
//        res.json({"URL" : url });
//    }
//  });
};

//exports.show = function(req, res) {
//    var animal = req.animal;
//    res.json(animal);
//};


//exports.update = function(req, res) {
//    var animal = req.animal;
//
//    animal = _.extend(animal, req.body);
//
//    animal.save(function(err) {
//        res.json(animal);
//    });
//};
//
//exports.destroy = function(req, res) {
//    var animal = req.animal;
//
//    animal.remove(function(err) {
//        if (err) {
//            res.render('error', {
//                status: 500
//            });
//        } else {
//            res.json(animal);
//        }
//    });
//};


/**
 * Find animal by id
 */
exports.findOneOf = function(req, res, next, id) {
    return crud.findOneOf(req, res, next, id, Animal, 'animal');
//  Animal
//    .findOne({
//      _id: id
//    })
//    .exec(function(err, animal) {
//       if (err) return next(err);
//
//      if (!animal) return next(new Error('Failed to load Animal ' + id));
//      req.animal = animal;
//      next();
//    });
};
