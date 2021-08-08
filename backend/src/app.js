const express = require('express');
require('dotenv').config();

const app = express();

const routes = require('./routes');
const database = require('./database');

database();

app.use(express.json());
app.use(routes);

module.exports = app;