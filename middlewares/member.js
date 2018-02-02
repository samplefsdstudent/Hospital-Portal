'use strict';
var Member = require('../models/Member');

function member(req, res){
    Member.find({}, function (err, blogs) {
        if (err) return handleError(err);
        res.json(blogs);
    })
}

module.exports = member;