var express = require('express');
var router = express.Router();
require('../db.js');

var mongoose = require('mongoose');
var ImagePost = mongoose.model('User');
var Image = mongoose.model('Patch');

router.get('/', function(req, res, next)
{
	res.redirect('generate');
});

router.get('/generate', function(req, res, next)
{
	res.render('generate');
});

router.get('/patches', function(req, res, next) 
{	
	Patch.find({}, function(err, result, count) 
	{
		res.render('patches', {result});
	});
});

router.post('/generate', function(req, res, next)
{
	res.redirect('generate');
	
	new Patch
	({
		volume: 
	}).save(function(err, Patch, count)
	{
		res.redirect('/patches');
	});
});

									/* HELPERS */

function toHex(a)
{
	var rand;
	
	if (a === null || a === '' || a === undefined)
	{
		rand = Math.floor(Math.random() * (15));
		if (rand.length == 1)
			return rand;
		else
			return toHex(rand);
	}
	
	if (a.length === 1 && checkInput(a))
		return a;
	else if (a === "10")
		return "A";
	else if (a === "11")
		return "B";
	else if (a === "12")
		return "C";
	else if (a === "13")
		return "D";
	else if (a === "14")
		return "E";
	else if (a === "15")
		return "F";
	else
	{
		rand = Math.floor(Math.random() * (15)) + "";
		if (rand.length == 1)
			return rand;
		else
			return toHex(rand);
	}
}

function checkInput(a)
{
	if (a === "1")
		return true;
	else if (a === "2")
		return true;
	else if (a === "3")
		return true;
	else if (a === "4")
		return true;
	else if (a === "5")
		return true;
	else if (a === "6")
		return true;
	else if (a === "7")
		return true;
	else if (a === "8")
		return true;
	else if (a === "9")
		return true;
	else if (a === "A")
		return true;
	else if (a === "B")
		return true;
	else if (a === "C")
		return true;
	else if (a === "D")
		return true;
	else if (a === "E")
		return true;
	else if (a === "F")
		return true;
	else
		return false;	
}

module.exports = router;
