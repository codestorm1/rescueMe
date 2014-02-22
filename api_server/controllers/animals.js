/**
 * Module dependencies.
 */

var mongoose = require('mongoose'),
  Animal = mongoose.model('Animal'),
    _ = require('underscore');

/**
 * Create animal
 */
exports.create = function(req, res) {
  var animal = new Animal(req.body);

  animal.save(function(err) {
    if (err) {
      res.json({errors :  err.errors,
        animal : animal});
    }
    else {
        var url = 'http://localhost:3000/api/animals/' + animal._id;
        res.json({"URL" : url });
    }
  });
};

exports.me = function(req, res) {
    res.json({"response" : "hello me"});
    return;
};

exports.show = function(req, res) {
    var animal = req.animal;

    res.json(animal);
};


exports.update = function(req, res) {
    var animal = req.animal;

    animal = _.extend(animal, req.body);

    animal.save(function(err) {
        res.json(animal);
    });
};

exports.destroy = function(req, res) {
    var animal = req.animal;

    animal.remove(function(err) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.json(animal);
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
      req.animal = animal;
      next();
    });
};
