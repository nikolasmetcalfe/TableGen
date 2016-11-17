var express = require('express');
var router = express.Router();
require('../db.js');

var mongoose = require('mongoose');
var ImagePost = mongoose.model('User');
var Image = mongoose.model('Patch');

router.get('/', function(req, res, next)
{
	console.log("Connection!");
});

module.exports = router;
