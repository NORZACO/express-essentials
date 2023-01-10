const express = require('express');
const router = express.Router();
const data = require('../data/mocking.json');



// GET ALL
router.get('/', (request, response) => {
    response.send('Get List of all users');
})



// GET ALL
router.get(
    '/next',
    (request, response, next) => {
        console.log('Response will be send by the next function');
        next();
    }, (request, response) => {
        response.send('This is the next function CALLBACK');
    })


// GET
router.get('/users', (request, response) => {
    // response.send('List of all users');
    response.json(data);
})



// GET class with ID
router.get('/users/:id', (request, response) => {
    const studentID = Number(request.params.id)
    const student = data.filter((student) => student.id === studentID);
    response.json(student);
});


// POST
router.post('/create', (request, response) => {
    response.send(`Details of user /create`);
});


// PUT
router.put('/edit', (request, response) => {
    response.send(`Details of user edit`);
});


// DELETE
router.delete('/delete', (request, response) => {
    response.send(`Details of user delete`);
});

// DOWNLOAD
router.get('/download', (request, response) => {
    response.download('public/images/1.jpg');
});


// REDIRECT
router.get('/redirect', (request, response) => {
    response.redirect('http://127.0.0.1:3000/users/10');
});


// rout and get?|


































module.exports = {
    'usersRouter': router
}
