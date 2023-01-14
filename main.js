var createError = require('http-errors'); // npm install http-errors --save-dev
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser'); // npm install cookie-parser --save-dev

var logger = require('morgan');  // npm i morgan --save-dev

const { usersRouter, myLogger } = require('./routers/router');
// const { pageRouter } = require('./routers/router_index')
const { fileRouter } = require('./routers/router_html')
const { errorRouter, /*creatingError, creatingError2 */ } = require('./utils/errorhandler')
// 'creatingError': creatingError, creatingError2: creatingError2

// require routers\cockies.js
const { 
  localVariableRouter, 
  CockiesSession, 
  responseVariable,
  setAppLocalVariable
} = require('./routers/cockies')




var app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

// view engine setup
// app.set('views', path.join(__dirname, './views'));
// app.set('view engine', 'jade'); // npm install --save express jade

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/image', express.static(path.join(__dirname, 'public/images')));
app.use('/static', express.static(path.join(__dirname, 'public')))


app.use(errorRouter)
// app.use(creatingError)
// app.use(creatingError2)


// GET
app.use('/homepage', usersRouter);
// console.log('GET: http://localhost:3000/');

// GET
app.use('/greeting/:name', usersRouter);
// console.log('GET: http://localhost:3000/');


// GET
app.use('/users', usersRouter);
// console.log('GET: http://localhost:3000/users');

// POST
app.use('/create', usersRouter);
// console.log('POST: http://localhost:3000/create');

// PUT
app.use('/edit', usersRouter);
// console.log('PUT: http://localhost:3000/edit');

// DELETE
app.use('/delete', usersRouter);
// console.log('DELETE: http://localhost:3000/delete');


// GET class with ID
app.use('/users/:id', usersRouter);
// console.log('GET class with ID: http://localhost:3000/users/:id');



// DOWNLOAD
app.use('/download', usersRouter);
// console.log('DOWNLOAD: http://localhost:3000/download');

// GET ALL
app.use('/next', usersRouter);
// console.log('NEXT: http://localhost:3000/next');


// GET SECRET KEY
app.use('/secret', usersRouter);
// console.log('SECRET KEY: http://localhost:3000/secret');


// ARRAY ROUTER HANDLER
app.use('/userarray/teacher', usersRouter);
// console.log('ARRAY ROUTER HANDLER: http://localhost:3000/userarray/teacher');


// student id request parems
app.use('/class/:id', usersRouter)
// console.log('STUDENT ID: http://localhost:3000/class/:id');


// CRUD HTTP
app.use('/crud/:id', usersRouter)
// console.log('CRUD HTTP: http://localhost:3000/crud/:2');

app.use('/items', usersRouter)

app.use('/itemsform', usersRouter)


// app.use('/data', usersRouter)
app.use('/contact', usersRouter)




app.use(myLogger)


app.use('/', fileRouter)


app.use('/about', fileRouter)

app.use('/contact', fileRouter)


app.use('/welcome', fileRouter)


app.use('/school', fileRouter)

app.use('/:newUser', usersRouter)

// app.use(CockiesSession)


var time = new Date();
var hr = time.getHours();
var min = time.getMinutes();
var sec = time.getSeconds();
app.locals.siteVariable = `${hr} : ${min} : ${sec}`


// app.use(responseVariable)

// app.locals.someVariable = 'MWAMUZISCODE';
setAppLocalVariable(app);


// app.use(localVariableRouter)



app.listen(8000, () => {
  console.log('Server started on port 3000 \n');
  // cancel?
  // console.log('TISHIRT IMAGE: http://localhost:3000/static/images/tshirt1.jpg');

});
