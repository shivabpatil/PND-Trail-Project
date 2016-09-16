var express = require('express');

var routes = function (Bike) {
	var bikeRouter = express.Router();
	bikeRouter.route('/bikes')
		.post(function (req,res) {
			var bike = new Bike(req.body);
			bike.save();
			res.status(201).send(bike); 
		})
		.get(function (req,res) {
			console.log('inside get');
			Bike.find(function (error,bikes) {
				if (error) {
				 	res.status(500).send(error);
				 	console.log('inside get');
				 } else {
				 	res.json(bikes);
				 } 
			});
		});
		//middleware for bike 


	bikeRouter.route('/bikes/:bikeId')
		.get(function (req,res) {
			Bike.findById(req.params.bikeId,function (error,bike) {
				if (error) {
					res.status(500).send(error);
				} else {
					res.json(bike);
				}
			});
		})
		.put(function (req,res) {
			Bike.findById(req.params.bikeId,function (error,bike) {
				if (error) {
					res.status(500).send(error);
				} else {
					bike.brand = req.body.brand;
					bike.passing = req.body.passing;
					bike.bikenumber = req.body.bikenumber;
					bike.reading = req.body.reading;
					console.log(bike);
					bike.save();
					res.json(bike);
				}
			}); 
		});
	return bikeRouter;
}

module.exports = routes;