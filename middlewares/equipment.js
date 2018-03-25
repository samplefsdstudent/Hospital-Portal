'use strict';
var Equipment = require('../models/Equipment');

function getAllEquipments(req, res){
    Equipment.find({}, function (err, equipments) {
        if (err) 
          res.status(400).send({message : err.errmsg});
        else
          res.json(equipments);
    })
}

function getEquipments(req, res){
    Equipment.find({'donated_by.id' : req.params.id}, function (err, equipments) {
        if (err) 
          res.status(400).send({message : err.errmsg});
        else
          res.json(equipments);
    })
}

function postEquipment(req, res, next){
   	var equipment = new Equipment(req.body);
    Equipment.create(equipment, function (err, equipment) {
        if (err) 
          res.status(400).send({message : err.errmsg});
        else
          res.json(equipment);
      });
}

module.exports = {
  get : getEquipments,
	getAll : getAllEquipments,
	post : postEquipment
};