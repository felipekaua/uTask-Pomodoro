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

module.exports = mongoose.model('Task', taskSchema);