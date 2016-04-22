var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var config = require('./config');

// Create Express web app
var app = express();

// Serve static assets
app.use(express.static(path.join(__dirname, 'public')));

// Parse incoming form-encoded HTTP bodies
app.use(bodyParser.urlencoded({
    extended: true
}));

var webhook = require('./smsHandler.js');
var locationCtrl = requite('./locationHandler.js');

app.get('/', function (req, res) {
    response.status(500);
    response.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/sms', webhook());
app.get('/getLocation', locationCtrl.renderPage());
app.post('/getLocation', locationCtrl.getLocation());


app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// Handle 404
app.use(function (req, res, next) {
    res.status(404);
    res.sendFile(path.join(__dirname, 'public', '404.html'));
});

// Unhandled errors (500)
app.use(function (err, req, res, next) {
    console.error('An application error has occurred:');
    console.error(err);
    console.error(err.stack);
    res.status(500);
    res.sendFile(path.join(__dirname, 'public', '500.html'));
});

app.listen(port, function () {
    console.log('listenin on port : ' + port);

})

