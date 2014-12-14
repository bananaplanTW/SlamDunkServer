var mongoose = require('mongoose'),
	db = mongoose.connection,
	Schema = mongoose.Schema,
	schoolRankingSchema = new Schema({
		year: Number,
		rank: Number
	}),
	departmentSchema = new Schema({
		name: String
	}),
	schoolSchema = new Schema({
		id: String,
		name: String,
		cover: String,
		logo: String,
		briefing: String,
		rank: Number,
		mainCategory: [Number],
		subCategory: [Number],
		ranking: [schoolRankingSchema],
		introduction: String,
		departments: [departmentSchema],
		photos: [String]
	}),
	categorySchema = new Schema({
		id: Number,
		name: String
	});

mongoose.connect("mongodb://localhost/melanie");

db.on('error', function () {
	console.log('error connection to mongodb');
});

db.on('open', function () {
	console.log("connected!");
});

// define School collection
var School = mongoose.model("School", schoolSchema);
var MainCategory = mongoose.model("MainCategory", categorySchema);
var SubCategory  = mongoose.model("SubCategory", categorySchema);

module.exports = {
	School : School,
	MainCategory: MainCategory,
	SubCategory: SubCategory,
	SchoolAgencyDB: db
};
