var mongoose = require('mongoose'),
    Schema = mongoose.Schema,

    // create the Order Schema
    OrderSchema = new Schema({
    	ref_id : {
    		type : String,
    		required : true,
    		unique : true
    	},
        date : {
            type : Date,
            default : Date.now,
            require : true
        },
        total_amount : {
            type : Number,
            required : true
        },
    	products : [{
	    id : {
			type : String,
            required : true
        },
        image : {
			type : String,
            required : true
		},
	    name : {
			type : String,
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
        description : {
            type : String,
            required : true
        }
        }],
        donated_by : {
            type : String,
            required : true
        },
        deal_with : {
            type : String,
            required : true
        },
        sold_to : {
            type : String,
            required : false
        },
        status : {
            type : String,
            required : false
        },
        address_details : {
            city : {
                type : String,
                require : true
            },
            state : {
                type : String,
                require : true
            },
            pin_code : {
                type : Number,
                require : true
            },
            address : {
                type : String,
                require : true
            }
        },
        contact_details : {
            name : {
                type : String,
                require : true
            },
            email : {
                type : String,
                require : true
            },
            mobile_no : {
                type : String,
                require : true
            }
        },
        receipt_upload : {
            payment_mode : {
                type : String,
                require : false
            },
            image : {
                type : String,
                require : false
            }
        }
    })

    // we need to create a model using the Schema
    Order = mongoose.model('Order', OrderSchema);

    // make this available to our users in our Express application
    module.exports = Order;


