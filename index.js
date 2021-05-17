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

app.use(express.static(path.join(__dirname, 'public')))
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(methodOverride('_method'))
app.use(favicon(path.join(__dirname, 'public/images/favicon.png')))

app.get('/', (req, res) => {
    const stylesheet = "css/home.css";
    const jsscript = "js/home.js"
    res.render('pages/home', { stylesheet, jsscript });
});

app.get('/donate', (req, res) => {
    const stylesheet = "css/donate.css";
    const jsscript = "js/donate.js"
    res.render('pages/donate', { stylesheet, jsscript });
});

app.post('/donate', (req, res) => {
    const stylesheet = "css/success.css";
    const jsscript = "js/success.js"
    res.render('pages/success');
});

app.get('/recieve', (req, res) => {
    const stylesheet = "css/receive.css";
    const jsscript = "js/receive.js"
    res.render('pages/recieve', { stylesheet, jsscript });
});


app.post('/receive', (req, res) => {
    res.send({ "name": "Piyush Terkar" })
});

app.delete('/receive/show', (req, res) => {
    res.send("delete route")
});

app.get('/:anything', (req, res) => {
    const stylesheet = "css/notfound.css";
    res.render('pages/notFound', { stylesheet });
});

app.listen(3000, () => {
    console.log("listening on port 3000")
})