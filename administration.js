const express = require('express');
const app = express();
const http = require('http');
const path = require('path');
const fs = require('fs');
const createError = require('http-errors'); // npm install http-errors --save-dev
const cookieParser = require('cookie-parser'); // npm install cookie-parser --save-dev
const { Server } = require('socket.io');

const server = http.createServer(app);
const socketIO = new Server(server);
var logger = require('morgan'); // npm i morgan --save-dev
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.set('view engine', 'ejs'); // render te ejs template
app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 8000;

// tech school admin namespace
const tech = socketIO.of('/tech');
const school = socketIO.of('/school');
const admin = socketIO.of('/admin');
//-----------------socket.io-----------------

app.get('/', (request, response) => {
  let filePath = __dirname + '/public/htmls/administration.html';
  if (!fs.existsSync(filePath)) {
    console.log('File not found, creating a new file...');
    fs.writeFileSync(filePath, '');
  }
  response.sendFile(filePath);
});

app.get('/tech', (request, response) => {
  let filePath = __dirname + '/public/htmls/tech.html';
  if (!fs.existsSync(filePath)) {
    console.log('File not found, creating a new file...');
    fs.writeFileSync(filePath, '');
  }
  response.sendFile(filePath);
});

app.get('/admin', (request, response) => {
  let filePath = __dirname + '/public/htmls/admin.html';
  if (!fs.existsSync(filePath)) {
    console.log('File not found, creating a new file...');
    fs.writeFileSync(filePath, '');
  }
  response.sendFile(filePath);
});

app.get('/school', (request, response) => {
  let filePath = __dirname + '/public/htmls/school.html';
  if (!fs.existsSync(filePath)) {
    console.log('File not found, creating a new file...');
    fs.writeFileSync(filePath, '');
  }
  response.sendFile(filePath);
});

// tech.on('connection', (socket) => {
//     console.log(`<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>
//     | User id ----- ${socket.id} <><><>|  | Status ----> Succefull Connected..     |
//     <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>`);
//     // socket.emit('server message', { message: "Hello, You are using the chat message event! [-connection-]" });
//     socket.on('chat message', (message) => {
//         console.log('message', message);
//         tech.emit('chat message', message);
//     });

//     socket.on('disconnect', () => {
//         console.log(` | User id ----- ${socket.id} <><><>|  | Status ----> disconnected Connected..|`);
//         tech.emit('chat message', { message: `User ${socket.id} has left the chat` }
//         )
//     });
// });

function Noroff_ROOM() {
  admin.on('connection', (socket) => {
    console.log(`User id ---> Connected..`);
    socket.on('join', (data) => {
      socket.join(data.rommet);
      admin.in(data.rommet).emit('message', `New user joined ${data.rommet} room!`);
    });

    socket.on('message', (data) => {
      admin.in(data.rommet).emit('message', data.message);
    });

    socket.on('disconnect', () => {
      admin.emit('message', 'user disconnected');
      console.log(`User id ----> User Disconnected..|`);
    });
  });
}
Noroff_ROOM();


function Tech_ROOM() {
  tech.on('connection', (socket) => {
    console.log(`   --------------------- Tech User Connected --------------------------`);
    socket.on('message', (dataMessage) => {
      console.log(`message: ${dataMessage}`);
      tech.emit('message', dataMessage);
    });

    socket.on('disconnect', () => {
      console.log(` Tech-User Disconnected..|`);

      tech.emit('message', 'user disconnected');
    });
  });
}
// Tech_ROOM
// Tech_ROOM();

// join a room
function joinRoom() {
  tech.on('connection', (socket) => {
    socket.on('join', (data) => {
      socket.join(data.room);
      tech.in(data.room).emit('message', `New user joined ${data.room} room!`);
    });

    socket.on('message', (data) => {
      console.log('message', data.message);
      tech.in(data.room).emit(`message : ${data.message}`);
    });


    socket.on('disconnect', () => {
        console.log(`   --------------------- Tech User Connected --------------------------`);
        tech.emit('message', 'user disconnected');
        });
    });
}
joinRoom();

function School_ROOM() {
  school.on('connection', (socket) => {
    console.log(`School User ---> connected Connected..|`);
    socket.on('message', (data) => {
      console.log('data', data);
      school.emit('message', data);
    });
    socket.on('disconnect', () => {
      school.emit('chat message', 'user disconnected');
      console.log(`School user ----> User Disconnected..|`);
    });
  });
}

server.listen(PORT, () => {
  console.log(
    `\n----------------------- Server is running on PORT ${PORT} ------------------------\n`
  );
});
