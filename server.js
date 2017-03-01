// write you're code here Good Luck
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var fs = require('fs');
var datajson = require('./data/articles.json')

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', function(req, res) {
    res.redirect("/index.html");
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

app.post('/post/article', function(req, res) {
    fs.readFile('./data/articles.json', 'utf-8', function(err, data) {
        if (err) {
            throw err
        };
        var database = JSON.parse(data)
        var article = req.body;
        console.log(article)
        var len = database.articles.length;
        // article.id = len + 1;

        database.articles.push({ id: len + 1, titre: article.title, content: article.content });

        var newDatabase = JSON.stringify(database, null, 2)

        console.log(newDatabase);

        fs.writeFile('./data/articles.json', newDatabase, function(err) {
            if (err) {
                console.log(err)
            }
        });
    });
    res.send("article posté")
});


app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
});