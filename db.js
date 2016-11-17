var mongoose = require('mongoose'),
URLSlugs = require('mongoose-url-slugs');

var User = new mongoose.Schema 
({ 
	username: String, 
	password: String, 
	patches: [{type: mongoose.Schema.Types.ObjectId, ref: 'Patch'}] 
)};

var Patch = new mongoose.Schema 
({ 
	volume = [], 
	transpose = [], 
	commandOne = [], 
	commandOneParams = [], 
	commandTwo = [], 
	commandTwoParams = [],
	name: String
)};

Patch.plugin(URLSlugs('name'));

mongoose.model('User', User);
mongoose.model('Patch', Patch);

mongoose.connect('mongodb://localhost/patches');
