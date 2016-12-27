var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var receiptModel = new Schema({
	name:{
		type:String,
		required:true
	},
	lname:{
		type:String,
	},
	contact:{
		type:Number,

	},
	brand:{
		type:String
	},
	service_center_name:{
		type:String
	},
	passing:{
		type:String,
		
	},
	bikenumber:{
		type:String,

	},
	chassis_number:{
		type:String,

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
