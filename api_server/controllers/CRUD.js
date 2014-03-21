var mongoose = require('mongoose'),
    _ = require('underscore');

exports.create = function(req, res, Model, modelName) {
    var model = new Model(req.body);
    model.save(function(err) {
        if (err) {
            if (err.errors) {
                res.json(400, {errors: err.errors});
            }
            else {
                res.json(400, {errors :  err});
            }
        }
        else {
            var url = 'http://localhost:3000/api/'  + modelName + '/' + model._id;
            res.json(201, {"URL" : url });
        }
    });
};

exports.show = function(req, res) {
    var model = req.model;
    res.json(model);
};

exports.update = function(req, res) {
    var model = req.model;
    model = _.extend(model, req.body);
    model.save(function(err) {
        res.json(model);
    });
};

exports.destroy = function(req, res) {
    var model = req.model;
    model.remove(function(err) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.json(model);
        }
    });
};


/**
 * Find model by id
 */
exports.findOneOf = function(req, res, next, id, Schema, modelName) {
    Schema
        .findOne({
            _id: id
        })
        .exec(function(err, model) {
            if (err) return next(err);

            if (!model) return next(new Error('Failed to load ' + modelName + ' ' + id));
            req.model = model;
            next();
        });
};
