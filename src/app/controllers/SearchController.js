const Product = require('../models/Product');
const { mongooseToObject } = require('../../util/mongoose');

class SearchController {
    //get /search
    index(req, res) {
        res.render('search');
    }
    show(req, res) {
        res.send('new detail');
    }
    searchproduct(req,res,next) {
        var key = req.body.key;

        Product.findOne({$or: [{name:key}]})
        .then((product) =>
            res.render('search', {
            product: mongooseToObject(product),
            }),
        )
        .catch(next);
    }
}

module.exports = new SearchController();
