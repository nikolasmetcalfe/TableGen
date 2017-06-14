# Table Generator

Overview

LSDJ (http://www.littlesounddj.com/lsd/) is a software tracker (https://en.wikipedia.org/wiki/Music_tracker) written 
for the Gameboy to create 8-bit music. 
Of the four tracks used to generate sound in LSDJ, two of these are pulse tracks, often 
used for lead lines in LSDJ compositions. 
For musicians in need of adding depth to a lead, an automated LSDJ table can be a useful tool. 
Set to automate, an LSDJ table will warp the sonic characteristis of a pulse every time a new note is triggered.
This web application will allow users to generate pulse tables with randomized values for use on LSDJ pulse tracks,
either as final patches or as jumping off points for sound shaping ideas.
Users of the application can save patches and retrieve the patches saved to their user profile during prior sessions.


Data Model

// At minimum users will need to provide a username and password
// in order to retrieve patches saved to a profile
var User = new mongoose.Schema
({
	username: String,
	password: String,
	patches:  [{ type: mongoose.Schema.Types.ObjectId, ref: 'Patch' }]
)};

// At minimum I will need store an array of values corresponding
// to each column in an LSDJ table (all of size 16)
var Patch = new mongoose.Schema
({
	volume = [],
	transpose = [],
	commandOne = [],
	commandOneParams = [],
	commandTwo = [],
	commandTwoParams = []
)};

Wireframe

/generate-- Main app page where columns can be automated or users can enter input
![Home](/documentation/Generate.jpg?raw=true "Table Generation Page")

/patches-- List of all tables saved by a given profile
![Patch](/documentation/Patches.jpg?raw=true "User Patches Page")

/login-- Allows users to save patches for a given profile name
![Login](/documentation/Login.jpg?raw=true "Login Page")

Sitemap

![Map](/documentation/SiteMap.jpg?raw=true "Site Map")

User Stories
1. As a user, I can create an entirely random table from the generation page
2. As a user, I can save that table to my profile
3. As a user, I can view all tables saved under my username at /patches
