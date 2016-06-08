/**
 * Created by Bossco on 6/7/2016.
 */
var express = require('express');

var app = express();

app.use(express.static('public'));

app.listen(3000, function () {
    console.log("Express server up and running in port 3000");
})