const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  'desc': {
    type: 'String',
    required: true
  },
  'pomodoros': {
    type: 'Number',
    required: true,
  },
  'finished': {
    type: 'Boolean',
    required: true,
    default: false
  }
});

const userSchema = new mongoose.Schema({
  'login': {
    type: 'String',
    unique: true,
    required: true,
  },
  'password': {
    type: 'String',
    required: true,
  },
  'pomodoro': {
    type: 'Number',
    required: true,
    min: 0,
    default: 25
  },
  'short_break': {
    type: 'Number',
    required: true,
    min: 0,
    default: 5
  },
  'long_break': {
    type: 'Number',
    required: true,
    min: 0,
    default: 15
  },
  'tasks': {
    type: [taskSchema],
    default: []
  }
});

module.exports = mongoose.model('User', userSchema);