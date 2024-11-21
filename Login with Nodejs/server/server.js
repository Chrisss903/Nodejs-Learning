const express = require('express')
const Db = require('./db')
const dotenv = require('dotenv')
const app = express()
const USER_ID = 34567
app.use(express.json())

// Serve static files from the "public" directory
app.use(express.static('public'));

app.get('/login', (req, res) => {
    res.sendFile('C:\\Nodejs learning\\Login with Nodejs\\public\\index.html');
});

app.get('/Signup', (req, res) => {
    res.sendFile('C:\\Nodejs learning\\Login with Nodejs\\public\\Signup.html');
});


app.post('/login', (req, res) => {
    const { email, password } = req.body;
    Db.query('SELECT * FROM users WHERE email = ? AND password = ?', [email, password], (err, result) => {
        if (err) return res.status(500).json({ success: false, message: 'Server error' });

        if (result.length > 0) {
            return res.status(200).json({ success: true, message: 'Login successful!' });
        } else {
            return res.status(401).json({ success: false, message: 'Invalid credentials. Please signup.' });
        }
    });
});

app.post('/Signup', (req, res) => {
    const { name, email, password } = req.body;

    // Insert user into the database
    const query = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
    Db.query(query, [name, email, password], (err, result) => {
        if (err) {
            console.log(err);
            return res.status(400).json({ success: false, message: 'Bad Request' });
        }
        res.status(201).json({ success: true, message: 'User registered successfully' });
    });
});

app.listen(3000, () => {
    console.log("The server is running at http://localhost:3000/login");

});
console.log(dotenv.USER_ID)