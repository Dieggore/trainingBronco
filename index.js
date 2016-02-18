/**
 * Created by dmontes on 2/17/16.
 */
var express = require('express');
var app = express();



app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});