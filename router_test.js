const express = require('express');
const app = express();
const http = require('http');
const path = require('path');
const createError = require('http-errors'); // npm install http-errors --save-dev
const cookieParser = require('cookie-parser'); // npm install cookie-parser --save-dev
const { Server } = require("socket.io");


const server = http.createServer(app);
const socketIO = new Server(server);
var logger = require('morgan');  // npm i morgan --save-dev
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.set('view engine', 'ejs'); // render te ejs template
app.use(express.static(path.join(__dirname, 'public')));


const PORT = process.env.PORT || 8000;

//-----------------socket.io-----------------
// Generate a random number between 0 and 1
// const randomNumber = Math.random();

app.get('/', (request, response) => {
  // If the random number is less than 0.5, use the "chat message" event
  if (Math.random() < 0.5) {
    response.sendFile(__dirname + '/public/htmls/index_test.html');
    // socket.emit("chat message", { message: "Hello, I am using the chat message event!" });
  }
  // If the random number is greater than or equal to 0.5, use the "chat2 message" event
  else {
    response.sendFile(__dirname + '/public/htmls/contact.html');
    // socket.emit("chat2 message", { message: "Hello, I am using the chat2 message event!" });
  }
})



socketIO.on('connection', (socket) => {
  // Send a message to the client upon connection
  console.log(`
  <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>
  | User id ----- ${socket.id} <><><>|  | Status ----> Succefull Connected..     |
  <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>`);

  // Send a message to the client upon connection
  socket.emit('server message', { message: "Hello, You are using the chat message event! [-connection-]" });

  // Listen for 'chat message' events from the client and emit them to all connected clients
  socket.on('chat message', (message) => {
    socketIO.emit('chat message', message);
  });

  // Listen for 'chat2 message' events from the client and emit them to all connected clients
  socket.on('chat2 message', (message) => {
    socketIO.emit('chat2 message', message);
  });
});


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
})



function JoininNameSpace() {
  var socket = io('/tech');
  // submit
  $('form').submit(function () {
    // get the name
    var input = $('#inputID').val();
    // send the name to the server
    socket.emit('message', input);
    // clear the input
    $('#inputID').val('');
    // prevent the form from submitting
    return false;
  });

  socket.on('connect', function () {
    console.log('Connected to server');
    socket.emit('join', 'Hello server from client');
  });


  socket.on('message', function (message) {
    console.log('New message');
    // console.log(message.text);
    // add the message to the DOM
    $('#messages').append($('<li>').text(message));
  })
}
JoininNameSpace()



























server.listen(PORT, () => {
  console.log(`\n----------------------- Server is running on PORT ${PORT} ------------------------\n`);
});


