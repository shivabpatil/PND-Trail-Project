
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
	
	
}


