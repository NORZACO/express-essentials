var express = require('express');
var path = require('path');


// app
var app = express();


// routing
app
    .route('/data')
    .get(function (request, response) {
        response.send('GET request to the homepage');
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




// listen
app.listen(8000, function () {
    console.log('Example app listening on port 3000!');
})