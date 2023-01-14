const express = require('express');
const app = express();
const http = require('http');
const path = require('path');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

// app.use(express.static(path.join(__dirname, '/public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'index_test.html'));
});

io.on('connection', (socket) => {
  console.log('a user connected');
  console.log(`userID ------ ${socket.id} -----`);
});


io.on('connection', (socket) => {
  let context = {
    server: 'any messages for me?'
  }
  socket.emit('server message', context);
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});


