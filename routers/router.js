const express = require('express');
const router = express.Router();
const data = require('../data/mocking.json');



// GET ALL
router.get('/homepage', (request, response) => {
    response.send('Get List of all users');
})

// GET ALL
router.get('/greeting/:name', (request, response, nextHandler) => {
    console.log('Waiting for the handler function');
    nextHandler()
}, (request, response) => {
    response.send(`hello ${request.params.name} !`)
})

// router.get('/:name', (req, res, next) => {
//     console.log('Handling request...');
//     next();
// }, (req, res) => {
//     res.send(`Hello, ${req.params.name}!`);
// });



// GET ALL
router.get('/next',
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
    const studentID = Number(request.params.id);
    const student = data.filter((student) => student.id === studentID);
    console.log(student);
    if (student) {
        response.json(student);
    } else {
        response.status(404).send('Student not found');
    }
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
router.get('/download', (request, response, printMessage) => {
    console.log('Download image.....');
    printMessage();
}
    , (request, response) => {
        response.download('public/images/2.jpg');
    });


// REDIRECT
router.get('/redirect', (request, response, printMessage) => {
    response.redirect('http://127.0.0.1:3000/users/10');
});


// rout and get?|

router.all('/secret', (request, response, next) => {
    console.log('Globall Accessing the secret section ...')
    next() // pass control to the next handler

})


// An array of callback functions can handle a route. For example:
const cb0 = function (request, response, next) {
    console.log('CB0')
    next()
}

const cb1 = function (request, response, next) {
    console.log('CB1')
    next()
}

const cb2 = function (request, response) {
    response.send('Hello from C!')
}

router.get('/userarray/teacher', [cb0, cb1, cb2])




// student id request parems
router.get('/class/:id', (request, response) => {
    console.log(request.params)
    response.send(`Details of user class id: ${request.params.id}`.toUpperCase())
})



// CRUD http?
router.get('/crud/:id', (request, response) => {
    response.send(`Retrieve data of user crud id: ${request.params.id}`.toUpperCase());
});


// CRUD http?
router.post('/crud/:id', (request, response) => {
    response.send(`Create of user crud id: ${request.params.id}`.toUpperCase());
});


// CRUD http?
router.put('/crud/:id', (request, response) => {
    // console.log(`Details of user crud id: ${request.params}`.toUpperCase());
    response.send(`Update of user crud id: ${request.params.id}`.toUpperCase());
});


// CRUD http?
router.delete('/crud/:id', (request, response) => {
    response.send(`Delete of user crud id: ${request.params.id}`.toUpperCase());
});



// using express json and express.urlncoded
/*
Headers: Content-Type
Value: application/json
Body:  {"'item" : "Salami from Sweden"}
*/
router.post('/items1', (request, response) => {
    let user = request.body;
    console.log(user);
    response.send(user);
});

/*
Headers:
Key:  Content-Type
Value: application/x-www-form-urlencoded
x-www-form-urlencoded:  {"'item" : "Salami from Sweden"}
*/
router.post('/items2', (request, response) => {
    let user = request.body;
    console.log(user);
    response.send(user);
});



router
    .route('/data')
    .get(function (request, response) {
        // response.send('GET request to the homepage');
        throw new Error();
    }
    )
    .post(function (request, response) {
        response.send('POST request to the homepage');
    }
    )
    .put(function (request, response) {
        response.send('PUT request to the homepage');
    }
    )
    .delete(function (request, response) {
        response.send('DELETE request to the homepage');
    }
    );


// {"userId": "34", "bookId": "8989"}
router.get('/:userId/books/:bookId', (req, res) => {
    res.send(req.params)
})



const myLogger = function (req, res, next) {
    console.log('LOGGED')
    next()
}



/* GET contact page. */
// router.get('/contact', function(req, res, next) {
//     res.render('main', { title: 'Express Learning ' });
//   });

router.get('/contact', function(req, res, next) {
    res.render('pages/contact', { title: 'MWAMUZISCODE' });
});



module.exports = {
    'usersRouter': router,
    'myLogger': myLogger
}
