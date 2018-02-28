var mongoose = require('mongoose'),
    Schema = mongoose.Schema,

    // create the Member Schema
    userSchema = new Schema({
    	name : {
            type : String,
            required : true
        },
        email : {
            type : String,
            required : true,
            unique : true
        },
        password : {
            type : String,
            required : true
        },
        address : {
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
        mobile_no : {
            type : String,
            required : true
        },
        pin_code : {
            type : Number,
            required : true
        },
        image : {
            type : String
        },
        description : {
            type : String
        },
        created_on : {
            type : String,
            required : true
        },
        type : {
            type : String,
            required : true
        }
    })

    // we need to create a model using the Schema
    User = mongoose.model('User', userSchema);

    // make this available to our users in our Express application
    module.exports = User;


