var mongoose = require('mongoose'),
    bcrypt = require('bcrypt')
    Schema = mongoose.Schema,

    // create the Blog Schema
    hospitalSchema = new Schema({
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
            type : Number,
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
    	},
        status : {
            type : String,
            required : true
        }
    });

    hospitalSchema.pre('save', function (next) {
        var hospital = this;
        bcrypt.hash(hospital.password, 10, function (err, hash){
            if (err) {
            return next(err);
            }
            hospital.password = hash;
            next();
        })
    });

    // we need to create a model using the Schema
    Hospital = mongoose.model('Hospital', hospitalSchema);

    // make this available to our users in our Express application
    module.exports = Hospital;


