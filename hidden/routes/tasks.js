var express = require('express');
var router = express.Router();

//  Require controller modules.
var tasksController = require('../controllers/tasksControllers');

/* GET tasks page. */
router.get('/', function (req, res, next) {
  console.log('tasks rourtes')
  res.send(tasksController.tasks);
});

module.exports = router;
