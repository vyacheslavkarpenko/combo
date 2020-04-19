var express = require('express');
var router = express.Router();

//  Require controller modules.
var tasksControllers = require('../controllers/tasksControllers');

/* GET tasks page. */
router.post('/', tasksControllers.create);
router.get('/', tasksControllers.tasks);
router.get('/:id', tasksControllers.task);
router.put('/:id', tasksControllers.update);
router.delete('/:id', tasksControllers.delete);


module.exports = router;
