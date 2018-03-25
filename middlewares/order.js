'use strict';
var nodemailer = require('nodemailer');
var ObjectId = require('mongodb').ObjectId; 
var Order = require('../models/Order');
var Equipment = require('../models/Equipment');
function createOrder (req, res){
	let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
		secure : false,
		port : 587,
        	auth: {
            	user: 'samplefsdstudent@gmail.com',
            	pass:'ankit939'
        	},
		tls : {
			rejectUnauthorized : false
		}
    });

        Equipment.find({_id : req.body.products[0].id}, function (err, equipment) {
            equipment = equipment[0];
            if (err) 
              res.status(400).send({message : err.errmsg});
            else{
               if(equipment.status == 'sold'){
                    res.status(400).send({message : 'Equipment is already sold.'});
                }else if(equipment.status == 'removed'){
                    res.status(400).send({message : 'Equipment is unavailable.'});
                }else if(equipment.status == 'available'){
                    var orderList = '';
                    req.body.products.forEach(function(product){
                        orderList += product.name + ', ';
                    })

                    orderList.substr(0,orderList.length - 1);
                    var newOrder = new Order({
                        ref_id : Math.random().toString(36).substr(2, 9).toUpperCase(),
                        date : req.body.date,
                        total_amount : req.body.total_amount,
                        products : req.body.products,
                        donated_by: req.body.donated_by,
                        deal_with :  req.body.deal_with,
                        sold_to : req.body.sold_to,
                        address_details : req.body.address_details,
                        contact_details : req.body.contact_details,
                        receipt_details : req.body.receipt_details,
                        status : 'pending'
                    })

                    newOrder.save(function(err) {
                        if (err) {
                            res.status(400).send(err)
                        }else{
                            var date = newOrder.date;
                            date = date.getDate() + '-' + date.getMonth() + '-' + date.getFullYear()
                            var time = newOrder.date.getHours() + ':' + newOrder.date.getMinutes() + ' GMT +5:30(IST)';
                            var mailOptions = {
                                from: '"Hospital Portal Mail" <samplefsdstudent@gmail.com>',
                                to: [req.body.contact_details.email,req.body.deal_with],
                                subject: 'Confirmed! The request for online medical order at Hospital Portal is successful.',
                                text: 'The Reference ID of the order is: ' + newOrder.ref_id + '.\n The order is placed on ' + date + ' at ' + time + ' for Equipments- ' + orderList + '\n The total amount including all shipping cost is - $' + newOrder.total_amount + '. The Donor Hospital will further contact you regarding the finalized deal of Medical Equipments.\n We are available to assist you for any queries.' 
                            };
                            transporter.sendMail(mailOptions, (error, info) => {
                            if (error) res.status(400).send(error);
                                res.json({ref_id : newOrder.ref_id});
                            });
                        }
                    });
                }
            }
        }).lean()
}

function statusUpdate (req, res){
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        secure : false,
        port : 587,
            auth: {
                user: 'samplefsdstudent@gmail.com',
                pass:'ankit939'
            },
        tls : {
            rejectUnauthorized : false
        }
    });
   
    var query = Order.where({ _id: req.body.id }).setOptions({ overwrite: true })
    query.update({ $set: { status: req.body.status } }, function(err, response){
        if (err) {
            res.status(400).send(err)
        }else{
            let newOrder = req.body.products;
            var orderList = '';
             newOrder.forEach(function(product){
                orderList += product.name + ', ';
            })
            orderList.substr(0,orderList.length - 1);
            var date = new Date(req.body.date);
            var time = date;
            date = date.getDate() + '-' + date.getMonth() + '-' + date.getFullYear()
            var time = time.getHours() + ':' + time.getMinutes() + ' GMT +5:30(IST)';
            var mailOptions = {
                from: '"Hospital Portal Mail" <samplefsdstudent@gmail.com>',
                to: [req.body.contact_details.email,req.body.deal_with],
                subject: 'The request for online medical order at Hospital Portal is ' + req.body.status + ' by Donor Hospital.',
                text: 'The Reference ID of the order is: ' + req.body.ref_id + '.\n The order was placed on ' + date + ' at ' + time + ' for Equipments- ' + orderList + '\n The total amount including all shipping cost is - $' + req.body.total_amount + '. The Donor Hospital has ' + req.body.status + ' your request of the deal of Medical Equipments due to some concern.\n We are available to assist you further for any queries.' 
            };
            transporter.sendMail(mailOptions, (error, info) => {
            if (error) res.status(400).send(error);
            else if(req.body.status == 'approved'){

              console.log('inside approved');

              Equipment.where({ _id: req.body.products[0]._id }).update({ $set: { 'status' : 'sold', 'sold_to' : {id : req.body.deal_with, name : req.body.contact_details.firstname + ' ' + req.body.contact_details.lastname }}}, function(err, response){
              //Equipment.find({ _id: req.body.products[0].id }, function(err, response){
                    console.log('inside query', err, response);
                    if(err) res.status(400).send(err);
                    else{
            
                        Order.where({'products.id' : req.body.products[0].id,ref_id : { $ne: req.body.ref_id }}).update({ $set: { 'status' : 'rejected'}}, { "multi": true }, function(err, response){
                        //Order.find({'products.id' : req.body.products[0].id, ref_id : { $ne: req.body.ref_id }}, function(err, response){
                            if(err) res.status(400).send(err);
                            else{
                                console.log('2nd response', response);
                                res.json(newOrder);
                            }
                        }).lean();
                    }
                }).lean();






            }else{
                res.json(newOrder);
            }
            });
        }
    }).lean();
}

function getOrder(req, res){
    Order.find({ref_id : req.params.id.toUpperCase()}, function (err, order) {
        if (err) res.status(400).send(err);
        else if(order){
            console.log('<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< order', order);
            delete order._id;
            delete order.__v
            res.json(order);
        }else{
            res.status(400).send('Not Found');
        }
    }).lean();
}

function getAllOrders(req, res){
    Order.find({}, function (err, order) {
        if (err) res.status(400).send(err);
        else if(order){
            console.log('<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< order', order);
            delete order._id;
            delete order.__v
            res.json(order);
        }else{
            res.status(400).send('Not Found');
        }
    }).lean();
}

function getAllTypeOrders(req, res){
    let key;
    if(req.params.type == 'donor') key = "donated_by";
    if(req.params.type == 'requester') key = "deal_with";
    Order.find({}, function (err, orders) {
        if (err) return err;
        else{
           orders =  orders.filter(function(order){
                return order[key] == req.params.id
            })
        	res.json(orders);
        }
    })
}

module.exports = {
    get : getOrder,
    getAllType : getAllTypeOrders,
    getAll : getAllOrders,
    post : createOrder,
    update : statusUpdate
};
