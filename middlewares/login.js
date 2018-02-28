'use strict';
var Hospital = require('../models/Hospital'),
    User = require('../models/User'),
    bcrypt = require('bcrypt');

function login(req, res){
      var loginData = {
        email: req.body.email
      }
      if(req.body.email.split('@')[1] != "hospital.com"){
        Hospital.find(loginData, function (err, data) {
          if (err) res.status(500).send(err)
          else if(data.length){
            bcrypt.compare(req.body.password, data[0].password, function(err, response) {
            if(err){
              res.status(400).send({message : err})
            }else if(response){
              let hospital = new Object(data[0]);
              delete hospital.password;
              console.log(hospital);
              delete hospital.__v;
              console.log(hospital);
              hospital.id = hospital._id;
              delete hospital._id;
              console.log(hospital);
              res.json(hospital);
            }else{
              res.status(400).send({message : 'Either Email or Password is wrong.'})
            }
          });
          }else{
            res.status(400).send({message : 'Either Email or Password is wrong.'});
          }  
        });
      }else{
        User.find(loginData, function (err, data) {
          if (err) res.status(500).send(err)
          else if(data.length){
            bcrypt.compare(req.body.password, data[0].password, function(err, response) {
            if(err){
              res.status(400).send({message : err})
            }else if(response){
              let user = new Object(data[0]);
              delete user.password;
              delete user.__v;
              user.id = user._id;
              delete user._id;
              res.json(user);
            }else{
              res.status(400).send({message : 'Either Email or Password is wrong.'})
            }
          });
          }else{
            res.status(400).send({message : 'Either Email or Password is wrong.'});
          }  
        });
      }
}

module.exports = login;