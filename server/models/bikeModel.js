var mongoose = require('mongoose');
var schema = mongoose.Schema;

var bikeModel = new schema({
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
});
module.exports = mongoose.model('Bike',bikeModel);
