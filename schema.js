var mongoose = require('mongoose');
var Product = mongoose.Schema;

var productSchema = mongoose.Schema({
  title: {type: String, required: true, unique: true, index: true},
  description: {type: String, required: true},
  price: {type: Number, required: true, min: 0},
});

module.exports = mongoose.model('Product', productSchema);
