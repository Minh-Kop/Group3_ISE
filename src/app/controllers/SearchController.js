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
    search(req,res,next) {
        var key = req.body.key;
        console.log(key);
        Product.find({$or: [{name:key}]})
        .then((product) =>
            res.render('./products/show', {
            product: mongooseToObject(product),
            }),
        )
        .catch(next);
    }
}

module.exports = new SearchController();
