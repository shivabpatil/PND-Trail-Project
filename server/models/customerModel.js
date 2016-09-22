var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var customerModel = new Schema({
	name:{
		type:String,
		match:/^[a-zA-Z ]{2,50}$/,
		required:true
	},
	lname:{
		type:String,
		match:/^[a-zA-Z ]{2,50}$/i
	},
	contact:{
		type:Number,
		required:true
	},
	email:{
		type:String,
		match: /.+@.+\..+/,
	},
	_serviceCenterId:Schema.Types.ObjectId,
	address:{
		house:{
			type:String,
			match:/^[a-zA-Z0-9\s,'-]*$/,
			required:true
		},
		society:{
			type:String,
			match:/^[a-zA-Z0-9\s,'-]*$/i	
		},
		street:{
			type:String,
			match:/^[a-zA-Z0-9\s,'-]*$/i
		},
		landmark:{
			type:String,
			match:/^[a-zA-Z0-9\s,'-]*$/i
		},
		area:{
			type:String,
			match:/^[a-zA-Z0-9\s,'-]*$/,
			required:true
		},
		city:{
			type:String,
			match:/^[a-zA-Z0-9\s,'-]*$/,
			required:true,
			default:"Pune"
		},
		state:{
			type:String,
			match:/^[a-zA-Z0-9\s,'-]*$/,
			required:true,
			default:"Maharashtra"
		}
	},
	create_at:{
		type:Date
	},
	updated_at:{
		type:Date,
		default: Date.now
	},
});

module.exports = mongoose.model('Customer',customerModel);
