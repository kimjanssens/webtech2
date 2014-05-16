var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'IMD Wall' });
});

/* GET all messages */
router.get('/questions', function(req, res) {
    var db = req.db;
    var collection = db.get('questions');
    collection.find({},{},function(e,docs){
        res.render('questions', {
            "questions" : docs,
            title: "IMD wall"
        });
    });
});

/* POST a message */
router.post('/addquestion', function(req, res) {
	var db = req.db;

    var Username = req.body.username;
	var Type = req.body.soort;
	var Message = req.body.message;

	var collection = db.get('questions');

	collection.insert({
        "username" : Username,
        "type" : Type,
        "message" : Message,
        "votes" : 0
    }, function (err, doc) {
        if (err) {
            res.send("There was a problem");
        }
        else {
            res.location("questions");
            res.redirect("questions");
        }
    });
});

/*STEMMEN*/
router.post('/vote', function(req, res) {
    var questionId = req.body.questionId;
    
    var db = req.db;
    var collection = db.get('questions');
    collection.update(
        {"_id" : questionId},
        {
            $inc: { "votes": 1 }
        }
        ,function(err,docs){
            if (err){
                res.send("Problem with voting");
            }else{
                res.location("questions");
                res.redirect("questions");
            }
    });
});

module.exports = router;