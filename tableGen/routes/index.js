var express = require('express');
var router = express.Router();
require('../db.js');

var mongoose = require('mongoose');
var User = mongoose.model('User');
var Patch = mongoose.model('Patch');

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
	vol = [];
	
	var vol0 = (req.body.vol0);
	var vol1 = (req.body.vol1);
	var vol2 = (req.body.vol2);
	var vol3 = (req.body.vol3);
	var vol4 = (req.body.vol4);
	var vol5 = (req.body.vol5);
	var vol6 = (req.body.vol6);
	var vol7 = (req.body.vol7);
	var vol8 = (req.body.vol8);
	var vol9 = (req.body.vol9);
	var vol10 = (req.body.vol10);
	var vol11 = (req.body.vol11);
	var vol12 = (req.body.vol12);
	var vol13 = (req.body.vol13);
	var vol14 = (req.body.vol14);
	var vol15 = (req.body.vol15);
	
	vol.push(vol0);
	vol.push(vol1);
	vol.push(vol2);
	vol.push(vol3);
	vol.push(vol4);
	vol.push(vol5);
	vol.push(vol6);
	vol.push(vol7);
	vol.push(vol8);
	vol.push(vol9);
	vol.push(vol10);
	vol.push(vol11);
	vol.push(vol12);
	vol.push(vol13);
	vol.push(vol14);
	vol.push(vol15);
	
	var temp1 = '';
	var temp2 = '';
	
	for (var i = 0; i < vol.length; i++)
	{
		if (vol[i].length === 1 || vol[i].length === 0)
		{
			temp1 = toHex('');
			temp2 = toHex('');
			vol[i] = temp1 + temp2;
		}
		else
		{
			if (checkInput(vol[i][0]))
				temp1 = vol[i][0];
			else
				temp1 = toHex('');
			if (checkInput(vol[i][1]))
				temp2 = vol[i][1];
			else
				temp2 = toHex('');
			vol[i] = temp1 + temp2;
		}
	}
	
	new Patch
	({
		volume: vol,
		transpose : [], 
		commandOne : [], 
		commandOneParams : [], 
		commandTwo : [], 
		commandTwoParams : [],
		name: "empty"
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
	else if (a === "a")
		return true;
	else if (a === "b")
		return true;
	else if (a === "c")
		return true;
	else if (a === "d")
		return true;
	else if (a === "e")
		return true;
	else if (a === "f")
		return true;
	else
		return false;	
}

module.exports = router;
