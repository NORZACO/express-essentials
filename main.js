var createError = require('http-errors'); // npm install http-errors --save-dev
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser'); // npm install cookie-parser --save-dev

var logger = require('morgan');  // npm i morgan --save-dev

const { usersRouter, myLogger } = require('./routers/router');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade'); // npm install --save express jade

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/image', express.static(path.join(__dirname, 'public/images')));
app.use('/static', express.static(path.join(__dirname, 'public')))
let appImage = path.join(__dirname, 'public')
console.log(appImage);






// GET
app.use('/', usersRouter);
console.log('GET: http://localhost:3000/');

// GET
app.use('/users', usersRouter);
console.log('GET: http://localhost:3000/users');
// POST
app.use('/create', usersRouter);
console.log('POST: http://localhost:3000/create');

// PUT
app.use('/edit', usersRouter);
console.log('PUT: http://localhost:3000/edit');

// DELETE
app.use('/delete', usersRouter);
console.log('DELETE: http://localhost:3000/delete');


// GET class with ID
app.use('/users/:id', usersRouter);
console.log('GET class with ID: http://localhost:3000/users/:id');



// DOWNLOAD
app.use('/download', usersRouter);
console.log('DOWNLOAD: http://localhost:3000/download');

// GET ALL
app.use('/next', usersRouter);
console.log('NEXT: http://localhost:3000/next');


// GET SECRET KEY
app.use('/secret', usersRouter);
console.log('SECRET KEY: http://localhost:3000/secret');


// ARRAY ROUTER HANDLER
app.use('/userarray/teacher', usersRouter);
console.log('ARRAY ROUTER HANDLER: http://localhost:3000/userarray/teacher');





// student id request parems
app.use('/class/:id', usersRouter)
console.log('STUDENT ID: http://localhost:3000/class/:id');




// CRUD HTTP
app.use('/crud/:id', usersRouter)
console.log('CRUD HTTP: http://localhost:3000/crud/:2');

app.use('/items', usersRouter)

app.use('/itemsform', usersRouter)


// error response, request, next
app.use((err, request, response, next) => {
    console.error(err.stack);
    response.status(500).send('Something went wrong');
});


// app.use('/data', usersRouter)



// error handler
app.use(function (error, request, response, next) {
    console.error(error.stack)
    response.status(500).send('Something broke!')
})



// catch 404 and forward to the error handler
app.use(function(req, res, next) {
    next(createError(404));
  });


// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    // render the error page
    res.status(err.status || 500);
    res.render('error');
  });



app.use(myLogger)
















app.listen(3000, () => {
    //   console.log('Server started on port 3000\n');
    console.log('TISHIRT IMAGE: http://localhost:3000/static/images/tshirt1.jpg');

});
