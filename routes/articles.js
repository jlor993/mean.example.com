var express = require('express');
var router = express.Router();
var Articles = require('../models/articles');

router.get('/', function(req, res, next) {
  res.render('articles/index', { title: 'Articles' });
});

router.get('/:slug', function(req, res, next) {
  res.render('articles/view', { title: 'View Article' });
});

router.get('/app', function(req, res, next) {
  res.render('articles/app', { title: 'Manage Articles' });
});

module.exports = router;