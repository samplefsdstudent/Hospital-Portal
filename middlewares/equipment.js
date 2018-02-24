'use strict';
var Comment = require('../models/Equipment');

function getEquipments(req, res){
    Equipment.find({}, function (err, equipments) {
        if (err) return err;
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
	post : postEquipment
};