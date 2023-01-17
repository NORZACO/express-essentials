const express = require('express');
const app = express();
const http = require('http');
const path = require('path');
const createError = require('http-errors'); // npm install http-errors --save-dev
const cookieParser = require('cookie-parser'); // npm install cookie-parser --save-dev
const { Server } = require("socket.io");

// const admin = io.of("/admin");
const admin = io.of("/admin");


const server = http.createServer(app);
const socketIO = new Server(server);
var logger = require('morgan');  // npm i morgan --save-dev
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.set('view engine', 'ejs'); // render te ejs template
app.use(express.static(path.join(__dirname, 'public')));


const PORT = process.env.PORT || 8000

app.get('/', (request, response) => {
  response.sendFile(__dirname + '/public/htmls/index_test.html');
});




















server.listen(8000, () => {
  console.log('The server is listening on Port:', PORT, '\n');
});

