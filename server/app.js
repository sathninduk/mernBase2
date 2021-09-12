const express = require('express')
const app = express()

// database
const db = require('./database')

// routers
let index = require('./routes/index')

// app uses
app.use('/', index);


app.get('*', function(req, res, next){
    res.locals.user = req.user || null;
    next();
});

app.get('/', function (req, res) {
    res.send('API Running')
})

app.listen(4000)