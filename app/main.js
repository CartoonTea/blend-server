var express = require('express');
var app = express();
var env = 

app.use('/static', express.static(__dirname + '/static'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/static/index.html');
});

app.get('/callback', function(req, res) {
    req.query.code
    

});

app.listen(3000);

console.log('listening on port 3000');
