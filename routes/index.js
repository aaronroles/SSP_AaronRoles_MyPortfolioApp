var express = require('express');
var router = express.Router();
var fs = require("fs");

var files = new Array();
var fileId = 0;

/* index.jade */
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

/* content.jade */
router.get('/flash', function(req, res, next) {
  console.log("FLASH");
  res.render('content', {title: "Flash"});
});

router.get('/audio', function(req, res, next) {
  console.log("AUDIO");
  res.render('content', {title: "Audio"});
});

router.get('/videos', function(req, res, next) {
  console.log("VIDEOS");
  res.render('content', {title: "Videos"});
});

router.get('/image', function(req, res, next) {
  console.log("IMAGES");
  res.render('content', {title: "Images"});
});

/* file upload */
router.post('/upload', function(req, res, next){
   var file = {}; 
   
   file.name = req.files[0].filename;
   file.id = fileId++;
   file.type = req.body.category;
   
   files.push(file);
   
   console.log(file);
   console.log(files);
   
   res.redirect('/');
  });
module.exports = router;
