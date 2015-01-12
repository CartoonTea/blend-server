var http = require('http');
var express = require('express');
var app = express();
var env = require('./env.json');
var github = require('octonode');

github.auth.config({id: env.client_id,
secret: env.client_secret});

app.use('/static', express.static(__dirname + '/static'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/static/index.html');
});

app.get('/callback', function(req, res) {
    var code = req.query.code;
    github.auth.login(code, function (err, token) {
        console.log(token);
    });
});

app.get('/repositories', function (req, res) {
    //TODO
});

app.get('/repositories/:repo/labels', function (req, res) {
    //TODO
});

app.listen(3000);

console.log('listening on port 3000');
