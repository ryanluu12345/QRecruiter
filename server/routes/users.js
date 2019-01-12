var express = require('express');
var router = express.Router();
const UserController = require('../controllers/UserController');

/* GET users listing. */
router.post('/create', function(req, res) {
  UserController.createUser("Ryan","pass","email","phone","linkedin","availability","resume", res);
});

router.get('/getAll', function(req, res) {
  UserController.getAllUsers(res);
});

router.put('/user', function(req, res) {
  const us = req.query.name;
  res.status(200).send({
    name: us,
  });
})

module.exports = router;
