

var express = require('express'),
	bodyParser = require('body-parser'),
	stylus = require('stylus'),
	cookieParser = require('cookie-parser'),
	session = require('express-session'),
	logger =require('morgan'),
	mongoose = require('mongoose'),
	path = require ('path'),
	passport = require('passport');
  require('./passport');

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

	app.use(express.static(path.join(config.rootPath + '/public')));
	app.use(passport.initialize());
}
