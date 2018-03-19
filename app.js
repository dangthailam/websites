const express = require('express');
const path = require('path');
const app = express();
const mongoose = require('mongoose');

const Business = require('./models/business');

mongoose.connect('mongodb://localhost/business-website');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res, next) => {
    Business.find({}, (err, businesses) => {
        if (err) return next(err);

        res.render('pages/index', {
            websites: businesses
        });
    });
});

app.post('/', (req, res, next) => {
    Business.create(new Business(req.body), (err) => {
        if(err) return next(err);

        res.redirect('/');
    });
});

app.get('/add-business', function (req, res) {
    res.render('pages/add-business');
});

app.get('/add-website', function (req, res) {
    res.render('pages/add-website');
});

app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.listen(8091);