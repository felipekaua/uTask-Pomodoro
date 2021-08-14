const express = require('express');

const app = express();

const verifyJWT = require('./app/middlewares/auth');
const UserController = require('./app/controllers/UserController');
const TaskController = require('./app/controllers/TaskController');

app.get('/', function (req, res) {
  res.send('uTask-Pomodoro');
});

// users
app.post('/users/login', UserController.login);
app.post('/users/create', UserController.create);

// tasks
app.get('/tasks', verifyJWT, TaskController.index);
app.post('/tasks', verifyJWT, TaskController.create);
app.put('/tasks', verifyJWT, TaskController.update);
app.delete('/tasks', verifyJWT, TaskController.delete);

module.exports = app;
