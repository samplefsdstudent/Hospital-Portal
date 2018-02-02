'use strict';
var Testimonial = require('../models/Testimonial');

function testimonial(req, res){
    Testimonial.find({}, function (err, testimonials) {
        if (err) return handleError(err);
        res.json(testimonials);
    })
}

module.exports = testimonial;