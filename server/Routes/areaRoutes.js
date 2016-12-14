var express = require('express');

var routes = function (Area) {
	var areaRouter = express.Router();

	var areaController = require('../Controllers/areaController')(Area);
	areaRouter.route('/areas')
		.post(areaController.post)
		.get(areaController.get);


		//middleware for bike 
	areaRouter.use('/areas/:areaId',function (req,res,next) {

		Area.findById(req.params.areaId,function (error,area) {
			if (error) {
				res.status(500).send(error);
			} else if (area) {
				req.area = area;
				next();
			} else {
				res.status(400).send('area not found');
			}
		})
	})

	areaRouter.route('/areas/:areaId')
		.get(function (req,res) {
			res.json(req.area);
		})
		.put(function (req,res) {
			req.area.name = req.body.name;
			req.area.total_service_centers = req.body.total_service_centers;
			req.area.total_dpersons = req.body.total_dpersons;	
			for(var serviceCenter in req.body.service_centers)
				req.area.service_centers.push({
					name:req.body.service_centers[serviceCenter].name,
					brand:req.body.service_centers[serviceCenter].brand,
					email:req.body.service_centers[serviceCenter].email,
					contact:req.body.service_centers[serviceCenter].contact,
					address:req.body.service_centers[serviceCenter].address,
					capacity:req.body.service_centers[serviceCenter].capacity,
					start_time:req.body.service_centers[serviceCenter].start_time,
					end_time:req.body.service_centers[serviceCenter].end_time
				})
			req.area.total_service_centers = req.area.service_centers.length;

			for(var slot in req.body.slots)
				req.area.slots.push({
					slot_number:req.body.slots[slot].slot_number,
					slot_time:req.body.slots[slot].slot_time,
					slot_capacity:req.body.slots[slot].slot_capacity,		
				})
			req.area.save(function (error) {
				if (error) {
					res.status(500).send(error);
				} else {
					res.json(req.area);
				}
			});

		})
		.patch(function (req,res) {	
			if(req.body._id){
				delete req.body._id;
			}
			for(var p in req.body){
				req.area[p] = req.body[p];
			}

			req.area.save(function (error) {
				if (error) {
					res.status(500).send(error);
				} else {
					res.json(req.area);
				}
			});
		})
		.delete(function (req,res) {
			req.area.remove(function (error) {
				if (error) {
					res.status(500).send(error);		
				} else {
					res.status(204).send('Removed');
				}
			});
		})
		
	return areaRouter;
}

module.exports = routes;