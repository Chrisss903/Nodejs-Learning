const express = require('express');
const app = express();

// Middleware to parse incoming JSON request bodies
app.use(express.json());

// POST endpoint
app.get('/', (req, res) => {
  const { username, password } = req.body;  // Now it's a JavaScript object
  res.send(`Received login request for ${username} with password: ${password}`);
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
