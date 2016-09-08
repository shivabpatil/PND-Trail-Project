var mongoose = require('mongoose');

//databse connection 
var db = mongoose.connect('mongodb://localhost:27017/pnddata');

// get all models 
var Admin = require('./models/adminModel'); 
var Servicecenter = require('./models/servicecenterModel');
var Customer = require('./models/customerModel');
var Bike = require('./models/bikeModel');

var express = require('express');

var app = express();

var port = process.env.PORT | 4000;

//declare routers for colections 
var adminRouter = express.Router();
var servicecenterRouter = express.Router();
var customerRouter = express.Router();
var bikeRouter = express.Router();

//set up routers in api 
app.use('/api',adminRouter);
app.use('/api',servicecenterRouter);
app.use('/api',customerRouter);
app.use('/api',bikeRouter);

//admin aoi routes 

adminRouter.route('/admins').get(function (req,res) {
	Admin.find(function (error,admins) {
		if (error) {
			res.status(500).send(error);
		} else {
			res.json(admins);
		}
	});
});

//service center api routes
servicecenterRouter.route('/servicecenters').get(function (req,res) {
	Servicecenter.find(function (error,servicecenters) {
		if (error) {
		 	res.status(500).send(error);
		 } else {
		 	res.json(servicecenters);
		 } 
	})
})

//customer api routes 
customerRouter.route('/customers').get(function (req,res) {
	Customer.find(function (error,customers) {
		if (error) {
		 	res.staus(500).send(error);
		 } else {
		 	res.json(customers);
		 } 
	})
});

//bike api routes

bikeRouter.route('/bikes').get(function (req,res) {
	Bike.find(function (error,bikes) {
		if (error) {
		 	res.status(500).send(error);
		 } else {
		 	res.json(bikes);
		 } 
	});
});


app.get('/',function (req,res) {
	res.send('welcome to api'); 
});

app.listen(port,function () {
	console.log('Gulp is running on port',+port);
});