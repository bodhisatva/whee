var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/', function(req, res) {
  res.render('index', {'title' : 'Whee', 'keywords': 'Protomatkajuttu'});
});

module.exports = router;
