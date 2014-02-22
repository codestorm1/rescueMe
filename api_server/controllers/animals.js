/**
 * Module dependencies.
 */

var mongoose = require('mongoose'),
  Animal = mongoose.model('Animal');

/**
 * Create animal
 */
exports.create = function(req, res) {
  var animal = new User(req.body);

  animal.save(function(err) {
    if (err) {
      res.json({errors :  err.errors,
        animal : animal});
    }
    else {
        res.json({"response" : "error creating animal"});
    }
  });
};

/**
 * Find animal by id
 */
exports.animal = function(req, res, next, id) {
  Animal
    .findOne({
      _id: id
    })
    .exec(function(err, animal) {
      if (err) return next(err);
      if (!animal) return next(new Error('Failed to load Animal ' + id));
      req.profile = animal;
      next();
    });
};
