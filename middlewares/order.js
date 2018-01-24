'use strict';

var nodemailer = require('nodemailer');
var Order = require('../models/Order');

function order (req, res){
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

    var orderList = req.body.products
    for(let i = 0; i < req.body.products.length ; i++){
        orderList = req.body.products[i].name + ',';
    }

    orderList.substr(0, orderList.length - 1);

    var newOrder = new Order({
        ref_id : Math.random().toString(36).substr(2, 9),
        date : req.body.date,
        total_amount : req.body.total_amount,
        products : req.body.products,
        address_details : req.body.address_details,
        contact_details : req.body.contact_details,
        card_details : req.body.card_details
    })

    newOrder.save(function(err) {
        if (err) {
            res.status(400).send(err)
        }else{
            var date = newOrder.date;
            date = date.getDate() + '-' + date.getMonth() + '-' + date.getFullYear()
            var time = date.getHours() + ':' + date.getMinutes() + ' ISD GMT 5:30+';
            var mailOptions = {
                from: '"Restaurant Mail" <samplefsdstudent@gmail.com>',
                to: req.body.email,
                subject: 'Confirmed! Your request for online order at Restaurant is successful.',
                text: 'The Reservation ID is: ' + newOrder.ref_id +'.\n The order is placed on -' + newOrder.date.getDate() + ' at ' + newOrder.date.getTime() + 'for Products- ' + orderList + '\n The total amount including all taxes is - Rs.' + newOrder.total_amount + 'The order will be delivered in next 30 minutes.\n We are available to assist you for any queries.' 
            };
            transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                res.status(400).send(error)
            }
            res.end('Success')
            });
        }
    });
}

module.exports = order;