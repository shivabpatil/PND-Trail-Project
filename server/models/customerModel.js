var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var customerModel = new Schema({
	name:{
		type:String,
	},
	lname:{
		type:String,
	},
	contact:{
		type:Number,
	},
	alternate_contact:{
		type:Number,
	},
	email:{
		type:String,
	},
	display_name:{
		type:String,
	},
	addresses:[{
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
	}],
	bikes:[{
		bike_passing:{
			type:String,
		},
		bike_number:{
			type:String,
		},
		bike_default:{
			type:String
		}
	}],
	create_at:{
		type:Date,
		default: Date.now
	},
	updated_at:{
		type:Date
	}
});

module.exports = mongoose.model('Customer',customerModel);
