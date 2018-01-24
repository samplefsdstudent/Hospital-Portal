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
            }
        }],
        address_details : [{
            country : {
                type : String
            },
            country : {
                type : String
            },
            country : {
                type : String
            },
            country : {
                type : String
            },
            country : {
                type : String
            }
        }],
        contact_details : [{
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
            }
        }],
        card_details : [{
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
                date : {
                    type : Number
                },
                year : {
                    type : Number
                }
            }],
            cvv : {
                type : Number
            }
        }]
    })

    // we need to create a model using the Schema
    Order = mongoose.model('Order', OrderSchema);

    // make this available to our users in our Express application
    module.exports = Order;


