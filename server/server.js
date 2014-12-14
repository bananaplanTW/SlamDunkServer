var express = require('express'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    methodOverride = require('method-override'),
    app = express(),
    top10 = require('../routes/top10');

// setting up template engine
app.set('port', 8052);

//app.use(logger('combined', {stream: httpLogFile}))
app.use(bodyParser.json());
app.use(methodOverride());
app.use(cookieParser())

app.use("/getTop10", top10);
app.use("/updateTop10AwesomeBored", top10);

app.listen(app.get('port'), function () {
	console.log("server now listen to port", app.get('port'));
});