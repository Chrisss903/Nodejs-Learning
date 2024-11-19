const express = require('express')
const app = express()

app.use(express.json())

app.use((req, res, next) => {
    if (req.body.conatins(username) && req.body.contains(email) && req.body.contains(password)) {

    }
    else {
        res.statusCode = 404;
    }
})

app.get('/', (req, res) => {
    res.send()
})

app.listen(3000, () => {
    console.log("the server is running in http://localhost:3000")
})