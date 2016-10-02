var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var scheduleModel = new Schema({

	customer_name:{
		type:String,
		required:true
	},
	customer_contact:{
		type:Number,
		required:true
	},
	customer_alternate_contact:{
		type:Number
	},
	bike_passing:{
		type:String,
		required:true
	},
	bike_number:{
		type:String,
		required:true
	},
	pickup_address:{
		line1:{
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
		line1:{
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
		type:String,
		required:true
	},
	drop_time:{
		type:String,
		
	},
	_serviceCenterId:Schema.Types.ObjectId,
	
	create_at:{
		type:Date,
		default: Date.now
	},
	updated_at:{
		type:Date
		
	},
});

module.exports = mongoose.model('Schedule',scheduleModel);
