const express = require('express');
const app = express()
// const data = require('../data/mocking.json');
const { listen } = require('../utils/errorhandler');



// GET ALL
app.route('/testing')
    .get((request, response) => {
        response.send('Get List of all users');
    })













app.listen(8000, () => {
    //   console.log('Server started on port 3000\n');
    //   console.log('Open http://localhost:3000/users to see the tasks');
    //   console.log('Open http://localhost:3000/users/1 to see the details of a specific task');
    //   console.log('Open http://localhost:3000/users/1/complete to see the details of a specific task');
});
