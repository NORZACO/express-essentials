var createError = require('http-errors');
var express = require('express');
// router
const router = express.Router()
// var path = require('path');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');




// // error handler
router.get(function (error, request, response, next) {
    console.error(error.stack)
    response.status(500).send('Something broke!')
})



// catch 404 and forward to the error handler
const creatingError = (function (req, res, next) {
    next(createError(404));
});


// error handler
const creatingError2 = (function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.router.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
})

router.get([creatingError, creatingError2])



module.exports = {
    'errorRouter': router,
    // 'creatingError': creatingError,
    // creatingError2: creatingError2

}
