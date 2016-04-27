var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var port = 4000;
var controller = require('./controller.js');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/products');
var Product = require('./schema.js');

var app = express();

var corsOptions = {
  origin: 'http://localhost:4000',
};

app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));
app.use(cors(corsOptions));

app.post('/api/products', controller.addProduct);
app.get('/api/products', controller.getProduct);
app.get('/api/products/:id', controller.getOneProduct);
app.put('/api/products/:id', controller.changeProduct);
app.delete('/api/products/:id', controller.deleteProduct);

app.listen(port, function() {
  console.log('Hey Listen! on port:', port);
});
