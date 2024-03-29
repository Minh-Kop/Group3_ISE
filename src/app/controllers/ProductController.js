const Product = require('../models/Product');
const { mongooseToObject } = require('../../util/mongoose');
//!product
class ProductController {

    // [GET] /product/:slug
    show(req, res, next) {
        Product.findOne({ slug: req.params.slug })
            .then((product) =>
                res.render('./products/show', {
                    product: mongooseToObject(product),
                }),
            )
            .catch(next);
    }
}

module.exports = new ProductController();
