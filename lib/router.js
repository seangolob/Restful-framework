'use strict';

var deleteRequest = require('./delete.js');
var getRequest = require('./get.js');
var patchRequest = require('./patch.js');
var postRequest = require('./post.js');
var putRequest = require('./put.js');

var router = function(){};

router.prototype.DELETE = deleteRequest;
router.prototype.GET = getRequest;
router.prototype.PATCH = patchRequest;
router.prototype.POST = postRequest;
router.prototype.PUT = putRequest;

module.exports = new router;

