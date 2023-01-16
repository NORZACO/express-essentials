// // alert("hello world")
// // prompt("HELLO MR", "MWAMUZI")
// // confirm("ARE YOU SURE YOU WANT TO DELETE THIS FILE")

// // const socket = io();
// // const  { io } = require("socket.io-client");


// // const socket = io('http://localhost:3000');

// // const socket = io('http://localhost:3000', {
// //   withCredentials: true,
// //   extraHeaders: {
// //     "my-custom-header": "abcd"
// //   }
// // });

// const socket = io()
// const firstAlert = () => {
//   var elAlert = document.getElementById("firstAlert");
//   elAlert.addEventListener('click', function () {
//     alert('TARAAAAH')
//   })
// }
// firstAlert()





// // initialize socket connection


// // log server message data to the console
// socket.on('server message', (data) => {
//   console.log(data);
// });

// // get form and input elements
// var form = document.getElementById('form');
// var input = document.getElementById('input');

// // handle form submission
// form.addEventListener('submit', function (e) {
//   e.preventDefault();
//   if (input.value) {
//     // emit chat message event with input value as data
//     socket.emit('chat message', input.value);
//     // clear input field
//     input.value = '';
//   }
// });

// // handle chat message event and append to message list
// socket.on('chat message', function (msg) {
//   var item = document.createElement('li');
//   item.textContent = msg;
//   messages.appendChild(item);
//   window.scrollTo(0, document.body.scrollHeight);
// });
