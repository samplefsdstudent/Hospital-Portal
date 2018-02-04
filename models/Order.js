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
            default : Date.now
        },
        total_amount : {
            type : Number
        },
    	products : [{
            name : {
                type : String,
                required : true
            },
            image : {
                type : String,
                required : true
            },
            price : {
                type : Number,
                required : true
            },
            number : {
                type : Number,
                required : true
            },
            description : {
                type : String,
                required : true
            },
            type : {
                type : String,
                required : true
            }
        }],
        address_details : {
            country : {
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
            pin_code : {
                type : Number,
                required : true
            },
            address : {
                type : String,
                required : true
            }
        },
        contact_details : {
            first_name : {
                type : String,
                required : true
            },
            last_name : {
                type : String,
                required : true
            },
            email : {
                type : String,
                required : true
            },
            mobile_no : {
                type : String,
                required : true
            }
        },
        card_details : {
            card_type : {
                type : String,
                required : true
            },
            card_holder : {
                type : String,
                required : true
            },
            card_number : {
                type : Number,
                required : true
            },
            expiry_date : [{
                month : {
                    type : Number,
                    required : true
                },
                year : {
                    type : Number,
                    required : true
                }
            }],
            cvv : {
                type : Number,
                required : true
            }
        }
    })

    // we need to create a model using the Schema
    Order = mongoose.model('Order', OrderSchema);

    // make this available to our users in our Express application
    module.exports = Order;


