var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var slotModel = new Schema({
	slot_time:{
		type:String,
		required:true
	},
	slot_capacity:{
		type:Number,
		required:true
	},
	slot_number:{
		type:Number,
		
	},
	_areaId:Schema.Types.ObjectId,
	
	create_at:{
		type:Date,
		default: Date.now
	},
	updated_at:{
		type:Date,	
	},
});
module.exports = mongoose.model('Slot',slotModel);
