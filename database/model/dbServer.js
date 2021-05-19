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

const insert = (data) => {
    console.log(`
    
    inserting ${data.fName} ${data.email} ${data.bGroup} ${data.age} ${data.state}
    ${data.city}into donars
    
    `)
}

const search = (data) => {
    console.log(`
    
    Searching for ${data.q} in inventory
    
    `)
}

const update = (data) => {
    console.log(`
     data for ${data.fName} updated
    `)
}
const remove = (data) => {
    console.log(`
    
    data ${data.bGroup} removed
    
    `)
}

module.exports = { database, insert, search, remove, update }