// write you're code here Good Luck
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var fs = require('fs');
var datajson = require('./data/articles.json')

app.use(express.static('public'));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', function(req, res) {
    res.redirect("/index");
});

app.get('/index', function(req, res) {
    res.sendFile(path.join(__dirname, '/public', 'index.html'));
});

app.get('/formulaire', function(req, res) {
    res.sendFile(path.join(__dirname, '/public', 'formulaire.html'));
})

app.get('/data', function(req, res) {
    res.send(datajson);
});

app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
});