'use strict';
var Hospital = require('../models/Hospital'),
    User = require('../models/User'),
    bcrypt = require('bcrypt'),
    jwt = require('jsonwebtoken');

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
              let hospital = data[0];
              delete hospital.password;
              delete hospital.__v;
              hospital.id = hospital._id;
              delete hospital._id;
              const payload = {
                name : hospital.name
              };
              var access_token = jwt.sign(payload, req.app.get('superSecret'), {
                expiresIn: 1440 // expires in 24 hours
              });
              hospital.access_token = access_token;
              console.log(hospital);
              res.json(hospital);
            }else{
              res.status(400).send({message : 'Either Email or Password is wrong.'})
            }
          });
          }else{
            res.status(400).send({message : 'Either Email or Password is wrong.'});
          }  
        }).lean();
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
              const payload = {
                name : user.name
              };
              var access_token = jwt.sign(payload, req.app.get('superSecret'), {
                expiresIn: 1440 // expires in 24 hours
              });
              user.access_token = access_token
              console.log(user);
              res.json(user);
            }else{
              res.status(400).send({message : 'Either Email or Password is wrong.'})
            }
          });
          }else{
            res.status(400).send({message : 'Either Email or Password is wrong.'});
          }  
        }).lean();
      }
}

module.exports = login;
