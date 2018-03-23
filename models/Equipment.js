var mongoose = require('mongoose'),
    Schema = mongoose.Schema,

    // create the Menu Schema
    equipmentSchema = new Schema({
    	name : {
    		type : String,
    		required : true
    	},
    	image : {
    		type : String,
    		required : true
    	},
    	description : {
    		type : String,
    		required : true
    	},
        type : {
            type : String,
            required : true
        },
        city : {
            type : String,
            required : true
        },
        state : {
            type : String,
            required : true
        },
        address : {
            type : String,
            required : true
        },
        pin_code : {
            type : Number,
            required : true
        },
    	price : {
    		type : Number,
    		required : true
    	},
    	quantity : {
    		type : Number,
    		required : true
    	},
        status : {
            type : String,
            required : true
        },
        donated_by : {
            id : {
                type : String,
                required : true
            },
            name : {
                type : String,
                required : true
            }
        },
        sold_to : {
            id : {
                type : String,
                required : false
            },
            name : {
                type : String,
                required : false
            }
        }
    })

    // we need to create a model using the Schema
    Equipment = mongoose.model('Equipment', equipmentSchema);

    // make this available to our users in our Express application
    module.exports = Equipment;


