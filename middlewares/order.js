'use strict';
var nodemailer = require('nodemailer');
var ObjectId = require('mongodb').ObjectId; 
var Order = require('../models/Order');
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
        receipt_details : req.body.card_details,
        status : 'pending'
    })

    console.log(newOrder);

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
   
    var query = Model.where({ _id: req.body.id }).setOptions({ overwrite: true })
    q.update({ $set: { status: req.body.status } }, function(err, newOrder){
        if (err) {
            res.status(400).send(err)
        }else{
            var orderList = '';
             newOrder.products.forEach(function(product){
                orderList += product.name + ', ';
            })
            orderList.substr(0,orderList.length - 1);
            var date = newOrder.date;
            date = date.getDate() + '-' + date.getMonth() + '-' + date.getFullYear()
            var time = newOrder.date.getHours() + ':' + newOrder.date.getMinutes() + ' GMT +5:30(IST)';
            var mailOptions = {
                from: '"Hospital Portal Mail" <samplefsdstudent@gmail.com>',
                to: [req.body.contact_details.email,req.body.deal_with],
                subject: 'The request for online medical order at Hospital Portal is ' + newOrder.status + ' by Donor Hospital.',
                text: 'The Reference ID of the order is: ' + newOrder.ref_id + '.\n The order was placed on ' + date + ' at ' + time + ' for Equipments- ' + orderList + '\n The total amount including all shipping cost is - $' + newOrder.total_amount + '. The Donor Hospital has rejected your request of the deal of Medical Equipments due to some concern.\n We are available to assist you further for any queries.' 
            };
            transporter.sendMail(mailOptions, (error, info) => {
            if (error) res.status(400).send(error);
            else{
                 newOrder.id = newOrder._id;
                delete newOrder._id;
                delete newOrder.__v;
                res.json(newOrder);
            }
            });
        }
    }).lean();
}

function getOrder(req, res){
    console.log('<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<req.params.id', req.params.id);
    Order.findById(req.params.id, function (err, order) {
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
    let key;
    if(req.params.type == 'donor') key = "donated_by";
    if(req.params.type == 'requester') key = "deal_with";
    Order.find({}, function (err, orders) {
        if (err) return err;
        else{
              Order.find({}, function (err, orders) {
        	if (err) return err;
        	else{
          		orders.filter(function(order){
              			return order[key] == req.params.id
          		})
        	}
        		res.json(orders);
    		})
        }
    })
}

module.exports = {
    get : getOrder,
    getAll : getAllOrders,
    post : createOrder,
    update : statusUpdate
};
