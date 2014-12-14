var express = require('express'),
    router  = express.Router(),
    util = require('util'),
    fs = require('fs'),
    moduleMysql = require('../modules/ModuleMysql').getInstance();//,
    //top10Data = require('../nbadata/Top10Data');
var top10QueryString = "SELECT * FROM top10 ORDER BY dateInEpoch DESC";
var updateAwesomeBoredQueryString = "UPDATE top10 SET awesome=awesome+%s, bored=bored+%s WHERE id=%s"

router.get("/", function (req, res) {    
    moduleMysql.execute(top10QueryString, function (error, data){
        if (error) {
            res.writeHead(404);
            res.end();
            return;
        }

        res.writeHead(200, {
            "Content-Type": "application/json"
        });
        res.write(JSON.stringify(data));
        res.end();
    });
});

router.post("/", function (req, res) {
    var listOfupdate = req.body;
    var length = listOfupdate.length;
    var queryString;

console.log(req.body);
    if (length > 0) {
        var count = 0;
        for (var i = 0; i < length; i ++) {
            queryString = util.format(updateAwesomeBoredQueryString, listOfupdate[i].addAwesome, listOfupdate[i].addBored, listOfupdate[i].id);
            console.log(queryString);

            moduleMysql.execute(queryString, function (error, data){
                count ++;
                if (error) {
                    console.log(error)
                }

                if (count === length) {
                    res.writeHead(200);
                    res.end();
                }
            });
        }
    } else {
        res.writeHead(200);
        res.end();
    }
});

module.exports = router;