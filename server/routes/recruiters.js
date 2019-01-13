var express = require('express');
var router = express.Router();
const RecruiterController = require('../controllers/RecruiterController');

/* Adds a user to the list */
router.post('/addUserToRole', function(req, res) {
  const { userId, role } =  req.body;
  RecruiterController.addUserToApplicants(userId, role, res);
});

router.get('/getAllForJob/:job', function(req, res) {
  RecruiterController.getAllForJob(req.params.job, res);
});

module.exports = router;
