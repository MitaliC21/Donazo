const express = require('express')
const ejsMate = require('ejs-mate')
const path = require('path')
const morgan = require('morgan')
const methodOverride = require('method-override')
const favicon = require('serve-favicon')
const database = require('./database/model/dbServer')
const { resolveSoa } = require('dns')
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
    database.query(`INSERT INTO donars(fName, email, bGroup, age, city, state) VALUES('${req.body.fName}','${req.body.email}', '${req.body.bGroup}', ${req.body.age},'${req.body.city}', '${req.body.state}');`, function (err, rows) {
        if (err) {
            const jsscript = undefined;
            const stylesheet = "css/notfound.css";
            res.render('pages/notfound', { stylesheet, jsscript });
        }
        else {
            const stylesheet = "css/success.css";
            const jsscript = "js/success.js";
            res.render('pages/success', { stylesheet, jsscript });
        }
    });

});

app.get('/receive', (req, res) => {
    const stylesheet = "css/receive.css";
    const jsscript = "js/receive.js"
    res.render('pages/receive', { stylesheet, jsscript });
});


app.post('/receive', (req, res) => {
    database.query(`SELECT bGroup,fName,age, _id FROM donars where bGroup = '${req.body.q}';`, function (err, rows) {
        if (err) {
            const jsscript = undefined;
            const stylesheet = "css/notfound.css";
            res.render('pages/notfound', { stylesheet, jsscript });
        } else {
            res.send(rows);
        }
    })
});
app.delete('/receive', (req, res) => {
    database.query(`INSERT INTO receivers(fName, email, bGroup, age, city, state) VALUES('${req.body.fName}','${req.body.email}', '${req.body.bGroup}', ${req.body.age},'${req.body.city}', '${req.body.state} \n DELETE FROM donars [WHERE _id = ${req.body.id}]');`, function (err, rows) {
        if (err) {
            const jsscript = undefined;
            const stylesheet = "css/notfound.css";
            res.render('pages/notfound', { stylesheet, jsscript });
        }
        else {
            const stylesheet = "css/success.css";
            const jsscript = "js/success.js";
            res.render('pages/success', { stylesheet, jsscript });
        }
    });
    res.send(req.body)
})

app.post('/show', (req, res) => {
    database.query(`SELECT bGroup, fName, email, age, _id, state, city FROM donars where _id = '${req.body._id}';`, function (err, rows) {
        if (err) {
            const jsscript = undefined;
            const stylesheet = "css/notfound.css";
            res.render('pages/notfound', { stylesheet, jsscript });
        } else {
            const stylesheet = "css/details.css"
            const jsscript = "js/details.js"
            console.log({ rows });
            res.render("pages/details", { stylesheet, jsscript, rows });
        }
    })
});

app.get('/:anything', (req, res) => {
    const jsscript = undefined;
    const stylesheet = "css/notfound.css";
    res.render('pages/notfound', { stylesheet, jsscript });
});

app.listen(3000, () => {
    console.log("listening on port 3000")
})