var express = require('express');

var routes = function (Servicecenter) {
	var servicecenterRouter = express.Router();
	var servicecenterController = require('../Controllers/servicecenterController')(Servicecenter);
	servicecenterRouter.route('/servicecenters')
		.post(servicecenterController.post)
		.get(servicecenterController.get);

	//middleware 

	servicecenterRouter.use('/servicecenters/:servicecenterId',function (req,res,next) {
		Servicecenter.findById(req.params.servicecenterId,function (error,servicecenter) {
			if (error) {
				res.satus(500).send(error);		
			} else if (servicecenter) {
				req.servicecenter = servicecenter;
				next();		
			} else {
				res.status(400).send('service center not found');
			}
		})
	});

	//get single service center

	servicecenterRouter.route('/servicecenters/:servicecenterId')
		.get(function (req,res) {
			res.json(req.servicecenter);
		})
		.put(function (req,res) {		
				req.servicecenter.name = req.body.name;
				req.servicecenter.brand = req.body.brand;
				req.servicecenter.email = req.body.email;
				req.servicecenter.contact = req.body.contact;
				req.servicecenter.address = req.body.address;
				req.servicecenter.area_group = req.body.area_group ;
				req.servicecenter.capacity = req.body.capacity;
				req.servicecenter.slotcapacity = req.body.slotcapacity;
				req.servicecenter.deliverypersons = req.body.deliverypersons;
				req.servicecenter.start_time = req.body.start_time;
				req.servicecenter.end_time = req.body.end_time;
				req.servicecenter._areaId = req.body._areaId;
				req.servicecenter._brandId = req.body._brandId;
				req.servicecenter.save(function (error) {
					if (error) {
						res.status(500).send(error);
					} else {
						res.json(req.servicecenter);
					}
				});	
			})
		.patch(function (req,res) {

			if(req.body._id){
				delete req.body._id;
			}

			for(var p in req.body){
				req.servicecenter[p] = req.body[p];
			}

			req.servicecenter.save(function (error) {
					if (error) {
						res.status(500).send(error);
					} else {
						res.json(req.servicecenter);
					}
				});
		})
		.delete(function (req,res) {
			req.servicecenter.remove(function (error) {
				if (error) {
					res.status(500).send(error);
				} else {
					res.status(204).send('Removed');
				}
			});
		});
		
	return servicecenterRouter;	
};

module.exports = routes;