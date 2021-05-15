const express = require('express')
const ejsMate = require('ejs-mate')
const path = require('path')
const morgan = require('morgan')
const methodOverride = require('method-override')
const mysql = require('mysql')
const app = express()

app.engine('ejs', ejsMate)

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(morgan('dev'))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

app.get('/', (req, res) => {
    res.render('layouts/boilerplate');
});

app.post('/', (req, res) => {
    res.send("Post route")
});

app.put('/', (req, res) => {
    res.send("Put route")
});

app.delete('/', (req, res) => {
    res.send("delete route")
});

app.listen(3000, () => {
    console.log("listening on port 3000")
})