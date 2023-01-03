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

    // [GET] /products/:slug
    show(req, res, next) {
        Product.findOne({ slug: req.params.slug })
            .then((products) => {
                res.render('products/show');
            })
            .catch(next);
    }
}

module.exports = new ProductController();
