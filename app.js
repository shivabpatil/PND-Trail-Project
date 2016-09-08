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

	//query with name
	var query={};
	if (req.query.name) {
	 	query.name=req.query.name;
	 } 

	//return  all admins
	Admin.find(query,function (error,admins) {
		if (error) {
			res.status(500).send(error);
		} else {
			res.json(admins);
		}
	});
});

// get single admin 
adminRouter.route('/admins/:adminId').get(function (req,res) {
	Admin.findById(req.params.adminId,function (error,admin) {
		if (error) {
		 	res.status(500).send(error);
		 } else {
		 	res.json(admin);
		 } 
	});
});

//service center api routes
servicecenterRouter.route('/servicecenters').get(function (req,res) {
	// query wiht name 
	var query={}
	if (req.query.name) {
		query.name=req.query.name;
	}

	//return all service center
	Servicecenter.find(query,function (error,servicecenters) {
		if (error) {
		 	res.status(500).send(error);
		 } else {
		 	res.json(servicecenters);
		 } 
	})
})

//get single service center

servicecenterRouter.route('/servicecenters/:servicecenterId')
	.get(function (req,res) {
		Servicecenter.findById(req.params.servicecenterId,function (error,servicecenter) {
			if (error) {
				res.status(500).send(error);
			} else {
				res.json(servicecenter);
			}
		})
	});

//customer api routes 
customerRouter.route('/customers').get(function (req,res) {

	//query with contact number 
	var query={};
	if (req.query.contact) {
		query.contact=req.query.contact;
	}

	//return all customers 
	Customer.find(query,function (error,customers) {
		if (error) {
		 	res.staus(500).send(error);
		 } else {
		 	res.json(customers);
		 } 
	})
});

//get single customer 
customerRouter.route('/customers/:customerId')
	.get(function (req,res) {
		Customer.findById(req.params.customerId,function (error,customer) {
			if (error) {
				res.status(500).send(error);
			} else {
				res.json(customer);
			}
		})
	});

//bike api routes

bikeRouter.route('/bikes').get(function (req,res) {
	// return all bikes
	Bike.find(function (error,bikes) {
		if (error) {
		 	res.status(500).send(error);
		 } else {
		 	res.json(bikes);
		 } 
	});
});

bikeRouter.route('/bikes/:bikeId')
	.get(function (req,res) {
		Bike.findById(req.params.bikeId,function (error,bike) {
			if (error) {
				res.status(500).send(error);
			} else {
				res.json(bike);
			}
		})
	});


app.get('/',function (req,res) {
	res.send('welcome to api'); 
});

app.listen(port,function () {
	console.log('Gulp is running on port',+port);
});