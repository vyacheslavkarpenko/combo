const mongoose = require('mongoose');
 
const Schema = mongoose.Schema;

const taskSchema = new Schema({
  name: {
    type: String,
    min: [3, 'need 3 char min!'],
    max: [6, '6 chars max!'],
    required: [true, 'Name required!']
  },
  completed: { type: Boolean, default: false },
});
const Task = mongoose.model('Task', taskSchema);

mongoose.connect('mongodb://127.0.0.1:27017/combo', { useUnifiedTopology: true, useNewUrlParser: true });

// all tasks
exports.tasks = (req, res) => {
  Task.find({}, (err, tasks) => {
    if(err) return console.log(err)
    res.json(tasks)
  });
};

// create task
exports.create = (req, res) => {
  const { name } = req.body
  const { completed } = req.body.completed || true
  const newTask = { name: name, completed: completed }

  const task = new Task(newTask)

  task.save(
    (err) => {
      if (err) return console.log(err)
      res.send(task)
    });
};

// get the task
exports.task = (req, res) => {
  const { id } = req.params

  Task.findOne({ _id: id }, (err, task) => {
    if (err) return console.log(err)
    res.json(task)
  });
};

// update the task
exports.update = (req, res) => {
  const { _id } = req.body
  const { name } = req.body || ''
  const { completed } = req.body.completed || false


  console.log(req.body)
  const newTask = { name: name, completed: completed }

  Task.findOneAndUpdate({ _id: _id }, newTask, (err, task) => {
    if (err) return console.log(err)
    res.json(task)
  });
};

// delete task
exports.delete = (req, res) => {
  const { _id } = req.params

  Task.findOneAndDelete(_id, (err, task) => {
    if (err) return console.log(err)
    res.json(task)
  });
};
