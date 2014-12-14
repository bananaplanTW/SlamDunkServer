var util = require('util'),
	express = require('express'),
    router  = express.Router(),
	SchoolAgencyDB = require('../db/db'),
	db = SchoolAgencyDB.SchoolAgencyDB,
	SchoolModel = SchoolAgencyDB.School;

//require('../lib/initializeMongoDB')

router.get('/', function (req, res) {
	var query = req.query;
	var idRegExp = new RegExp(query.s);

	SchoolModel.find({id: query.s}).exec(function (error, school) {
		if (error) {
			console.log(error);
			return;
		}
		console.log(school);
		res.render('school', {data: school[0]});
	});
});

module.exports = router;
