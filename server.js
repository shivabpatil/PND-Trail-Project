var mongoose = require('mongoose'),
	express = require('express');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
//databse connection 

var db = mongoose.connection;

var app = express();

var config = require('./server/config/config')[env];

require('./server/config/express')(app,config);
mongoose.Promise = global.Promise;
mongoose.connect(config.db );

require('./server/config/routes')(app);

app.listen(config.port,function () {
	console.log('Server is running on port',+config.port);
});