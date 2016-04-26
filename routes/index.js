var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
  console.log("Got home page");
});

router.get('/index', function(req, res, next) {
  res.render('index');
  console.log("Got home page");
});

router.post('/', function(req, res, next) {
  res.render('index');
  console.log("Got home page");
});

router.post('/index', function(req, res, next) {
  res.render('index');
  console.log("Got home page");
});

module.exports = router;
