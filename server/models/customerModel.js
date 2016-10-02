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
	alternate_contact:{
		type:Number,
		
	},
	email:{
		type:String,
		match: /.+@.+\..+/,
	},
	_serviceCenterId:Schema.Types.ObjectId,
	address:{
		line1:{
			type:String,
			match:/^[a-zA-Z0-9\s,'-]*$/,
			
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
		type:Date,
		default: Date.now
	},
	updated_at:{
		type:Date
		
	},
});

module.exports = mongoose.model('Customer',customerModel);
