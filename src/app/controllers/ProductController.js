const Product = require('../models/Product');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class ProductController {
    // index(req, res,next) {
    //     Product.find({})
    //         .then((products) =>
    //             res.render('home', {
    //                 products: mutipleMongooseToObject(products),
    //             }),
    //         )
    //         .catch(next);
    // }
    show(req, res, next) {
        res.send('ok ok');
    }
}

module.exports = new ProductController();
