var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/admin', function(req, res) {
  res.render('admin', { title: 'Admin page' });
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
        "feeds": "0' - game started"
    }, function (err, doc) {
    	if (err) {
            res.send("There was a problem");
        }
        else {
            res.location("/admin");
            res.redirect("/admin");
        }
    });
});

module.exports = router;