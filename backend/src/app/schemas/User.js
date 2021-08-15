const mongoose = require('mongoose');
const bcrypt = require('bcryptjs'),
  SALT_WORK_FACTOR = 10;

const taskSchema = new mongoose.Schema({
  desc: {
    type: 'String',
    required: true,
  },
  pomodoros: {
    type: 'Number',
    required: true,
  },
  finished: {
    type: 'Boolean',
    required: true,
    default: false,
  },
});

const userSchema = new mongoose.Schema({
  login: {
    type: 'String',
    unique: true,
    required: true,
  },
  password: {
    type: 'String',
    required: true,
  },
  pomodoro: {
    type: 'Number',
    required: true,
    min: 0,
    default: 25,
  },
  short_break: {
    type: 'Number',
    required: true,
    min: 0,
    default: 5,
  },
  long_break: {
    type: 'Number',
    required: true,
    min: 0,
    default: 15,
  },
  tasks: {
    type: [taskSchema],
    default: [],
  },
});

userSchema.pre('save', function (next) {
  const user = this;

  if (!user.isModified('password')) return next();

  bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
    if (err) return next(err);

    bcrypt.hash(user.password, salt, function (err, hash) {
      if (err) return next(err);

      user.password = hash;
      next();
    });
  });
});

userSchema.methods.comparePassword = async function (candidatePassword, userP) {

  return await bcrypt.compare(candidatePassword, userP);

};

module.exports = mongoose.model('User', userSchema);
