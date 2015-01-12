var http = require('http');
var express = require('express');
var session = require('express-session');
var app = express();
var env = require('./env.json');
var github = require('octonode');

github.auth.config({
  id: env.client_id,
  secret: env.client_secret
});

app.use(session({
  secret: 'blender dem webz eh',
  resave: false,
  saveUninitialized: true
}));

app.use('/static', express.static(__dirname + '/static'));

app.get('/callback', function(req, res) {
  var code = req.query.code;
  github.auth.login(code, function (err, token) {
    req.session.token = token;
    res.writeHead(302, { 'Location': '/#/repos' });
    res.end();
  });
});

app.get('/api/repos', function (req, res) {
  // console.log(req.session.token);
  var client = github.client(req.session.token);
  var ghme = client.me();
  ghme.repos(function (err, data, structure) {
    res.write(JSON.stringify(data));
    res.end();
  });
});

app.get('/repos/:repo/labels', function (req, res) {

});

app.get('*', function (req, res) {
  res.sendFile(__dirname + '/static/index.html');
});

app.listen(3000);

console.log('listening on port 3000');
