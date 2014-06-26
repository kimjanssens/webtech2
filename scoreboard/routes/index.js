var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/admin', function(req, res) {
  res.render('admin', {title: 'Admin page'});
});

module.exports = router;