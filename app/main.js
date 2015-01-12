var http = require('http');
var express = require('express');
var app = express();

app.use('/static', express.static(__dirname + '/static'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/static/index.html');
});

app.get('/callback', function(req, res) {
    var code = req.query.code;
    var body = {
        client_id: env.client_id,
        client_secret: env.client_secret,
        code: code
    };

    var opt = {
        host: 'https://github.com/login/oauth/access_token',
        path: '/',
        port: '3000',
        method: 'POST'
    };

    var cb = function(response) {
        var data = '';

        response.on('data', function (chunk) {
            data += chunk;
        });

        response.on('end', function () {
            var username = '';
            var access_token = '';
            console.log(data);
        });
    }
    var req_ = http.request(opt, cb);
    req_.write(JSON.stringify(body));
    req_.end();
    

});

app.listen(3000);

console.log('listening on port 3000');
