'use strict';
var Comment = require('../models/Comment');

function getComment(req, res){
    Comment.find({blog_id : req.params.blog_id}, function (err, comments) {
        if (err) return err;
        res.json(comments);
    })
}

function postComment(req, res){
    Comment.find({blog_id : req.params.blog_id}, function (err, comments) {
        if (err) return err;
        res.json(comments);
    })

    Comment.update(
   		{ "blog_id": req.params.blog_id},
   		{ "$push": { "comments": req.body.data } },
   		function (err, comment) {
       		if (err) return handleError(err);
       		res.json(comment);
   	});
}

module.exports = {
	get : getComment,
	post : postComment
};