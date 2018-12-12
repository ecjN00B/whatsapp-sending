var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    consign = require('consign');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

module.exports = app;