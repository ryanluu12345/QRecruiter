var express = require('express');
var router = express.Router();
const UserController = require('../controllers/UserController');

/* Creates a new user */
router.post('/create', function(req, res) {
  const { username, pass, email, phone } = req.body.user;
  UserController.createUser(username, pass, email, phone, res);
});

router.post('/updateProfile/:id', function(req, res) {
  const { skills, availability, picture, resume } = req.body;
  UserController.updateProfile(req.params.id, resume, picture, skills, availability, res);
});

router.get('/getAll', function(req, res) {
  UserController.getAllUsers(res);
});

module.exports = router;
