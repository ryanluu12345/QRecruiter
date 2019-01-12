var express = require('express');
var router = express.Router();

/* Used for the default rendering of the root HTML page */
router.get('*', (req, res) => {
  console.log("inside");
  res.sendFile(__dirname + '/client/index.html');
});

module.exports = router;
