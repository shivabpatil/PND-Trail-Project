var bikeController = function (Bike) {
	
	var post = function (req,res) {
			var bike = new Bike(req.body);
			bike.save();
			res.status(201).send(bike); 
		};

	var get = function (req,res) {
			
			Bike.find(function (error,bikes) {
				if (error) {
				 	res.status(500).send(error);
				 
				 } else {
				 	res.json(bikes);
				 } 
			});
		}

	return{
		post:post,
		get:get
	};
}

module.exports = bikeController