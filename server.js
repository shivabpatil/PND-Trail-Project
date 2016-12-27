var mongoose = require('mongoose'),
	express = require('express'),
	passport = require('passport'),
	LocalStrategy = require('passport-local').Strategy; //passport has differernt strategies.stragtegies how passport does login

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
//databse connection

var db = mongoose.connection;

var app = express();

var config = require('./server/config/config')[env];

require('./server/config/express')(app,config);
require('./server/config/mongoose')(config);
//
require('./server/config/routes')(app, passport);

app.listen(config.port,function (err) {
	if (err) throw err;
	console.log('Server is running on port ',+config.port);
});
