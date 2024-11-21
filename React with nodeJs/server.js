const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// MySQL connection
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root", // Replace with your MySQL root password
    database: "test_db", // Replace with your database name
});

db.connect((err) => {
    if (err) {
        console.error("Database connection failed:", err.stack);
        return;
    }
    console.log("Connected to MySQL database");
});

// API endpoint to save phone number
app.post("/api/phone", (req, res) => {
    const { phone } = req.body;

    if (!phone) {
        return res.status(400).json({ error: "Phone number is required" });
    }

    const sql = "INSERT INTO phone_numbers (phone) VALUES (?)";
    db.query(sql, [phone], (err, result) => {
        if (err) {
            console.error("Error inserting phone number:", err);
            return res.status(500).json({ error: "Database error" });
        }
        res.status(200).json({ message: "Phone number saved successfully!" });
    });
});

// Start server
app.listen(5000, () => {
    console.log("Server is running on port 5000");
});
