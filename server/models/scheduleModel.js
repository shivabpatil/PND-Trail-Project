var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var scheduleModel = new Schema({
	pickup_address:{
		house:{
			type:String
		},
		society:{
			type:String		
		},
		street:{
			type:String
		},
		landmark:{
			type:String
		},
		area:{
			type:String,
			required:true
		},
		city:{
			type:String,
			required:true,	
		},
		state:{
			type:String,
			required:true,
		}
	},
	drop_address:{
		house:{
			type:String
		},
		society:{
			type:String		
		},
		street:{
			type:String
		},
		landmark:{
			type:String
		},
		area:{
			type:String,
			required:true
		},
		city:{
			type:String,
			required:true,	
		},
		state:{
			type:String,
			required:true,
		}
	},
	pickup_date:{
		type:Date,
		required:true
	},
	drop_date:{
		type:Date,
		required:true
	},
	pickup_time:{
		type:Date,
		required:true
	},
	drop_time:{
		type:Date,
		
	},
	_serviceCenterId:Schema.Types.ObjectId,
	_customerId:Schema.Types.ObjectId,
	_bikeId:Schema.Types.ObjectId,
	create_at:{
		type:Date,
		default: Date.now
	},
	updated_at:{
		type:Date
		
	},
});

module.exports = mongoose.model('Schedule',scheduleModel);
