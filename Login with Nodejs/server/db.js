const mysql = require('mysql2')

const dotenv = require('dotenv');
dotenv.config();

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    port: 3306
})

con.connect((err, result) => {
    if (err) throw err
    console.log('DB is connected')

    con.query('use userdb', (err, result) => {
        if (err) throw err
    })
})

module.exports = con