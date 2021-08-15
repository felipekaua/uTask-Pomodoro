const User = require('../schemas/User');
const Task = require('../schemas/Task');

class TaskController {
  async index(req, res) {
    const user = await User.findOne({ _id: req.userId });

    res.send(user.tasks);
  }

  async create(req, res) {
    const { desc, pomodoros } = req.body;

    const user = await User.findOne({ _id: req.userId });
    user.tasks = [...user.tasks, new Task({ desc, pomodoros })];

    try {
      await user.save();
    } catch (err) {
      res.status(400).send(`Ooops: ${err.message}`);
    }

    res.send(user.tasks);
  }

  async update(req, res) {
    const { _id, desc, pomodoros, finished } = req.body;

    const user = await User.findOne({ _id: req.userId });
    const task = user.tasks.id(_id);

    if (!task) res.status(404).send('Ooops: task not found');

    try {
      task.set({
        finished: finished,
      });

      await user.save();
    } catch (err) {
      res.status(400).send(`Ooops: ${err.message}`);
    }

    res.send(user.tasks.id(_id));
  }

  async delete(req, res) {
    const { id } = req.body;

    const user = await User.findOne({ _id: req.userId });
    const task = user.tasks.id(id);
    console.log(id);
    console.log(req.body);
    if (!task) res.status(404).send('Ooops: task not found');

    try {
      task.remove();

      await user.save();
    } catch (err) {
      res.status(400).send(`Ooops: ${err.message}`);
    }

    res.send(user.tasks);
  }
}

module.exports = new TaskController();
