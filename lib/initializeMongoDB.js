var SchoolAgencyDB = require('../db/db'),
	db = SchoolAgencyDB.SchoolAgencyDB,
	schoolModel = SchoolAgencyDB.School,
	MainCategory = SchoolAgencyDB.MainCategory,
	SubCategory = SchoolAgencyDB.SubCategory;
/*
var main = MainCategory({
	id: 1,
	name: "工科"
});
main.save(function (error) {
	if (error) {
		console.log(error);
	}
});*/
/*
var school = new schoolModel({
	id: "nctu",
	cover: "/assets/images/CA.jpg", 
	logo:"/assets/images/ntu.jpeg",
	photos: [
		"/assets/images/NY.jpg",
		"/assets/images/IL.jpg"
	],
	ranking: [
		{
			year: 2001,
			rank: 10
		},
		{
			year: 2002,
			rank: 20
		}
	],
	departments: [
		{
			name: "Computer Science (資訊工程學系)",
		},
		{
			name: "Finance  (財經系)",
		}
	],
	name: "National Chiao Tung University",
	briefing: "this is briefing",
	introduction: "this is introduction"
});

school.save(function (error) {

});

schoolModel.update({id: "national_taiwan_university"}, 
	{
		cover: "/assets/images/CA.jpg", 
		logo:"/assets/images/ntu.jpeg",
		photos: [
			"/assets/images/NY.jpg",
			"/assets/images/IL.jpg"
		],
		ranking: [
			{
				year: 2001,
				rank: 10
			},
			{
				year: 2002,
				rank: 20
			}
		],
		departments: [
			{
				name: "Computer Science (資訊工程學系)",
			},
			{
				name: "Finance  (財經系)",
			}
		]
	}, function () {

});*/