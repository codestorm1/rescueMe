
module.exports = function (app) {

  //User Routes
  var users = require('../api_server/controllers/usersCon');

  app.get('/api/users/me', users.me);
  app.get('/api/users/:userId', users.show);
  //app.get('/api', users.index);

  //Setting up the users api
  //app.post('/users', users.create);

    var animals = require('../api_server/controllers/animalsCon');
    app.get('/api/animals/:animalId', animals.show);
    app.delete('/api/animals/:animalId', animals.destroy);
    app.put('/api/animals/:animalId', animals.update);
    app.post('/api/animals', animals.create);

    //Finish with setting up the animalId param
    app.param('animalId', animals.findOneOf);

    var defaultController = require('../api_server/controllers/defaultCon');
    app.get('/api/:model/:modelID', defaultController.show);
    app.delete('/api/:model/:modelID', defaultController.destroy);
    app.put('/api/:model/:modelID', defaultController.update);
    app.post('/api/:model', defaultController.create);

    //Finish with setting up the ModelType and modelID params
    app.param('model', defaultController.findModelType);
    app.param('modelID', defaultController.findModel);


};

