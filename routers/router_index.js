const { response } = require('express');
const express = require('express');
const router = express.Router();
const path = require('path');
const data = require('../data/mocking.json');



/* GET home page. */
router.get('/', function (req, res, next) {
  res.sendFile(path.join(__dirname, '..', 'index.html'))
});



/* GET home page. */
router.get('/contact', function (req, res, next) {
  res.render('index', { title: 'Express' });
});


// greeting page
// router.get('/greeting', function(request, response, next){
//     console.log('hellp world');
//     next()
// }, (response, response) => {
//     response.send('Hello ')
// })






//   module.exports = {
//     'pageRouter': router,
// }
