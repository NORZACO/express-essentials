const express = require('express');
const path = require('path');
const fs = require('fs');

const { usersRouter } = require('./routers/router');



const app = express();


// GET IMAGES /image
app.use('/image', express.static('public/images'));
app.use(express.static(path.join(__dirname, 'public')));







// GET
app.use('/', usersRouter);

// GET
app.use('/users', usersRouter);
// POST
app.use('/create', usersRouter);

// PUT
app.use('/edit', usersRouter);

// DELETE
app.use('/delete', usersRouter);


// GET class with ID
app.use('/users/:id', usersRouter);













app.listen(3000, () => {
    //   console.log('Server started on port 3000\n');
    //   console.log('Open http://localhost:3000/users to see the tasks');
    //   console.log('Open http://localhost:3000/users/1 to see the details of a specific task');
    //   console.log('Open http://localhost:3000/users/1/complete to see the details of a specific task');
});
