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
					slot_number:slotNumber(req.body.slots[slot].slot_time),
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

		function slotNumber(val){
			var val1=0;
			console.log(val);
			switch(val){
				case '6-7':
							val1= 1;
							break;
				case '7-8':
							val1= 2;
							break;	
				case '8-9':
							val1= 3;
							break;
				case '9-10':
							val1= 4;
							break;	
				case '10-11':
							val1= 5;
							break;
				case '11-12':
							val1= 6;
							break;
				case '12-13':
							val1= 7;
							break;
				case '13-14':
							val1= 8;
							break;	
				case '14-15':
							val1= 9;
							break;
				case '15-16':
							val1= 10;
							break;
				case '16-17':
							val1= 11;
							break;
				case '17-18':
							val1= 12;
							break;
				case '18-19':
							val1= 13;
							break;
				case '19-20':
							val1= 14;
							break;
				case '20-21':
							val1= 15;
							break;
			}
			console.log(val1);
			return val1;
		}
		
	return areaRouter;
}

module.exports = routes;