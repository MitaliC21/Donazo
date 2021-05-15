const express = require('express')
const ejsMate = require('ejs-mate')
const path = require('path')
const morgan = require('morgan')
const methodOverride = require('method-override')
const mysql = require('mysql')
const favicon = require('serve-favicon')
const app = express()

app.engine('ejs', ejsMate)

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(morgan('dev'))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
app.use(favicon(path.join(__dirname, 'public/images/favicon.png')))

app.get('/', (req, res) => {
    res.render('pages/home');
});

app.get('/donate', (req, res) => {
    res.render('pages/donate');
});

app.post('/', (req, res) => {
    res.send("Post route")
});

app.get('/recieve', (req, res) => {
    res.render('pages/recieve');
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