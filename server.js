// Sorry it's all in JS at this point I'll make it TS but since I'm more familiar with javascript, I coded it in js.
var request = require('request');
const express = require('express');
const path = require('path'); //built into node js
const app = express();

/*
const mongoose = require("./models/db.js"); // will code it in later
const History = require("./models/model.js")
*/

function stat(num) {
    var status;
    if (num == null)
        status = "down";
    else
    if (num != 200)
        status = "down";
    else
        status = "operational";
    return status;
}





app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/static/index.html'));
})

app.post('/updated', (req, res) => {
    var now = new Date();
    if (now.getMinutes() < 10)
        var time = (now.getMonth() + 1) + '/' + now.getDate() + "/" + now.getFullYear() + " " + now.getHours() + ":0" + now.getMinutes();
    else
        var time = (now.getMonth() + 1) + '/' + now.getDate() + "/" + now.getFullYear() + " " + now.getHours() + ":" + now.getMinutes();
    res.send(time);
})

app.get('/css/index.css', (req, res) => {
    res.sendFile(path.join(__dirname, '/static/css/index.css'));
})

app.get('/js/index.js', (req, res) => {
    res.sendFile(path.join(__dirname, '/static/js/index.js'));
})


app.post('/ann', (req, res) => {
    request('https://announcements.harker.org/', function(error, response, body) {
        res.send(`${response && response.statusCode}`);
    });
})

app.post('/bell', (req, res) => {
    request('http://harkerdev.github.io/bellschedule/', function(error, response, body) {
        res.send(`${response && response.statusCode}`);
    });
})

app.post('/food', (req, res) => {
    request('https://foodcourt.harker.org/login', function(error, response, body) {
        res.send(`${response && response.statusCode}`);
    });
})

app.post('/vol', (req, res) => {
    request('https://volunteering.harker.org/', function(error, response, body) {
        res.send(`${response && response.statusCode}`);
    });
})

app.post('/pay', (req, res) => {
    request('https://pay.harker.org/', function(error, response, body) {
        res.send(`${response && response.statusCode}`);
    });
})

app.post('/reading', (req, res) => {
    request('https://reading.harker.org/login', function(error, response, body) {
        res.send(`${response && response.statusCode}`);
    });
})

app.post('/dev', (req, res) => {
    request('https://dev.harker.org/', function(error, response, body) {
        res.send(`${response && response.statusCode}`);
    });
})

app.post('/short', (req, res) => {
    request('https://go.harker.org/', function(error, response, body) {
        res.send(`${response && response.statusCode}`);
    });
})

app.post('/git', (req, res) => {
    request('https://gitlab.dev.harker.org/', function(error, response, body) {
        res.send(`${response && response.statusCode}`);
    });
})

app.post('/planner', (req, res) => {
    request('https://planner.harker.org/login', function(error, response, body) {
        res.send(`${response && response.statusCode}`);
    });
})



app.listen(3000, () => {
    console.log("Listening on 3000...")
})