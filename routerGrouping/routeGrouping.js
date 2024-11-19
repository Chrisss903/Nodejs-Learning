const express = require('express')
const app = express()
const router = express.Router()

router.get('/', (req, res) => {
    res.send('This is Home Page')
})

router.get('/about', (req, res) => {
    res.send('This is about Page')
})

router.get('/contact', (req, res) => {
    res.send('This is contact Page')
})

app.use('/user', router)

app.listen(3000, () => {
    console.log('This is on the server http://localhost:3000/')
})