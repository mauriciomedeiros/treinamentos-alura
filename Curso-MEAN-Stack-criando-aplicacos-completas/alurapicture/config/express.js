var express = require('express');
var consign = require('consign');
var app = express();
var bodyParser = require('body-parser');

app.set('secret', 'chavetoken');

app.use(express.static('./public'));
app.use(bodyParser.json());

consign({cwd: 'app'})
   .include('models')
   .then('api')
   .then('routes/auth.js')
   .then('routes')
   .into(app);

module.exports = app;
