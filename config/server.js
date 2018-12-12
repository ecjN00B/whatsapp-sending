var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    consign = require('consign');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

consign()
    .include('app/routes')
    .then('app/services')
    .then('app/controllers')
    .into(app);

module.exports = app;