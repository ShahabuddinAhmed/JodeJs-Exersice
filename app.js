var express = require("express");
var app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/home.html');
});

app.get('/register', function(req, res) {
    res.sendFile(__dirname + '/register.html');
});

app.get('/login', function(req, res) {
    res.sendFile(__dirname + '/login.html');
});

app.get('/profile/:name', function(req, res) {
    var data = {age: '24', dept: 'CSE', hobbies: ['IT Engineer', 'Software Enginner', 'programmer']  };
    res.render('profile', {person: req.params.name, data: data});
});

app.listen(3000);