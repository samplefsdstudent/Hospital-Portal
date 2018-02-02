'use strict';
var Comment = require('../models/Comment');

function comment(req, res){
    Comment.find({blog_id : req.params.id}, function (err, comments) {
        if (err) return handleError(err);
        res.json(comments);
    })
}

module.exports = comment;