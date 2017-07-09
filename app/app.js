const express = require('express');

const fileUpload = require('express-fileupload');


const bodyParser = require('body-parser');

const routes = require('./routers/routes');

const app = express();
app.use(fileUpload());

app.use(express.static(__dirname + '/public'));
// app.use(bodyParser.json());

app.use(bodyParser.urlencoded({'extended': true}));


app.use(routes);

module.exports = app;
