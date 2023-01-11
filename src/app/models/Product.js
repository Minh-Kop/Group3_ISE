const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Product = new Schema({
    name: String,
    price: String,
    image: String,
    slug: String,
    category: String,
    gender: String,
    brand: String,
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Product', Product);
//module.exports = mongoose.model('Product', Product,'StockY');
