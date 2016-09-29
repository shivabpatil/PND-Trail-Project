var bookedSlotController = function (BookedSlot) {
	
	var post = function (req,res) {
			var bookedSlot= new BookedSlot(req.body);
			bookedSlot.save();
			res.status(201).send(bookedSlot); 
		};

	var get = function (req,res) {
			// var query={};
			// if (req.query.pick_date || req.query.) {
			//  	query.name=req.query.name;
			//  } 
			
			BookedSlot.find(function (error,bookedSlots) {
				if (error) {
				 	res.status(500).send(error);
				 
				 } else {
				 	res.json(bookedSlots);
				 } 
			});
		}

	return{
		post:post,
		get:get
	};
}

module.exports = bookedSlotController