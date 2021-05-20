const express = require('express')
const ejsMate = require('ejs-mate')
const path = require('path')
const morgan = require('morgan')
const methodOverride = require('method-override')
const favicon = require('serve-favicon')
const database = require('./database/model/dbServer')
const { query } = require('./database/model/dbServer')
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
            console.log(err);
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




app.post('/show', (req, res) => {
    database.query(`SELECT bGroup, fName, email, age, _id, state, city FROM donars where _id = '${req.body._id}';`, function (err, rows) {
        if (err) {
            res.send(err);
        } else {
            res.send(rows);
        }
    })
});




app.get('/receive', (req, res) => {
    const stylesheet = "css/receive.css";
    const jsscript = "js/receive.js"
    res.render('pages/receive', { stylesheet, jsscript });
});


app.post('/receive', (req, res) => {
    database.query(`SELECT bGroup,fName,age, _id FROM inventory where bGroup = '${req.body.q}';`, function (err, rows) {
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
    database.query(`INSERT INTO receivers(_id, fName, email, bGroup, age, city, state) VALUES( ${req.body._id},'${req.body.fName}','${req.body.email}', '${req.body.bGroup}', ${req.body.age},'${req.body.city}', '${req.body.state}');
    `, function (err, rows) {
        if (err) {
            const jsscript = undefined;
            const stylesheet = "css/notfound.css";
            console.log(err);
            res.render('pages/notfound', { stylesheet, jsscript });
        }
        else {
            const stylesheet = "css/success.css";
            const jsscript = "js/success.js";
            res.render('pages/success', { stylesheet, jsscript });
        }
    });
})




app.get('/history', (req, res) => {
    database.query('SELECT * FROM receivers', function (err, rows) {
        if (err) {
            res.send("");
        } else {
            res.send(rows);
        }
    })
})


app.post('/history', (req, res) => {
    database.query(`SELECT bGroup, fName, email, age, _id, state, city FROM receivers where _id = '${req.body._id}';`, function (err, rows) {
        if (err) {
            res.send(err);
        } else {
            res.send(rows);
        }
    })
});



app.post('/details', (req, res) => {
    const stylesheet = "css/details.css"
    const jsscript = "js/details.js"
    const _id = req.body._id;
    res.render("pages/details", { stylesheet, jsscript, _id });
})

app.post('/histDetails', (req, res) => {
    const stylesheet = "css/histDetails.css"
    const jsscript = "js/histDetails.js"
    const _id = req.body._id;
    res.render("pages/histDetails", { stylesheet, jsscript, _id });
})




app.get('/report', (req, res) => {
    const stylesheet = "css/report.css"
    const jsscript = "js/report.js"
    res.render("pages/report", { stylesheet, jsscript });
})

app.post('/report', (req, res) => {
    switch (req.body.q) {
        case "r":
            database.query(`SELECT * FROM receivers;`, function (err, rows) {
                if (err) {
                    res.send(err);
                } else {
                    res.send(rows);
                }
            })
            break;
        case "d":
            database.query(`SELECT * FROM donars;`, function (err, rows) {
                if (err) {
                    res.send(err);
                } else {
                    res.send(rows);
                }
            })
            break;
        case "i":
            database.query(`SELECT * FROM inventory;`, function (err, rows) {
                if (err) {
                    res.send(err);
                } else {
                    res.send(rows);
                }
            })
            break;
    }
})




app.get('/:anything', (req, res) => {
    const jsscript = undefined;
    const stylesheet = "css/notfound.css";
    res.render('pages/notfound', { stylesheet, jsscript });
});



app.listen(3000, () => {
    console.log("listening on port 3000")
})