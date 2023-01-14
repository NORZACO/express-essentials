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

router.get('/', function (request, response, next) {
    const template_name = '../index.html'
    response.sendFile(path.join(__dirname, template_name))
});


const CockiesSession = function (request, response) {
    cookieSession({
        name: 'session',
        keys : "qwopresfdgmeryhweptu+er"
    })
}

// router.get('/about', function (request, response, next) {
//     let template_name = '../public/htmls/about.html'
//     response.sendFile(path.join(__dirname, template_name))
// });
// function responseVariable(req, res, next){
//     res.locals.someVariable = 'MWAMUZISCODE';
//     next();
// }
var count = 0
function setAppLocalVariable(app) {
    app.locals.someVariable = 'MWAMUZISCODE';
    app.locals.counter = count;


}


// export router
module.exports = {
    'localVariableRouter': router,
    // 'CockiesSession': CockiesSession,
    // 'responseVariable': responseVariable
    'setAppLocalVariable': setAppLocalVariable
}














// cockies session?
// router.get('/about', function (request, response, next) {
//     let template_name = '../public/htmls/about.html'
//     response
//         .cookie('name', 'tobi', { domain: '.example.com', path: '/admin', secure: true })
//         .cookie('rememberme', '1', { expires: new Date(Date.now() + 900000), httpOnly: true })
//         .sendFile(path.join(__dirname, template_name))
// });