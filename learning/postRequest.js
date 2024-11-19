const express = require('express');
const app = express();

// Middleware to parse JSON
app.use(express.json());  // This is required to read the body of the request

const orders = [
    { "id": 1, "item": "Laptop", "quantity": 1, "address": "123 Main St" },
    { "id": 2, "item": "Phone", "quantity": 2, "address": "456 Elm St" }
];

// GET route to fetch orders
app.get('/', (req, res) => {
    res.json(orders);  // Send the 'orders' array as a JSON response
});

// POST route to add a new order
app.post('/', (req, res) => {
    const newOrder = req.body;  // The new order data from the request body
    orders.push(newOrder);      // Append the new order to the orders array
    res.status(201).json(newOrder);  // Respond with the newly added order
});

// Start the server
app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});
