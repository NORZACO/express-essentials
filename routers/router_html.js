var express = require('express');
var path = require('path');
/* GET home page. */

var router = express.Router();
router.use(express.static(path.join(__dirname, '..')));
// router.use(express.static(path.join(__dirname, '../public/stylesheets')));

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../', 'index.html'))
});

/* GET home page. */
router.get('/about', function(req, res, next) {
    res.sendFile(path.join(__dirname, '../public/htmls/about.html'))
  });

module.exports = {
    'fileRouter' : router
}