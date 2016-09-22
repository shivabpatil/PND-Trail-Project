var rateController = function (Rate) {
	var post = function(req,res){
		var rate = new Rate(req.body);
		console.log(req.body)
		rate.save();
		res.status(201).send(rate);
	};

	var get = function(req,res){
			console.log('inside get');
			var query = {};
			if (req.query.area) {
				query.area = req.query.area;
			} 
			Rate.find(query,function (error,rates) {
				console.log(req);
				if (error) {
					console.log(req);
					res.status(500).send(error);
				} else {
					res.json(rates);
				}
		});
	};

	return {
		get:get,
		post:post,
	};
};

module.exports = rateController;