const express = require('express');

const app = express();
const User = require('./app/schemas/User');

app.get('/', function(req, res) {
  res.send('hello node');
});

app.get('/testdb', function(req, res) {
  const user = new User({
    'login': 'user',
    'password': '1234',
  });

  user.save(err => console.log(err));
})

module.exports = app;