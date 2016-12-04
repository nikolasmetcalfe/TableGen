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

router.get('/clearAll', function(req, res, next)
{
	Patch.remove({}, function(err, result, count)
	{ 
		res.render('patches', {result: result});
	});
});

router.get('/generate', function(req, res, next)
{
	res.render('generate');
});

router.get('/patches', function(req, res, next) 
{	
	Patch.find({}, function(err, result, count) 
	{
		res.render('patches', {result: result});
	});
});
router.post('/generate', function(req, res, next)
{	
	var validCmds = ["C", "E", "c", "K", "k", "L", "l", "M", "m", "P", "p", "R", "r", "S", "s", "V", "v", "H", "h"];
	
	var vol = [];
	var tsp = [];
	var cmd = [];
	
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
	
	var tsp0 = (req.body.tsp0);
	var tsp1 = (req.body.tsp1);
	var tsp2 = (req.body.tsp2);
	var tsp3 = (req.body.tsp3);
	var tsp4 = (req.body.tsp4);
	var tsp5 = (req.body.tsp5);
	var tsp6 = (req.body.tsp6);
	var tsp7 = (req.body.tsp7);
	var tsp8 = (req.body.tsp8);
	var tsp9 = (req.body.tsp9);
	var tsp10 = (req.body.tsp10);
	var tsp11 = (req.body.tsp11);
	var tsp12 = (req.body.tsp12);
	var tsp13 = (req.body.tsp13);
	var tsp14 = (req.body.tsp14);
	var tsp15 = (req.body.tsp15);
	
	tsp.push(tsp0);
	tsp.push(tsp1);
	tsp.push(tsp2);
	tsp.push(tsp3);
	tsp.push(tsp4);
	tsp.push(tsp5);
	tsp.push(tsp6);
	tsp.push(tsp7);
	tsp.push(tsp8);
	tsp.push(tsp9);
	tsp.push(tsp10);
	tsp.push(tsp11);
	tsp.push(tsp12);
	tsp.push(tsp13);
	tsp.push(tsp14);
	tsp.push(tsp15);
	
	var cmd0 = (req.body.cmd0);
	var cmd1 = (req.body.cmd1);
	var cmd2 = (req.body.cmd2);
	var cmd3 = (req.body.cmd3);
	var cmd4 = (req.body.cmd4);
	var cmd5 = (req.body.cmd5);
	var cmd6 = (req.body.cmd6);
	var cmd7 = (req.body.cmd7);
	var cmd8 = (req.body.cmd8);
	var cmd9 = (req.body.cmd9);
	var cmd10 = (req.body.cmd10);
	var cmd11 = (req.body.cmd11);
	var cmd12 = (req.body.cmd12);
	var cmd13 = (req.body.cmd13);
	var cmd14 = (req.body.cmd14);
	var cmd15 = (req.body.cmd15);
	
	cmd.push(cmd0);
	cmd.push(cmd1);
	cmd.push(cmd2);
	cmd.push(cmd3);
	cmd.push(cmd4);
	cmd.push(cmd5);
	cmd.push(cmd6);
	cmd.push(cmd7);
	cmd.push(cmd8);
	cmd.push(cmd9);
	cmd.push(cmd10);
	cmd.push(cmd11);
	cmd.push(cmd12);
	cmd.push(cmd13);
	cmd.push(cmd14);
	cmd.push(cmd15);
	
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
	
	for (var i = 0; i < tsp.length; i++)
	{
		if (tsp[i].length === 1 || tsp[i].length === 0)
		{
			temp1 = "0";
			temp2 = "0";
			tsp[i] = temp1 + temp2;
		}
		else
		{
			if (checkInput(tsp[i][0]))
				temp1 = tsp[i][0];
			else
				temp1 = toHex('');
			if (checkInput(tsp[i][1]))
				temp2 = tsp[i][1];
			else
				temp2 = toHex('');
			tsp[i] = temp1 + temp2;
		}
	}
	
	for (var i = 0; i < cmd.length; i++)
	{
		if (cmd[i].length === 1)
		{
			if (!checkCommand(cmd[i]))
			{
				cmd[i] = Math.floor(Math.random() * validCmds.length);
			}
		}
		else
		{
			cmd[i] = " -- ";
		}
	}
	
	var patchName = req.body.patchName + "";
	
	for (var i = 0; i < tsp.length; i++)
		console.log(tsp[i]);
	
	new Patch
	({
		volume: vol,
		transpose : tsp,
		commandOne : cmd, 
		commandOneParams : [], 
		commandTwo : [], 
		commandTwoParams : [],
		name: patchName,
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

function checkCommand(a)
{
	if (a === "C") 
		return true;
	else if (a === "E")
		return true;
	else if (a === "c")
		return true;
	else if (a === "e")
		return true;
	else if (a === "K")
		return true;
	else if (a === "k")
		return true;
	else if (a === "L")
		return true;
	else if (a === "l")
		return true;
	else if (a === "M")
		return true;
	else if (a === "m")
		return true;
	else if (a === "P")
		return true;
	else if (a === "p")
		return true;
	else if (a === "R")
		return true;
	else if (a === "r")
		return true;
	else if (a === "S")
		return true;
	else if (a === "s")
		return true;
	else if (a === "V")
		return true;
	else if (a === "v")
		return true;
	else if (a === "H")
		return true;
	else if (a === "h")
		return true;
	else
		return false;
}

module.exports = router;
