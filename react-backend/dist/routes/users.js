"use strict";
var express = require('express');
var router = express.Router();
var hive = require('../hive/hive');
/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send(hive);
});
module.exports = router;
