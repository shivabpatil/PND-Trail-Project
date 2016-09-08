var mongoose = require('mongoose');

var bikeSchema = {
	brand:{
		type:String,
		required:true
	},
	passing:{
		type:String,
		required:true
	},
	bikenumber:{
		type:String,
		required:true
	},
	reading:{
		type:Number	
	},
	create_at:{
		type:Date
	},
	updated_at:{
		type:Date,
		default: Date.now
	},
}

module.exports = new mongoose.Schema(bikeSchema);
module.exports.bikeSchema = bikeSchema;