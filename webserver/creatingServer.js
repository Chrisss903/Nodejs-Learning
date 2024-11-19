const http = require('http')

const runModule = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('ContentType', 'plain/text')
    res.end("This is the Web Server")
})

runModule.listen(3000, () => {
    console.log('The server is running in http://localhost:3000/');
})