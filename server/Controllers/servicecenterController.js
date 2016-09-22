var servicecenterController = function (Servicecenter) {
	
	var post = function (req,res) {
			console.log(req.body);
			var servicecenter = new Servicecenter(req.body);
			servicecenter.save();
			res.status(200).send(servicecenter); 
		};
	var get = function (req,res) {
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
				 	console.log(servicecenters);
				 } 
			})
		};

	return{
		get:get,
		post:post
	};
};

module.exports = servicecenterController;