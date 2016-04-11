var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Url = require('../models/urls.js');
var cors = require('cors');

function testUrl(url) {
    var urlRE2 = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
    if(!urlRE2.test(url)){
        return false;
    }
    return true;
}

router.get('/', function(req, res) {
  res.render('index.ejs');
});

router.get('/api/new/:url*', cors(), function(req, res) {
  var url = req.url.slice(9)
  if(!testUrl(url)){
    res.render('invalidurl.ejs');
  }else{

    Url.find({}, function(err, urls) {
      if (err) throw err;
      var obj = {};
      obj.original_url = url;
      obj.short_url = urls.length + 1;
      var newUrl = new Url(obj);
      newUrl.save(function(err, newUrl) {
        if(err){
          console.log(err);
        }else{
          console.log('Your record has saved.');
        }
      });
      res.json(obj);
    });
  }
});

router.get('/api/results', function(req, res, next) {
  Url.find({}, function(err, urls) {
    if (err) throw err;

    // object of all the urls
    res.json(urls);
  });
});

router.get('/:short', function(req, res, next) {
  var id = req.params.short;
  Url.findOne({short_url: id}, function(err, short) {
    if(err){ return next(err); }
    res.redirect(short.original_url);
  })
});

module.exports = router;
