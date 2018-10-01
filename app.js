var express = require("express");
var app = express();

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/home.html');
});

app.get('/register', function(req, res) {
    res.sendFile(__dirname + '/register.html');
});

app.get('/login', function(req, res) {
    res.sendFile(__dirname + '/login.html');
});

app.get('/profile/:id', function(req, res) {
    res.send('My Profile name is:' + req.params.id);
});

app.listen(3000);