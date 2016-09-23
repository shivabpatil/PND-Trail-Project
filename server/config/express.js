
var express = require('express'),
	bodyParser = require('body-parser'),
	stylus = require('stylus'),
	logger =require('morgan');

module.exports = function (app,config) {
	console.log('inside express');
	function compile(str,path) {
		return stylus(str).set('filename',path);
	}

	app.set('views',config.rootPath + '/server/views');
	app.set('view engine','jade');
	app.use(logger('dev'));
	app.use(bodyParser.urlencoded({ extended: true }));
	app.use(bodyParser.json());
	app.use(stylus.middleware({
			src: config.rootPath + '/public',
			compile:compile
		}
	));

	app.use(express.static(config.rootPath + '/public'));
	
	var Admin = require('../models/adminModel'); 
	var Servicecenter = require('../models/servicecenterModel');
	var Customer = require('../models/customerModel');
	var Bike = require('../models/bikeModel');
	var Rate = require('../models/rateModel');

	adminRouter = require('../Routes/adminRoutes')(Admin);
	servicecenterRouter = require('../Routes/servicecenterRoutes')(Servicecenter);
	customerRouter = require('../Routes/customerRoutes')(Customer);
	bikeRouter = require('../Routes/bikeRoutes')(Bike);
	rateRouter = require('../Routes/rateRoutes')(Rate);

	app.use('/api1',adminRouter);
	app.use('/api2',servicecenterRouter);
	app.use('/api3',customerRouter);
	app.use('/api4',bikeRouter);
	app.use('/api5',rateRouter);
}


