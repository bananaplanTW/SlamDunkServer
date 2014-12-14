var util = require('util'),
	express = require('express'),
    router  = express.Router(),
    ModuleMysql = require('../modules/ModuleMysql').getInstance(),
    queryString = "SELECT a.state_short, a.state_origin, b.country_short FROM state AS a, country AS b WHERE a.under_country_id = b.id";

router.get('/', function (req, res) {
	var data = {};
	data.schools = [1,2,3,4,5,6,7,8];
	res.render('home', {data: data});
});

module.exports = router;