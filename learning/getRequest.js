const express = require('express')
const app = express()

const products = [{ "id": "1", "username": "chris" }, { "id": "32", "username": "chris" }]

app.get('/', (req, res) => {
    res.json((products))
})


app.listen(3000, () => {
    console.log("server is running")
})