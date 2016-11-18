var mongoose = require('mongoose'),
URLSlugs = require('mongoose-url-slugs');

var User = new mongoose.Schema 
({ 
	username: String, 
	password: String, 
	patches: [{type: mongoose.Schema.Types.ObjectId, ref: 'Patch'}] 
});

var Patch = new mongoose.Schema 
({ 
	volume : [String],
	transpose : [String], 
	commandOne : [String], 
	commandOneParams : [String], 
	commandTwo : [String], 
	commandTwoParams : [String],
	name: String
});

Patch.plugin(URLSlugs('name'));

mongoose.model('User', User);
mongoose.model('Patch', Patch);

mongoose.connect('mongodb://localhost/patches');
