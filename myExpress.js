var express = require('express');
const bodyParser = require('body-parser');
const { response } = require('express');
var app = express();
app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({ extended: true }));
let M;

var server = app.listen(8000, function () {
    console.log("Server is up!");
});

app.use(express.static(__dirname + '/'));

app.get('/calcHtml', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.get('/readme', function(req, res) {
    res.sendFile(__dirname + '/readme.html');
});

app.get('/test', function(req, res) {
    res.sendFile(__dirname + '/test.html');
});

