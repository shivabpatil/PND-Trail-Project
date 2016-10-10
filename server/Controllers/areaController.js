var areaController = function (Area) {
	
	var post = function (req,res) {
			var area = new Area(req.body);
			area.save();
			res.status(201).send(area); 
		};

	var get = function (req,res) {
			
			Area.find(function (error,areas) {
				if (error) {
				 	res.status(500).send(error);
				 
				 } else {
				 	res.json(areas);
				 } 
			});
		}

	return{
		post:post,
		get:get
	};
}

module.exports = areaController