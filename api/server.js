const express = require('express');
const mongoose = require('mongoose')
const routes = require('./routes');
const bodyParser = require('body-parser');
const path = require('path');
require('dotenv').config({ path: './.env' })

const app = express();

app.use(express.static(__dirname + '/dist/angTemp'))

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true}, (err, db) => {
    if(err) return console.log(err)
    routes(app)
})

const listener = app.listen(process.env.PORT || 3000, () => {
    console.log('Server is listening on port ' + listener.address().port)
})