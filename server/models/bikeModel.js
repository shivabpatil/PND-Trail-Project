var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bikeModel = new Schema({
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
	_customerId:Schema.Types.ObjectId,
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
