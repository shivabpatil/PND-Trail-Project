var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var receiptModel = new Schema({
	name:{
		type:String,
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
	brand:{
		type:String
	},
	service_center_name:{
		type:String
	},
	passing:{
		type:String,
		required:true
	},
	bikenumber:{
		type:String,
		required:true
	},
	chassis_number:{
		type:String,
		required:true
	},
	receipt_number:{
		type:String
	},
	create_at:{
		type:Date,
		default: Date.now
	},
	updated_at:{
		type:Date
		
	},
});

module.exports = mongoose.model('Receipt',receiptModel);
