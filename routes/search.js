var util = require('util'),
	express = require('express'),
    router  = express.Router(),
	SchoolAgencyDB = require('../db/db'),
	db = SchoolAgencyDB.SchoolAgencyDB,
	SchoolModel = SchoolAgencyDB.School,
	max = 10;

router.get('/', function (req, res) {
	var query = req.query;
	var nameRegExp = new RegExp(query.q, "i");
	var p = query.p ? 1 : query.p;
	var offset = (p - 1) * 10;

	SchoolModel.find({name: nameRegExp})
		.skip(offset)
		.limit(max)
		.exec(function (error, schools) {
			if (error) {
				console.log(error);
				return;
			}
			
			var data = {};
			data.schools = schools;
			if (p > 1) {
				data.prevPage = p - 1;
			}
			if (schools == max) {
				data.nextPage = p + 1;
			}
			console.log(data);
			res.render('search', {data: data});
		});
});

module.exports = router;