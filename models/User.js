var mongoose = require('mongoose'),
    Schema = mongoose.Schema,

    // create the Member Schema
    memberSchema = new Schema({
    	name : {
    		type : String,
    		required : true,
    		unique : true
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
        role : {
            type : String,
            required : true
        },
        image : {
            type : String,
            required : false
        },
    	description : {
    		type : String,
    		required : false
    	},
        facebook_url : {
            type : String,
            required : false
        },
    	twitter_url : {
    		type : String,
    		required : false
    	},
        plus_google_url : {
            type : String,
            required : false
        },
        instagram_url : {
            type : String,
            required : false
        } 
    })

    // we need to create a model using the Schema
    User = mongoose.model('User', memberSchema);

    // make this available to our users in our Express application
    module.exports = User;


