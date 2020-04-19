var Task = require('../models/task');

// Display list of all Tasks.
exports.tasks = function (req, res) {
  console.log(Task)
  res.send(Task);
};
