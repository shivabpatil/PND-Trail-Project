//add all configurations here. already added few here.


var express = require('express'),
	bodyParser = require('body-parser'),
	stylus = require('stylus'),
	cookieParser = require('cookie-parser'),
	session = require('express-session'),
	passport = require('passport'),
	logger =require('morgan'),
	mongoose = require('mongoose'),
	flash = require('express-flash'),
	path = require ('path'),
	MongoStore = require('connect-mongo/es5')(session);


module.exports = function (app,config) {
	console.log('inside express');
	function compile(str,path) {
		return stylus(str).set('filename',path);
	}
	//console.log(passport.authenticate('local'));
	app.set('views',config.rootPath + '/server/views');
	app.set('view engine','jade');
	app.use(logger('dev'));
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: true }));
	app.use(cookieParser());
	app.use(stylus.middleware({
			src: config.rootPath + '/public',
			compile:compile
		}
	));

	app.use(function(req, res, next) {
	  res.locals.user = req.user;
	  next();
	});
	app.use(express.static(path.join(config.rootPath + '/public')));



}
