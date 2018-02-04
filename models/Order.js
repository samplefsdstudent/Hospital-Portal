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
            type : Number,
            required : true
        },
    	products : [{
            name : {
                type : String
            },
            image : {
                type : String
            },
            price : {
                type : Number
            },
            number : {
                type : Number
            },
            description : {
                type : String
            },
            type : {
                type : String
            },
            required : true
        }],
        address_details : {
            country : {
                type : String
            },
            city : {
                type : String
            },
            state : {
                type : String
            },
            pin_code : {
                type : Number
            },
            address : {
                type : String
            },
            required : true
        },
        contact_details : {
            first_name : {
                type : String
            },
            last_name : {
                type : String
            },
            email : {
                type : String
            },
            mobile_no : {
                type : String
            },
            required : true
        },
        card_details : {
            card_type : {
                type : String
            },
            card_holder : {
                type : String
            },
            card_number : {
                type : Number
            },
            expiry_date : [{
                month : {
                    type : Number
                },
                year : {
                    type : Number
                }
            }],
            cvv : {
                type : Number
            },
            required : true
        }
    })

    // we need to create a model using the Schema
    Order = mongoose.model('Order', OrderSchema);

    // make this available to our users in our Express application
    module.exports = Order;


