const User = require('../schemas/User');
const Task = require('../schemas/Task');

class TaskController {

  async index(req, res) {
    const user = await User.findOne({ _id: req.userId });

    res.send(user.tasks);
  }

  async create(req, res) {
    const { login } = req.params;
    const { desc, pomodoros } = req.body;

    const user = await User.findOne({ login: login });

    user.tasks = [...user.tasks, new Task({ desc, pomodoros })];

    try {
      await user.save();
    } catch (err) {
      res.status(400).send(`Ooops: ${err.message}`);
    }

    res.send(user.taks);
  }

  async update(req, res) {
    const { id, desc, pomodoros, finished } = req.body;

    const user = await User.findOne({ _id: req.userId });
    const task = user.tasks.id(id);

    if(!task)
      res.status(404).send('Ooops: task not found');

    try {
      task.set({
        'desc': desc,
        'pomodoros': pomodoros,
        'finished': finished
      });

      await user.save();
    } catch (err) {
      res.status(400).send(`Ooops: ${err.message}`);
    }

    res.send(user.tasks.id(id));
  }
  
  async delete(req, res) {
    const { id } = req.body;

    const user = await User.findOne({ _id: req.userId });
    const task = user.tasks.id(id);

    if(!task)
      res.status(404).send('Ooops: task not found');

    try {
      task.remove();

      await user.save();
    } catch (err) {
      res.status(400).send(`Ooops: ${err.message}`);
    }

    res.status(201);
  }

}

module.exports = new TaskController();