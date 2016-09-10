var express = require('express');

var routes = function (Servicecenter) {
	var servicecenterRouter = express.Router();
	servicecenterRouter.route('/servicecenters')
		.post(function (req,res) {
			var servicecenter = new Servicecenter(req.body);
			servicecenter.save();
			res.status(201).send(servicecenter); 
		})
		.get(function (req,res) {
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
		})
		.put(function (req,res) {
			Servicecenter.findById(req.params.servicecenterId,function (error,servicecenter) {
				if (error) {
				 	res.status(500).send(error);
				 } else {
				 	servicecenter.name = req.body.name;
				 	servicecenter.brand = req.body.brand;
				 	servicecenter.email = req.body.email;
				 	servicecenter.contact = req.body.contact;
				 	servicecenter.address = req.body.address;
				 	servicecenter.location = req.body.location;
				 	servicecenter.capacity = req.body.capacity;
				 	servicecenter.slotcapacity = req.body.slotcapacity;
				 	servicecenter.deliverypersons = req.body.deliverypersons;
				 	servicecenter.save();
				 	res.json(servicecenter);

				 } 
			}); 
		});
	return servicecenterRouter;	
};

module.exports = routes;