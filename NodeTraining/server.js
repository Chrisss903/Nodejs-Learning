import express from 'express'
import mysql from 'mysql2'

var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    port: '3306'
})

con.connect((function (err) {
    if (err) {
        console.log(err)
    }
    else {
        console.log("DB connected")
    }
}))