'use strict';
var Blog = require('../models/Blog');

function blog(req, res){
    Blog.find({}, function (err, blogs) {
        if (err) return handleError(err);
        res.json(blogs);
    })
}

module.exports = blog;