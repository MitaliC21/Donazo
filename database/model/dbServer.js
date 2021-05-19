const mysql = require('mysql')

const database = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'donazo'
})

database.connect(function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log("Database connected")
    }
})

const Database = {}
Database.constructor = function (req) {
    this.fName = req.fName,
        this.email = req.email,
        this.bGroup = req.bGroup,
        this.age = req.age,
        this.state = req.state,
        this.city = req.city
}
module.exports = database;