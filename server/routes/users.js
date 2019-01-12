var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send({
    name: 'Ryan',
    email: 'rnluu@uci.edu'
  });
});

module.exports = router;
