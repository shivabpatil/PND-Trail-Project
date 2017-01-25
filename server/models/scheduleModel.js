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
	dperson_name:{
		type:String
	},
	dpaerson_contact:{
		type:Number
	},
	pickup_address:{
		line1:{
			type:String,
		},
		city:{
			type:String,
		},
		loc:{
			loc_type:{
				type:String,
			},
			coordinates:[{type:Number}],
		},
		state:{
			type:String,
		},
		address_type:{
			type:String,
		},
		address_default:{
			type:String,
		}
	},
	drop_address:{
		line1:{
			type:String,
		},
		city:{
			type:String,
		},
		loc:{
			loc_type:{
				type:String,
			},
			coordinates:[{type:Number}],
		},
		state:{
			type:String,
		},
		address_type:{
			type:String,
		},
		address_default:{
			type:String,
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
	status:{
		type:String

	},
	pickup_time:{
		type:String,
		required:true
	},
	drop_time:{
		type:String,

	},
  service_center_name:{
			type:String,
		},
	_serviceCenterId:Schema.Types.ObjectId,
  _areaId:Schema.Types.ObjectId,
	create_at:{
		type:Date,
		default: Date.now
	},
	updated_at:{
		type:Date

	},
});

module.exports = mongoose.model('Schedule',scheduleModel);
