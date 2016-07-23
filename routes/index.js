var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var multer = require('multer');
var Url = require('../models/urls.js');
var fs =  require('fs');
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, dropExt(file.originalname) + '_' + getFormattedDate() + '.' + getExt(file.originalname))
  }
});

var upload = multer({ storage: storage });

function dropExt(str) {
	str = str.split('.');
	str.pop();
	str.join('');
	return str;
}

function getExt(str) {
	str = str.split('.');
	return str.pop();
}

function getFormattedDate() {
	var date = new Date(Date.now());
	var strDate = date.toISOString().slice(0, 10).split('-').join('');
	var strTime = date.getUTCHours() + "" + date.getMinutes() + "" + date.getSeconds();
	return strDate + "" + strTime;
}

router.get('/', function(req, res) {
  res.render('index.ejs');
});

router.get('/files', function(req, res) {
  fs.readdir('./uploads', function(err, files) {
  	if(err) {console.log(err);}
  	var obj = {};
  	obj.files = files;
  	res.json(obj);
  });
});

router.post('/size', upload.single('size'), function (req, res, next) {
	var obj = {};
	obj.size = req.file.size;
	res.json(obj);
});

module.exports = router;
