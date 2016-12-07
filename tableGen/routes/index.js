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
		console.log(result);
		res.render('patches', {result: result});
	});
});
router.post('/generate', function(req, res, next)
{	
	var validCmds = ["C", "E", "c", "K", "k", "L", "l", "M", "m", "P", "p", "R", "r", "S", "s", "V", "v", "H", "h"];
	
	var vol = [];
	var tsp = [];
	var cmd = [];
	var prams = [];
	var cmdTwo = [];
	var pramsTwo= [];
	
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
	
	var prams0 = (req.body.prams0);
	var prams1 = (req.body.prams1);
	var prams2 = (req.body.prams2);
	var prams3 = (req.body.prams3);
	var prams4 = (req.body.prams4);
	var prams5 = (req.body.prams5);
	var prams6 = (req.body.prams6);
	var prams7 = (req.body.prams7);
	var prams8 = (req.body.prams8);
	var prams9 = (req.body.prams9);
	var prams10 = (req.body.prams10);
	var prams11 = (req.body.prams11);
	var prams12 = (req.body.prams12);
	var prams13 = (req.body.prams13);
	var prams14 = (req.body.prams14);
	var prams15 = (req.body.prams15);
	
	prams.push(prams0);
	prams.push(prams1);
	prams.push(prams2);
	prams.push(prams3);
	prams.push(prams4);
	prams.push(prams5);
	prams.push(prams6);
	prams.push(prams7);
	prams.push(prams8);
	prams.push(prams9);
	prams.push(prams10);
	prams.push(prams11);
	prams.push(prams12);
	prams.push(prams13);
	prams.push(prams14);
	prams.push(prams15);
	
	var cmdTwo0 = (req.body.cmdTwo0);
	var cmdTwo1 = (req.body.cmdTwo1);
	var cmdTwo2 = (req.body.cmdTwo2);
	var cmdTwo3 = (req.body.cmdTwo3);
	var cmdTwo4 = (req.body.cmdTwo4);
	var cmdTwo5 = (req.body.cmdTwo5);
	var cmdTwo6 = (req.body.cmdTwo6);
	var cmdTwo7 = (req.body.cmdTwo7);
	var cmdTwo8 = (req.body.cmdTwo8);
	var cmdTwo9 = (req.body.cmdTwo9);
	var cmdTwo10 = (req.body.cmdTwo10);
	var cmdTwo11 = (req.body.cmdTwo11);
	var cmdTwo12 = (req.body.cmdTwo12);
	var cmdTwo13 = (req.body.cmdTwo13);
	var cmdTwo14 = (req.body.cmdTwo14);
	var cmdTwo15 = (req.body.cmdTwo15);
	
	cmdTwo.push(cmdTwo0);
	cmdTwo.push(cmdTwo1);
	cmdTwo.push(cmdTwo2);
	cmdTwo.push(cmdTwo3);
	cmdTwo.push(cmdTwo4);
	cmdTwo.push(cmdTwo5);
	cmdTwo.push(cmdTwo6);
	cmdTwo.push(cmdTwo7);
	cmdTwo.push(cmdTwo8);
	cmdTwo.push(cmdTwo9);
	cmdTwo.push(cmdTwo10);
	cmdTwo.push(cmdTwo11);
	cmdTwo.push(cmdTwo12);
	cmdTwo.push(cmdTwo13);
	cmdTwo.push(cmdTwo14);
	cmdTwo.push(cmdTwo15);
	
	var pramsTwo0 = (req.body.pramsTwo0);
	var pramsTwo1 = (req.body.pramsTwo1);
	var pramsTwo2 = (req.body.pramsTwo2);
	var pramsTwo3 = (req.body.pramsTwo3);
	var pramsTwo4 = (req.body.pramsTwo4);
	var pramsTwo5 = (req.body.pramsTwo5);
	var pramsTwo6 = (req.body.pramsTwo6);
	var pramsTwo7 = (req.body.pramsTwo7);
	var pramsTwo8 = (req.body.pramsTwo8);
	var pramsTwo9 = (req.body.pramsTwo9);
	var pramsTwo10 = (req.body.pramsTwo10);
	var pramsTwo11 = (req.body.pramsTwo11);
	var pramsTwo12 = (req.body.pramsTwo12);
	var pramsTwo13 = (req.body.pramsTwo13);
	var pramsTwo14 = (req.body.pramsTwo14);
	var pramsTwo15 = (req.body.pramsTwo15);
	
	pramsTwo.push(pramsTwo0);
	pramsTwo.push(pramsTwo1);
	pramsTwo.push(pramsTwo2);
	pramsTwo.push(pramsTwo3);
	pramsTwo.push(pramsTwo4);
	pramsTwo.push(pramsTwo5);
	pramsTwo.push(pramsTwo6);
	pramsTwo.push(pramsTwo7);
	pramsTwo.push(pramsTwo8);
	pramsTwo.push(pramsTwo9);
	pramsTwo.push(pramsTwo10);
	pramsTwo.push(pramsTwo11);
	pramsTwo.push(pramsTwo12);
	pramsTwo.push(pramsTwo13);
	pramsTwo.push(pramsTwo14);
	pramsTwo.push(pramsTwo15);
	
	var temp1 = '';
	var temp2 = '';
	
	vol = vol.map(function verifyPrams(a) //Higher Order Function 1
	{
		if (a.length === 1 || a === 0)
		{
			var temp1 = toHex('');
			var temp2 = toHex('');
			a = temp1 + temp2;
			return a;
		}
		else
		{
			if (checkInput(a[0]))
				temp1 = a[0];
			else
				temp1 = toHex('');
			if (checkInput(a[1]))
				temp2 = a[1];
			else
				temp2 = toHex('');
			a = temp1 + temp2;
			return a;
		}
	});
	
	/*
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
	*/
	
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
			cmd[i] = cmd[i].toUpperCase();
		}
		else
		{
			cmd[i] = " -- ";
		}
	}
	
	for (var i = 0; i < cmdTwo.length; i++)
	{
		if (cmdTwo[i].length === 1)
		{
			if (!checkCommand(cmdTwo[i]))
			{
				cmdTwo[i] = Math.floor(Math.random() * validCmds.length);
			}
			cmdTwo[i] = cmdTwo[i].toUpperCase();
		}
		else
		{
			cmdTwo[i] = " -- ";
		}
	}
	
	for (var i = 0; i < prams.length; i++)
	{
		if (cmd[i] === " -- ")
		{
			prams[i] = "00";
			continue;
		}
		if (prams[i].length === 1 || prams[i].length === 0)
		{
			temp1 = toHex('');
			temp2 = toHex('');
			prams[i] = temp1 + temp2;
		}
		else
		{
			if (checkInput(prams[i][0]))
				temp1 = prams[i][0];
			else
				temp1 = toHex('');
			if (checkInput(prams[i][1]))
				temp2 = prams[i][1];
			else
				temp2 = toHex('');
			prams[i] = temp1 + temp2;
		}
	}
	
	for (var i = 0; i < pramsTwo.length; i++)
	{
		if (cmdTwo[i] === " -- ")
		{
			pramsTwo[i] = "00";
			continue;
		}
		if (pramsTwo[i].length === 1 || pramsTwo[i].length === 0)
		{
			temp1 = toHex('');
			temp2 = toHex('');
			pramsTwo[i] = temp1 + temp2;
		}
		else
		{
			if (checkInput(pramsTwo[i][0]))
				temp1 = pramsTwo[i][0];
			else
				temp1 = toHex('');
			if (checkInput(pramsTwo[i][1]))
				temp2 = pramsTwo[i][1];
			else
				temp2 = toHex('');
			pramsTwo[i] = temp1 + temp2;
		}
	}
	
	var patchName = req.body.patchName + "";
	
	var iDee = Math.floor(Math.random() * 1000000000);
	
	new Patch
	({
		volume: vol,
		transpose : tsp,
		commandOne : cmd, 
		commandOneParams : prams, 
		commandTwo : cmdTwo, 
		commandTwoParams : pramsTwo,
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
