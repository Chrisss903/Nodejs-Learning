const express = require('express')
const app = express()

app.use((req, res, next) => {
    const currentTime = new Date().toISOString();
    console.log(`${currentTime} user logged now`)
    next()
})

app.get('/', (req, res) => {
    res.write("The user is logged in")
    res.end()
})

app.get('/error', (req, res) => {
    throw new Error()
})

app.use((error, req, res, next) => {
    console.log(`${error} for the respone ${req}`)
    res.status(500).send({  // Send a proper error response
        error: 'Internal Server Error',
        message: error.message
    });

})


app.listen(3000, () => {
    console.log("The server is running in http://localhost:3000")
})
