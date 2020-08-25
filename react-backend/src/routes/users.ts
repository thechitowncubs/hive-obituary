var express = require('express');
var router = express.Router();

const hive = require('../hive/hive');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(hive)
});

module.exports = router;
