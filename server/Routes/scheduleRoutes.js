var express = require('express');

var routes = function (Schedule) {
	var scheduleRouter = express.Router();
	var scheduleController = require('../Controllers/scheduleController')(Schedule);
	 
	scheduleRouter.route('/schedules')
		.post(scheduleController.post)
		.get(scheduleController.get);

	//Schedule middleware

	scheduleRouter.use('/schedules/:scheduleId',function (req,res,next) {
		Schedule.findById(req.params.scheduleId,function (error,schedule) {
			if (error) {
				res.status(500).send(error);
			} else if (schedule) {
				req.schedule = schedule;
				console.log(req.schedule);
				next();
			} else {
				res.status(400).send('schedule not found');
			}
		});
	});
	// //get single schedule 
	scheduleRouter.route('/schedules/:scheduleId')
		.get(function (req,res) {		
				res.json(req.schedule);		
			})
		.put(function (req,res) {
				req.schedule.customer_name = req.body.customer_name;
				req.schedule.customer_contact= req.body.customer_contact;
				req.schedule.customer_alternate_contact = req.body.customer_alternate_contact;
				req.schedule.bike_passing = req.body.bike_passing;
				req.schedule.bike_number = req.body.bike_number;
				req.schedule.dperson_name = req.body.dperson_name;
				req.schedule.dpaerson_contact = req.body.dpaerson_contact;
				req.schedule.pickup_address = req.body.pickup_address;
				req.schedule.drop_address = req.body.drop_address;
				req.schedule.pickup_date = req.body.pickup_date;
				req.schedule.drop_date = req.body.drop_date;
				req.schedule.status = req.body.status;
				req.schedule.pickup_time = req.body.pickup_time;
				req.schedule.drop_time = req.body.drop_time;
				req.schedule._serviceCenterId = req.body._serviceCenterId;
				req.schedule.save(function (error) {
					if (error) {
						res.status(500).send(error);
					} else {
						res.json(req.schedule);
					};
				});
			})
		.patch(function (req,res) {
			if(req.body._id){
				delete req.body._id;
			}
			for(var p in req.body){
				req.schedule[p] = req.body[p];
			}
			req.schedule.save(function (error) {
				if (error) {
					res.status(500).send(error);		
				} else {
					res.json(req.schedule);
				}
			});
		})
		.delete(function (req,res) {
			req.schedule.remove(function (error) {
				if (error) {
					res.status(500).send(error);
				} else {
					res.status(204).send('Removed');
				}
			});
		})
	return scheduleRouter; 
};

module.exports = routes;