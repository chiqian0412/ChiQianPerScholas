const express = require('express');
const learnerControllers = require('../controllers/learnerControllers.js');

// Create an express router
const router = express.Router();


// Lets refactor toute handles
router
.route("/")
.get(learnerControllers.getAllLearners)
.post(learnerControllers.createLearner);
router
.route("/:id")
.get(learnerControllers.getSingleLearner)
.patch(learnerControllers.updateLearner)
.delete(learnerControllers.deleteLearner);

module.exports = router;