# Sound Design Portfolio

Overview

I have an enormous love for DIY audio projects. The problem that I've run into showcasing work
is that the span of what I'm displaying is too wide to make sense in a traditional blog format.
Instead, I'd like to create a personal page that hosts Pure Data and Supercollider patches
that I've utilized in making noisy tunes. Users can log in to access patch downloads and 
opt to receive updates when a new music-making tool is posted.


Data Model

// At minimum users will need to provide a username and password
// for authentication, and an email for freeware updates
var User = new mongoose.Schema
({
	username: String,
	password: String,
	email: String,
	onList: Number
)};

// At minimum I will need store links to repo's containing PD
// or Supercollider code (would like to make this an on-click download of binaries)
var Patch = new mongoose.Schema
({
	title: String,
	url: String,
	imageUrl: String
)};

Wireframe

/home-- Has an about section, links to login and hosts patches
![Home](/documentation/Home.jpg?raw=true "Home Page")

/home/slug-- Description of patch, DL link, image of patch in use
![Patch](/documentation/Slug.jpg?raw=true "Patch Page")

/login-- Links to registration, authenticates user
![Login](/documentation/Login.jpg?raw=true "Login Page")

/register-- Stores a user's info for future sessions
![Register](/documentation/Register.jpg?raw=true "Register Page")

Sitemap

![Map](/documentation/SiteMap.jpg?raw=true "Site Map")

User Stories
1. As a user, I can view all patches in database
2. As a user, I can register to receive updates about new patches
3. As a user, I can download patches once logged in

Research Topics
(6 Points)-- Use passport.js for user authentication in order to ensure updates are sent to authentic users
(2 Points)-- Use bootstrap CSS in order to make patch specific pages both clean and standardized
