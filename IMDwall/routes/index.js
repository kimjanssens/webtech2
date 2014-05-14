var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'IMD Wall' });
});

/*GET messages page*/
router.get('/questions', function(req, res) {
  res.render('questions', { title: 'All questions' });
});

/*POST a message*/
router.post('/addquestion', function(req, res) {
	var db = req.db;

	var Type = req.body.soort;
	var Message = req.body.message;

	var collection = db.get('questions');

	collection.insert({
        "type" : Type,
        "message" : Message
    }, function (err, doc) {
        if (err) {
            // If it failed, return error
            res.send("There was a problem adding the information to the database.");
        }
        else {
            // If it worked, set the header so the address bar doesn't still say /adduser
            res.location("questions");
            // And forward to success page
            res.redirect("questions");
        }
    });
});

module.exports = router;