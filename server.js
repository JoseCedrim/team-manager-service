var express = require('express'),
  app = express(),
  port = process.env.PORT || 80;
  app.listen(port);

var teamController = require('./controllers/team.controller');
var playerController = require('./controllers/player.controller');

app.route('/teams')
    .get(teamController.listAll)
    .post(teamController.create)

app.route('/teams/:teamId')   
    .get(teamController.getById)
    .put(teamController.edit)
    .delete(teamController.delete)

app.route('/players')
    .get(playerController.listAll)
    .post(playerController.create)

app.route('/players/:playerId')   
    .get(playerController.getById)
    .put(playerController.edit)
    .delete(playerController.delete)

console.log('todo list RESTful API server started on: ' + port);
