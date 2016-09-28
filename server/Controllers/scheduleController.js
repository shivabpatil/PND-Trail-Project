var scheduleController = function(Schedule) {
	var get = function (req,res) {

			//query with contact number 
			// var query={};
			// if (req.query.contact) {
			// 	query.contact=req.query.contact;
			// }

			//return all customers 
			Schedule.find(function (error,schedules) {
				if (error) {
				 	res.staus(500).send(error);
				 } else {
				 	res.json(schedules);
				 } 
			})
		};

	var post = function (req,res) {
			var schedule = new Schedule(req.body);
			schedule.save();
			res.status(201).send(schedule); 
		};

	return{
		get:get,
		post:post
	};
};

module.exports = scheduleController; 