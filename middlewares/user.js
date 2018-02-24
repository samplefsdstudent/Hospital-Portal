'use strict';
var User = require('../models/User');

function getProfile(req, res){
    User.find({email : req.body.email}, function (err, blogs) {
        if (err) return err;
        res.json(blogs);
    })
};

function updateProfile(req, res){
    User.update({email : req.body.email}, req.body.data, function (err, blogs) {
        if (err) return err;
        res.json(blogs);
    })
}

module.exports = {
	get : getProfile,
	update : updateProfile
};