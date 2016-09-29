var slotController = function (Slot) {
	
	var post = function (req,res) {
			var slot= new Slot(req.body);
			slot.save();
			res.status(201).send(slot); 
		};

	var get = function (req,res) {
			var query={};
			console.log(req.query);


			if (req.query) {
				
			 	query = req.query;
			 	console.log(query);
			 } 
			
			Slot.find(query,function (error,slots) {
				if (error) {
				 	res.status(500).send(error);
				 
				 } else {
				 	res.json(slots);
				 } 
			});
		}

	return{
		post:post,
		get:get
	};
}

module.exports = slotController