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

// is the environment variable, NODE_ENV, set to PRODUCTION? 
if (process.env.NODE_ENV == 'PRODUCTION') {
 // if we're in PRODUCTION mode, then read the configration from a file
 // use blocking file io to do this...
 var fs = require('fs');
 var path = require('path');
 var fn = path.join(__dirname, 'config.json');
 var data = fs.readFileSync(fn);

 // our configuration file will be in json, so parse it and set the
 // conenction string appropriately!
 var conf = JSON.parse(data);
 var dbconf = conf.dbconf;
} else {
 // if we're not in PRODUCTION mode, then use
 dbconf = 'mongodb://localhost/patches';
}

mongoose.connect(dbconf);
