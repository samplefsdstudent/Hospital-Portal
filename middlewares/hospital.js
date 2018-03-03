'use strict';
var Hospital = require('../models/Hospital'),
    mongoose = require('mongoose');

function getAllHospitals(req, res){
    Hospital.find({}, function (err, hospitals) {
        if (err) return err;
        res.json(hospitals);
    })
}

function getHospital(req, res){
    console.log(req.params.id);
    Hospital.findById(req.params.id, function (err, hospital) {
        if (err) res.status(400).send({message : err});
        else{
            console.log('err', err, 'hospital', hospital);
            hospital.id = hospital._id;
            delete hospital._id;
            delete hospital.__v;
            delete hospital.password;
            res.json(hospital);
        }
    }).lean()
}

function updateHospital(req, res){
    Hospital.where({_id : mongoose.Types.ObjectId(req.body.id)}).update( req.body, function (err, hospital) {
        if (err) return err;
        res.json(hospital);
    })
}

module.exports = {
	getAll : getAllHospitals,
	get : getHospital,
	update : updateHospital
};
