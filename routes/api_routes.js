
module.exports = function (app) {

  //User Routes
  var users = require('../api_server/controllers/usersCon');

  app.get('/api/users/me', users.me);
  app.get('/api/users/:userId', users.show);
  //app.get('/api', users.index);
//  app.get('/signin', users.signin);
//  app.get('/signup', users.signup);
//  app.get('/signout', users.signout);

  //Setting up the users api
  //app.post('/users', users.create);

    var animals = require('../api_server/controllers/animalsCon');
    app.get('/api/animals/:animalId', animals.show);
    app.delete('/api/animals/:animalId', animals.destroy);
    app.put('/api/animals/:animalId', animals.update);
    app.post('/api/animals', animals.create);

    //Finish with setting up the animalId param
    app.param('animalId', animals.findOneOf);



};

