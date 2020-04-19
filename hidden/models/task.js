// Define schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TaskModelSchema = new Schema({
  name: {
    type: String,
    min: [3, 'need 3 char min!'],
    max: [6, '6 chars max!'],
    required: [true, 'Name required!']
  },
  complete: { type: Boolean, default: false }
});

// Compile model from schema
var TaskModel = mongoose.model('TaskModel', TaskModelSchema);

// Create an instance of model
var task_instance = new TaskModel({ name: 'awesome' });

// Save the task instance, passing a callback
task_instance.save(function (err) {
  // if (err) return handleError(err);
  // saved!
});

module.exports = {"sdfsdf": 'asdfasdf'};
// module.exports = TaskModel;
