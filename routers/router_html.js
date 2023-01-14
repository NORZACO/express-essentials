var express = require('express');
var path = require('path');
const data = require('../data/mocking.json');
const FeedbackService = require('../services/feedbackService')
/* GET home page. */

var router = express.Router();
router.use(express.static(path.join(__dirname, '..')));
// router.use(express.static(path.join(__dirname, '../public/stylesheets')));
// const feedbackService = new FeedbackService(data)

/* GET home page. */
router.get('/', function (req, res, next) {
  const template_name = '../index.html'
  res.sendFile(path.join(__dirname, template_name))
});

/* GET home page. */
router.get('/about', function (req, res, next) {
  let template_name = '../public/htmls/about.html'
  res.sendFile(path.join(__dirname, template_name))
});


/* GET contact page. */
router.get('/contact', function (req, res, next) {
  let directoryPath = path.join(__dirname)
  let template_name = '../public/htmls/contact.html'
  res.sendFile(directoryPath, template_name)
});

/* GET welcome page. */
router.get('/welcome', function (request, response, next) {
  let filePath = 'pages/index'
  let context = {
    pageTitle: 'Welcome to Express',
    newUser: request.params.newUser
  }
  response.render(filePath, context);
});


/* GET welcome page. */
router.get('/welcome/:newUser', function (request, response, next) {
  let filePath = 'pages/index'
  let context = {
    pageTitle: 'Welcome to Express',
    newUser: request.params.newUser
  }
  response.render(filePath, context);
});



/* GET contact page. */
router.get('/school', function (req, res, next) {
  const template_name = 'pages/noroff_index'
  const context = { pageTitle: 'Noroff School of Technology and Digital Media', }
  res.render(template_name, context)
});



/* GET contact page. */
router.get('/layout', function (req, res, next) {
  const template_name = 'partials/mainpage'
  const context = { pageTitle: 'Noroff School of Technology and Digital Media', }
  res.render(template_name, context)
});

module.exports = {
  'fileRouter': router
}