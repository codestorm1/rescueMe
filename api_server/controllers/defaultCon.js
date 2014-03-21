
var mongoose = require('mongoose'),
    _ = require('underscore'),
    crud = require('./CRUD'),
    Vaccine = mongoose.model('Vaccine'),
    Shelter = mongoose.model('Shelter')
    ;

var schemaWhiteList = {'vaccines' : Vaccine, 'shelters' : Shelter};


exports = module.exports = Object.create(crud); // inherit crud

exports.create = function(req, res) {
    crud.create(req, res, req.Model, req.modelName);
};


/**
 * Find Schema
 */
exports.findModelType = function(req, res, next, model) {
    var Model = schemaWhiteList[model];
    if (!Model) {
        res.statusCode = 400;
        res.json(model + ' schema not found or not white listed.');
        return;
        //return next(new Error(model + ' schema not found or not white listed'));
    }
    req.Model = Model;
    req.modelName = model;
    next();
};

/**
 * Find model by id
 */
exports.findModel = function(req, res, next, id) {
    if (!req.Model) {
        return next('schema is not available.')
    }
    req.Model
        .findOne({
            _id: id
        })
        .exec(function(err, model) {
            if (err) return next(err);

            if (!model) return next(new Error('Failed to load ' + model + ' ' + id));
            req.model = model;
            next();
        });
};

