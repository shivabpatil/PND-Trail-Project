var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bookedSlotModel = new Schema({
	
	booking_count:{
		type:Number,
		required:true
	},
	booking_date:{
		type:Number,
		required:true
	},
	_slotId:Schema.Types.ObjectId,

	create_at:{
		type:Date,
		default: Date.now
	},
	updated_at:{
		type:Date,	
	},
});
module.exports = mongoose.model('Slot',slotModel);
