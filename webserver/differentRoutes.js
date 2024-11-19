const http = require('http');

const Servercreation = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain'); // Corrected header name

    if (req.url === '/') {
        res.end('Welcome to Homepage');
    }
    else if (req.url === '/About') {
        res.end('This is about page');
    }
    else {
        res.statusCode = 404;
        res.end('404 Not Found');
    }
});

Servercreation.listen(3000, () => {
    console.log('The Server is running in http://localhost:3000/');
});
