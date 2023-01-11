




// // error handler
app.use(function (error, request, response, next) {
    console.error(error.stack)
    response.status(500).send('Something broke!')
})
