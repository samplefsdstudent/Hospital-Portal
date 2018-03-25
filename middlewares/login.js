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
              if(hospital.status == "pending"){
                res.status(400).send({message : 'Your Signup Request is still not Approved by Hospital Portal Admin. Please try again later'});
              }else if(hospital.status == "rejected"){
                res.status(400).send({message : 'Your Signup Request is Rejected by Hospital Portal Admin. Kindly check your email for more information.'})
              }else if(hospital.status == "approved"){
                res.json(hospital);
              }
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

function changePwd(req, res){
  var pwdData = {
        email: req.body.email
      }

    Hospital.find(pwdData, function (err, data) {
          if (err) res.status(500).send(err)
          else if(data){
            var query;
            bcrypt.compare(req.body.old_password, data[0].password, function(err, response) {
            if(err){
              res.status(400).send({message : err})
            }else if(response){
              bcrypt.hash(req.body.new_password, 10, function (err, hash){
                  if (err) {
                  res.status(500).send({message : 'Internal Server Error'});
                  }else{
                    req.body.new_password = hash;
                    if(req.body.email.split('@')[1] != "hospital.com"){
                      query = Hospital.where({ email: req.body.email }).setOptions({ overwrite: true });
                    }else{
                      query = User.where({ email: req.body.email }).setOptions({ overwrite: true });
                    }
                    query.update({ $set: { password: req.body.new_password } }, function(err, newOrder){
                      if (err) res.status(400).send({message : err});
                      else
                          res.json({message : "Password Updated Successfully."});
                      })
                  }
              })
            }else{
              res.status(400).send({message : 'Old Password is wrong.'})
            }
          });
          }else{
            res.status(500).send({message : 'Internal Server Error'});
          }  
        }).lean();
}

function changeStatus(req, res){
  var statData = {
        email: req.body.email
      }

    Hospital.find(statData, function (err, data) {
          if (err) res.status(500).send(err)
          else if(data){
            var query = Hospital.where({ email: req.body.email }).setOptions({ overwrite: true });
            bcrypt.compare(req.body.password, data[0].password, function(err, response) {
            if(err){
              res.status(400).send({message : err})
            }else if(response){
            query.update({ $set: { status: req.body.status } }, function(err, newOrder){
              if (err) res.status(400).send({message : err});
              else
                res.json({message : "Account Status Changed Successfully.", data : {status : req.body.status}});
            })
            }else{
              res.status(400).send({message : 'Entered Password is wrong.'})
            }
          });
          }else{
            res.status(500).send({message : 'Internal Server Error'});
          }  
        }).lean();
}

module.exports = {
  login : login,
  changePwd : changePwd,
  changeStatus : changeStatus
};
