const express = require('express');
const Task = require('../models/Task');
const auth = require('../middleware/auth');
const router = express.Router();

router.use(auth);

router.get('/', async (req, res) => {
  const tasks = await Task.find({ user: req.user.id });
  res.json(tasks);
});

router.post('/', async (req, res) => {
  const { title, description } = req.body;
  const task = new Task({ user: req.user.id, title, description });
  await task.save();
  res.status(201).json(task);
});

router.put('/:id', async (req, res) => {
  const { title, description, completed } = req.body;
  const task = await Task.findOneAndUpdate(
    { _id: req.params.id, user: req.user.id },
    { title, description, completed },
    { new: true }
  );
  res.json(task);
});

router.delete('/:id', async (req, res) => {
  await Task.findOneAndDelete({ _id: req.params.id, user: req.user.id });
  res.json({ message: 'Task deleted' });
});

module.exports = router;