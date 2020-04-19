// Define schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var taskSchema = new Schema({
 name: {
    type: String,
    min: [3, 'need 3 char min!'],
    max: [6, '6 chars max!'],
    required: [true, 'Name required!']
  },
  complete: { type: Boolean, default: false },
});

// Compile model from schema
var Task = mongoose.model('Task', taskSchema);

Task.create({ name: 'created by model' }, function (err, small) {
  if (err) return handleError(err);
  // saved!
});



// exports.all = Task.find({})
// // exports.all = await Task.find({})

// const all = {"aaa": "aaa"}
// exports = all