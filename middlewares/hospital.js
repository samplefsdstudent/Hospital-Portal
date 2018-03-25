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
    Hospital.findById(req.params.id, function (err, hospital) {
        if (err) res.status(400).send({message : err});
        else if(hospital){
            hospital.id = hospital._id;
            delete hospital._id;
            delete hospital.__v;
            delete hospital.password;
            res.json(hospital);
        }else{
            res.status(400).send({message : 'Not Found'});
        }
    }).lean()
}

function updateHospital(req, res){
    Hospital.where({_id : mongoose.Types.ObjectId(req.body.id)}).update(req.body, function (err, hospital) {
        if (err) res.status(400).send({message : err});
        else
            res.json({message : "Updated Successfully."});
    })
}

module.exports = {
	getAll : getAllHospitals,
	get : getHospital,
	update : updateHospital
};
