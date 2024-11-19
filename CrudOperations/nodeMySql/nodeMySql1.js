var mysql = require('mysql2')

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    port: 3306
})


var createQry = 'Create table if not exists softsuave(id int , name varchar(20))'

var insertQry = 'Insert into students values(700,"mibi")'

var readQry = 'Select * from students'

var updateQry = 'Update students set name="student" '


con.connect((err, result) => {
    if (err) throw err
    console.log('Database is Connected')

    con.query('USE sampleDb', (err, result) => {
        console.log('Database is used')


        con.query(createQry, (err, result) => {
            if (err) throw err
            console.log('Table is Created')

            con.query(insertQry, (err, result) => {
                if (err) throw err
                console.log('A field is inserted')

                con.query(readQry, (err, result) => {
                    if (err) throw err
                    console.log(result)

                    con.query(updateQry, (err, result) => {
                        if (err) throw err
                        console.log(result)

                    })
                })
            })

        })

    })

})

