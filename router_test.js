const express = require('express');
const app = express();
const http = require('http');
const path = require('path');
const server = http.createServer(app);
const { Server } = require("socket.io");
const InputOutput = new Server(server);

app.set('view engine', 'ejs'); // render te ejs template
var createError = require('http-errors'); // npm install http-errors --save-dev
var cookieParser = require('cookie-parser'); // npm install cookie-parser --save-dev
var logger = require('morgan');  // npm i morgan --save-dev
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// app.use('/image', express.static(path.join(__dirname, 'public/images')));
// app.use('/javascripts', express.static(path.join(__dirname, 'public/javascripts')))
app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.static('public'));


// app.use(express.static(path.join(__dirname, '/public')));

app.get('/', (req, res) => {
  let template_name = 'index_test'
  //render template_name?
  // res.render(template_name, { title: 'Express' });

  res.sendFile(path.join(__dirname ,'.',  'public/htmls/index_test.html'));
});

// console.log(path.join(__dirname))
// InputOutput.on('connection', (socket) => {
//   console.log('a user connected');
//   console.log(`userID ------ ${socket.id} -----`);
// });

InputOutput.on('connection', (socket) => {
  console.log(`a user with id --- ${socket.id} --- connected`);
  socket.on('chat message', (msg) => {
    console.log(`message: ${msg}`);
    InputOutput.emit('message', msg)
  })

  socket.on('disconnect', () => {
    console.log('user disconnected');
    
  }
  );
})


// InputOutput.on('connection', (socket) => {
//   socket.emit('server message', { server: 'any messages for me?' });
//   socket.on('chat message', (msg) => {
//     console.log('message: ' + msg);
//   });
// });


InputOutput.on('connection', (socket) => {
  socket.on('chat message', (msg) => {
    InputOutput.emit('chat message', msg);
  });
});

// InputOutput.on('connection', (socket) => {
//   console.log('loading.............');
//   // socket.emit('server message', { server: 'any messages for me?'});
//   socket.on('chat message', (msg) => {
//     InputOutput.emit(`message: ${msg}`);
//   });
// });

// InputOutput.on('connection', (socket) => {
//   let context = { server: 'any messages for me?' }
//   socket.emit('server message', context);
// });

server.listen(3000, () => {
  console.log('listening on *:3000');
});
