var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    var db = req.db;
    var collection = db.get('games');

    collection.find({},{},function(e,docs){
        res.render('index', {
            "games" : docs,
            title: "Scoreboard"
        });
    });
});

router.get('/admin', function(req, res) {
	var db = req.db;
	var collection = db.get('games');
    
    collection.find({},{
        "sort": [['post_date', 'desc'],['_id', 'asc']]
    },function(e,docs){
        res.render('admin', {
            "games" : docs,
            title: "Admin page"
        });
    });
});

router.post('/create', function(req, res) {
	var db = req.db;
	var country1 = req.body.country1;
	var country2 = req.body.country2;
	var collection = db.get('games');
	
	collection.insert({
        "country1": country1,
        "country2": country2,
        "score1": 0,
        "score2": 0,
        "shots1": 0,
        "shots2": 0,
        "fouls1": 0,
        "fouls2": 0,
        "feeds": [],
        "post_date": new Date()
    }, function (err, doc) {
    	if (err) {
            res.send("There was a problem");
        }
        else {
            res.location("../../admin");
            res.redirect("../../admin");
        }
    });
});

router.get('/increase/:Id/:Value/:Type', function(req, res) {
    var db = req.db;
    var id = req.params.Id;
    var type = req.params.Type;
    var value = parseInt(req.params.Value);
    var newValue = value + 1;
    var collection = db.get('games');

    var updateVal = {};
    updateVal[type] = newValue;

    collection.update(
        {"_id" : id},
        {$set: updateVal}
    , function (err, doc) {
        if (err) {
            res.send("There was a problem");
        }
        else {
            res.location("../../../admin");
            res.redirect("../../../admin");
        }
    });
});

router.get('/decrease/:Id/:Value/:Type', function(req, res) {
    var db = req.db;
    var id = req.params.Id;
    var type = req.params.Type;
    var value = parseInt(req.params.Value);
    var newValue = value - 1;
    var collection = db.get('games');

    var updateVal = {};
    updateVal[type] = newValue;

    collection.update(
        {"_id" : id},
        {$set: updateVal}
    , function (err, doc) {
        if (err) {
            res.send("There was a problem");
        }
        else {
            res.location("../../../admin");
            res.redirect("../../../admin");
        }
    });
});

router.post('/feed/:id', function(req, res) {
    var db = req.db;
    var feed = req.body.feed;
    var id = req.params.id;
    var collection = db.get('games');
    
    collection.update(
        {"_id" : id},
        {$push: {"feeds" : {"feed": feed}}}
    , function (err, doc) {
        if (err) {
            res.send("There was a problem");
        }
        else {
            res.location("../../admin");
            res.redirect("../../admin");
        }
    });
});

router.get('/delete/:id', function(req, res) {
    var db = req.db;
    var id = req.params.id;
    var collection = db.get('games');

    collection.remove({
        "_id" : id
    }, function (err, doc) {
        if (err) {
            res.send("There was a problem");
        }
        else {
            res.location("../admin");
            res.redirect("../admin");
        }
    });
});

module.exports = router;