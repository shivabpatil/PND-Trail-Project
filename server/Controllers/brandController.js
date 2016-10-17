var brandController = function (Brand) {
	
	var post = function (req,res) {
			var brand = new Brand(req.body);
			brand.save();
			res.status(201).send(brand); 
		};

	var get = function (req,res) {
			
			Brand.find(function (error,brands) {
				if (error) {
				 	res.status(500).send(error);
				 
				 } else {
				 	res.json(brands);
				 } 
			});
		}

	return{
		post:post,
		get:get
	};
}

module.exports = brandController