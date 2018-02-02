'use strict';
var Menu = require('../models/Menu');

function menu(req, res){
    Menu.find({}, function (err, menus) {
        if (err) return handleError(err);
        res.json(menus);
    })
}

module.exports = menu;