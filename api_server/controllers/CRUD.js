var mongoose = require('mongoose'),
    _ = require('underscore');

exports.create = function(req, res, Schema, modelName) {
    var model = new Schema(req.body);

    model.save(function(err) {
        if (err) {
            res.json({errors :  err.errors,
                model : model});
        }
        else {
            var url = 'http://localhost:3000/api/'  + modelName + '/' + model._id;
            res.json({"URL" : url });
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
