var express = require('express'),
    router  = express.Router(),
    util = require('util'),
    moduleLogin = require('../modules/ModuleLogin').getInstance(),
    HttpsGet = require('../lib/HttpsGet');

var selectUserQuery = "SELECT * FROM member WHERE account='%s'";

router.post("/", function (req, res) {
	console.log(req.body);
});

module.exports = router;