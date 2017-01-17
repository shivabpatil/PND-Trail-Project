var mongoose = require('mongoose'),
	express = require('express');


//set up the default environment as development
var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

//databse connection
var db = mongoose.connection;

//initalize express module
var app = express();

//setup config using config.js
var config = require('./server/config/config')[env];

require('./server/config/express')(app,config);
mongoose.Promise = global.Promise;
require('./server/config/mongoose')(config);
//
require('./server/config/routes')(app);


app.listen(config.port,function (err) {
	if (err) throw err;
	console.log('Server is running on port ',+config.port);
});
