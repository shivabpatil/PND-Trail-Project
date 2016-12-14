var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var areaModel = new Schema({
	name:{
		type:String,
		required:true
	},

	total_service_centers:{
		type:Number,
		default:0,
	},

	total_dpersons:{
		type:Number,
	},
    
    service_centers:[ {
    	name:{
			type:String,
		},
		brand:{
			type:String,
		},
		email:{
			type:String,
		},
		contact:{
			type:Number,
		},
		address:{
			line1:{
				type:String,
			},
			landmark:{
				type:String,
			},
			area:{
				type:String,
			},
			city:{
				type:String,
				default:"Pune"
			},
			state:{
				type:String,
				default:"Maharashtra"
			}
		},
		capacity:{
			type:Number,
		},	
		start_time:{
			type:String
		},
		end_time:{
			type:String
		},
    }],
    slots:[{
    	slot_number:{
			type:Number,
		},
    	slot_time:{
			type:String,
		},
		slot_capacity:{
			type:Number,
		},
    }],
	create_at:{
		type:Date,
		default: Date.now
	},
	updated_at:{
		type:Date,
		
	},
});
module.exports = mongoose.model('Area',areaModel);
