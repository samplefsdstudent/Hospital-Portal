'use strict';
var Hospital = require('../models/Hospital');

function signup(req, res){
      let hospitalData = {
        email: req.body.email,
        password: req.body.password,
        name : req.body.name,
        address :req.body.address,
        city : req.body.city,
        state : req.body.state,
        mobile_no : req.body.mobile_no,
        pin_code : req.body.pin_code,
        image : req.body.image,
        description : req.body.description,
        created_on : new Date(),
        type : req.body.type,
        status : "pending"
      }
      //use schema.create to insert data into the db
      Hospital.create(hospitalData, function (err, hospital) {
        if (err) 
          res.status(400).send({message : err.errmsg});
        else
          res.json(hospital);
      });
}

module.exports = signup;