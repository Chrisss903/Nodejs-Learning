const express = require('express');
const app = express(); // Initialize Express

app.get('/', (req, res) => {
    res.end('This is the HomePage');
})

app.get('/about', (req, res) => {
    res.end('This is the About Page');
});

app.get('/contact', (req, res) => {
    res.end('Contact us at: express@nodejs.com');
});

app.get('/services', (req, res) => {
    res.end('Our services include Web Development, APIs, and more!');
});

app.get('/greet/:name', (req, res) => {
    const userName = req.params.name; // Extract name from URL
    res.send(`Hello, ${userName}! Welcome to Express.js.`);
});


app.get('/products', (req, res) => {
    const category = req.query.category; // Get query parameter
    if (category) {
        res.send(`Showing products for category: ${category}`);
    } else {
        res.send('No category specified. Showing all products.');
    }
});


// Start the Server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
